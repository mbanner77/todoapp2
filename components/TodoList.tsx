"use client";

import { TodoItem } from "@/components/TodoItem";

interface Todo {
  title: string;
  category: string;
  priority: string;
  dueDate: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <div className="mt-4">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
}