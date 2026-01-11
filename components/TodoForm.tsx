"use client";

import { useState } from "react";

interface TodoFormProps {
  addTodo: (todo: { title: string; category: string; priority: string; dueDate: string; completed: boolean }) => void;
}

export function TodoForm({ addTodo }: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo({
      title,
      category,
      priority,
      dueDate,
      completed: false,
    });
    setTitle("");
    setCategory("");
    setPriority("Low");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white"
      />
      <button type="submit" className="p-2 bg-indigo-600 rounded text-white">
        Add Todo
      </button>
    </form>
  );
}