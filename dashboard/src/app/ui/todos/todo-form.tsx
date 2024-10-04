"use client"

import React from 'react';
import { ITodoBD } from '@/app/lib/definitions';
import Image from 'next/image';

interface TodoFormProps {
    onAddTodo: (todo: ITodoBD) => void;
    onCancel: () => void;
}

export default function TodoForm({ onAddTodo, onCancel }: TodoFormProps) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const newTodo: ITodoBD = {
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            estimated_time: parseInt(formData.get('estimated_time') as string, 10),
        };
        onAddTodo(newTodo);
        form.reset();
    };
  
    return (
        <form onSubmit={handleSubmit} className="px-2 sm:px-8 pt-6 text-lg sm:text-xl">
            <div className="mb-5">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                    Title
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" name="title" type="text" placeholder="Todo title..." required />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" name="description" type="text" placeholder="Todo description..." required />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="estimated_time">
                    Estimated Time (minutes)
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="estimated_time" name="estimated_time" type="number" placeholder="Estimated time..." required />
            </div>
            <div className="mt-10 flex items-center justify-between text-xl">
                <button onClick={onCancel} type='button' className=" text-black p-2 px-5 border border-indigo-600 rounded-2xl hover:bg-indigo-700 hover:text-white">
                    Cancel
                </button>
                <button className="flex items-center gap-1 p-2 px-3 border bg-indigo-600 rounded-2xl hover:bg-indigo-700">
                    <Image
                        style={{filter: "invert(100%)"}}
                        src="/assets/img/plus.svg"
                        width={24}
                        height={24}
                        alt="create new todo"
                    />
                    Add todo
                </button>
            </div>
        </form>
    );
}