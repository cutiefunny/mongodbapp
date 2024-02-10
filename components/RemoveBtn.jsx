"use client";

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation";

export default function RemoveBtn({id}){
    const router = useRouter();

    const removeTopic = async () => {
        try{
            const confirm = window.confirm("Are you sure you want to remove this topic?");

            if(!confirm) return;

            const response = await fetch("http://localhost:3000/api/topics?id=" + id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(!response.ok){
                throw new Error(response.statusText);
            }

            alert("Topic removed successfully");
            console.log("Topic removed");

            router.refresh();

        }catch(error){
            console.log(error);
        }
    }

    return (
        <button style={{ color: "red" }} onClick={removeTopic}>
            <HiOutlineTrash size={24} />
        </button>
    )
}
