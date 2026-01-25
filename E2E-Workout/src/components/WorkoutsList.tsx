import { useEffect, useState, useCallback } from "react";

type Workout = {
  name: string;
  username: string;
  createdAt: string | null;
};

function WorkoutsList() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string>(() => {
    return localStorage.getItem("e2e.username") || "Sahil";
  });
  const [newName, setNewName] = useState("");

  const fetchWorkouts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://127.0.0.1:8000/workoutslist");
      const data = await res.json();
      // backend currently returns array of arrays: [Workout_name, User_Id, Created_At]
      const parsed: Workout[] = Array.isArray(data)
        ? data.map((item: any[]) => ({
            name: item[0] ?? "",
            username: item[1] ?? "",
            createdAt: item[2] ?? null,
          }))
        : [];
      setWorkouts(parsed);
    } catch (e: any) {
      setError(e?.message || "Failed to fetch workouts");
    } finally {
      setLoading(false);
    }
  }, []);

  // initial load
  useEffect(() => {
    fetchWorkouts();
  }, [fetchWorkouts]);

  // refresh when other components dispatch this event
  useEffect(() => {
    const onUpdated = () => fetchWorkouts();
    window.addEventListener("workouts-updated", onUpdated);
    return () => window.removeEventListener("workouts-updated", onUpdated);
  }, [fetchWorkouts]);

  async function handleAdd(e?: React.FormEvent) {
    e?.preventDefault();
    if (!newName.trim()) return;
    try {
      await fetch(
        `http://127.0.0.1:8000/addworkout?name=${encodeURIComponent(
          newName,
        )}&username=${encodeURIComponent(username)}`,
        { method: "POST" },
      );
      setNewName("");
      localStorage.setItem("e2e.username", username);
      // notify via event so any listener can refresh
      window.dispatchEvent(new Event("workouts-updated"));
    } catch (e: any) {
      setError(e?.message || "Failed to add workout");
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-gray-900 text-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Workouts</h2>
        <div className="flex gap-2">
          <button
            onClick={fetchWorkouts}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Refresh
          </button>
          <button
            onClick={() => {
              setWorkouts([]);
              fetch("http://127.0.0.1:8000/clear").then(() => fetchWorkouts());
            }}
            className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded"
            title="Clear DB table (calls /clear)"
          >
            Clear
          </button>
        </div>
      </div>

      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          className="flex-1 px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          placeholder="Workout name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          className="w-36 px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 rounded"
        >
          Add
        </button>
      </form>

      {loading && <div className="text-sm text-gray-400">Loading…</div>}
      {error && <div className="text-sm text-red-400 mb-2">{error}</div>}

      <ul className="space-y-2">
        {workouts.length === 0 && !loading ? (
          <li className="text-sm text-gray-400">No workouts yet</li>
        ) : (
          workouts.map((w, idx) => (
            <li
              key={`${w.name}-${w.username}-${idx}`}
              className="flex items-center justify-between bg-gray-800 p-3 rounded"
            >
              <div>
                <div className="font-medium">{w.name}</div>
                <div className="text-sm text-gray-400">{w.username}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs text-gray-400">
                  {w.createdAt ?? "—"}
                </div>
                {/* Pop action: backend pop endpoint not yet implemented in repo;
                    this will call /pop-workout if available */}
                <button
                  onClick={async () => {
                    try {
                      await fetch(
                        `http://127.0.0.1:8000/pop-workout?name=${encodeURIComponent(
                          w.name,
                        )}&username=${encodeURIComponent(w.username)}`,
                        { method: "PUT" },
                      );
                      await fetchWorkouts();
                    } catch {
                      // ignore — endpoint may not exist yet
                    }
                  }}
                  className="px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
                  title="Send to bottom (calls /pop-workout)"
                >
                  Pop
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default WorkoutsList;
