"use client"

import { useState, useEffect } from "react";
import TodoCard from "@/app/ui/todos/todo-card";
import TodoForm from "@/app/ui/todos/todo-form";
import TodoSkeleton from "@/app/ui/todos/todo-skeleton";
import Image from "next/image";
import { ITodo, ITodoBD } from "@/app/lib/definitions";
import axios from "axios";

export default function TodoList () {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    const addTodo = (newTodo: ITodo) => {
      setTodos([...todos, newTodo]);
      setShowForm(false);
    };

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('http://localhost:8000/v1/todos');
                setTodos(response.data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchTodos();
    }, [todos.length])

    const handleDelete = async (id: string) => {
        // optimistic update
        const previousTodos = todos;
        setTodos((current) => current.filter((todo) => todo.id !== id));

        try {
            await axios.delete(`http://localhost:8000/v1/todos/${id}`);
        } catch (err) {
            console.error(err);
            setTodos(previousTodos);
        } finally {
            setIsLoading(false);
        }
    }

    const handleSubmit = async (newTodo: ITodoBD) => {
        const previousTodos = todos;
        const tempTodo = { ...newTodo, id: Math.random().toString(), done: false };
        setTodos([...todos, tempTodo]);
        toggleForm();
        try {
            await axios.post(`http://localhost:8000/v1/todos`, newTodo, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        } catch (err) {
            console.error(err);
            setTodos(previousTodos);
        } finally {
            setIsLoading(false);
        }
    }

    const toggleComplete = (id: string) => {
        setTodos((currentTodos) => currentTodos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo ));
    }

    if(isLoading) {
        return (
            <div className="bg-white shadow-lg rounded-xl p-8">
                <div className="flex items-center justify-between mx-5 mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">📜 TODO List</h1>
                </div>
                <div className="rounded-lg p-3 flex flex-col gap-5">
                    <TodoSkeleton/>
                </div>
            </div>
        )
    }
  

    return (
        <div className="bg-white shadow-lg rounded-xl p-8">
            <div className="flex flex-col gap-3 items-center justify-between mx-5 mb-6 sm:flex-row">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">📜 TODO List</h1>
                {
                    !showForm && (
                        <button
                            onClick={toggleForm}
                            className="text-xl flex items-center gap-1 px-8 py-2 sm:px-2 bg-indigo-600 rounded-2xl hover:bg-indigo-700 transform transition-all duration-300 hover:scale-105 "
                        >
                        {
                        <Image
                            className="mr-1"
                            style={{filter: "invert(100%)"}}
                            src="/assets/img/plus.svg"
                            width={24}
                            height={24}
                            alt="Add a todo"
                        />
                        }
                        Add todo
                    </button>
                    )
                }
            </div>
            <div className="rounded-lg p-3 flex flex-col gap-5">
                {
                    showForm ? (
                        <TodoForm onAddTodo={handleSubmit} onCancel={() => toggleForm()}/>
                    ) : (
                        <>
                            {todos.map(todo => (
                                <TodoCard todo={todo} key={todo.id} handleDelete={handleDelete} toggleComplete={toggleComplete}/>
                            ))}
                        </>
                    )
                }
            </div>
        </div>
    )
}