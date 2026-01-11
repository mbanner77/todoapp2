"use client";

interface TodoItemProps {
  todo: {
    title: string;
    category: string;
    priority: string;
    dueDate: string;
    completed: boolean;
  };
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="p-4 bg-gray-800 rounded mb-2">
      <h2 className="text-xl">{todo.title}</h2>
      <p>Category: {todo.category}</p>
      <p>Priority: {todo.priority}</p>
      <p>Due Date: {todo.dueDate}</p>
    </div>
  );
}