"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://mongodbapp.vercel.app/api/topics", {
            method: "POST",
            body: JSON.stringify({title, description}),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok){
            throw new Error(response.statusText);
        }

        const data = await response.json();
        alert(data.message);

        router.replace("/");
        router.refresh();
    };

    return <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            className="border border-slate-500 px-8 py-2" 
            type="text"
            placeholder="Topic Title"
        />

        <input
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            className="border border-slate-500 px-8 py-2" 
            type="text"
            placeholder="Topic Description"
        />

        <button className="bg-green-600 font-bold text-white px-6 py-3 w-fit" type="submit">
            Add Topic
        </button>
    </form>
}