"use client"
import Image from "next/image"
import { ITodo } from "@/app/lib/definitions"

interface TodoCardProps {
    todo: ITodo;
    handleDelete: (id: string) => void;
    toggleComplete: (id: string) => void;
}

export default function TodoCard({ todo, handleDelete, toggleComplete }: TodoCardProps ) {
  return (
    <div className={`rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 ${todo.done ? "bg-green-100" : "bg-white"}`}>
        <div className='p-4'>
            <div className="flex items-center justify-between mb-2">
                <h3 className={`text-xl font-semibold ${todo.done ? "line-through text-gray-500" : "text-gray-800"}`}>
                    {todo.title}
                </h3>
                <div className="inline-flex items-center mr-2">
                    <label className="flex items-center cursor-pointer relative">
                        <input onChange={() => toggleComplete(todo.id)} id={`todo-${todo.title}`} type="checkbox" checked={todo.done ?? false} className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-slate-300 checked:bg-slate-800 checked:border-slate-800" />
                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        </span>
                    </label>
                </div> 
            </div>
            <p className={`mb-2 ${todo.done ? "line-through text-gray-500" : "text-gray-600"}`}>
                {todo.description}
            </p>
            <div className="flex items-center justify-between">
                <div className="flex items-center text-indigo-600">
                    <Image 
                        className="mr-1" 
                        style={{filter: "invert(28%) sepia(59%) saturate(6558%) hue-rotate(241deg) brightness(93%) contrast(93%)"}} 
                        src="/assets/img/clock.svg" 
                        alt="clock" 
                        width={24} 
                        height={24}
                    />
                    <span>{todo.estimated_time} mins</span>
                </div>
                <button onClick={() => handleDelete(todo.id)} className="p-1 rounded hover:bg-gray-100">
                    <Image
                        style={{filter: "invert(25%) sepia(92%) saturate(2272%) hue-rotate(344deg) brightness(115%) contrast(88%)"}}
                        src={'/assets/img/trash-can.svg'}
                        alt='Delete todo'
                        width={32}
                        height={32}
                    />
                    <span className="sr-only">Delete Todo</span>
                </button>
            </div>
        </div>
    </div>
  )
}