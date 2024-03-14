"use client";
import React, { useState } from "react";
import { db } from "../../lib/firebase/clientApp";
import { addDoc, collection } from "firebase/firestore";
import useAuth from "../../hooks/useAuth";

const AddToDOComponent = () => {
  const [todos, setTodos] = useState<any>([]);
  console.log(todos);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let todo = e.currentTarget.todo.value;
    let obj = {
      todo: todo,
      timestamp: new Date().getTime(),
      completed: false,
    }
    setTodos([ ...todos, obj ]);
    e.currentTarget.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4 flex justify-center">
        <input
          type="text"
          id="todo-input"
          name="todo"
          placeholder="Add Do Do ..."
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Add
        </button>
      </form>
      <div>
        {todos.map((todo: any, index: number) => (
          <p key={index}>{todo.todo}</p>
        ))}
      </div>
    </>
  );
};

export default AddToDOComponent;
