import { useState, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../components/Button";
import { ThemeContext } from "../context/ThemeContext";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const { dark, setDark } = useContext(ThemeContext);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleDone = (id) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const filtered = tasks.filter(t =>
    filter === "all" ? true : filter === "active" ? !t.done : t.done
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <Button variant="secondary" onClick={() => setDark(!dark)}>
          Toggle {dark ? "Light" : "Dark"}
        </Button>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded flex-grow"
          placeholder="Add new task..."
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2 mb-4">
        {["all", "active", "completed"].map(f => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      <ul>
        {filtered.map(t => (
          <li key={t.id} className="flex justify-between border-b py-2">
            <span
              className={`${t.done ? "line-through text-gray-500" : ""}`}
              onClick={() => toggleDone(t.id)}
            >
              {t.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(t.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
