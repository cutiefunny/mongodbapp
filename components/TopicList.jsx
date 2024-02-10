import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
    try{
        const response = await fetch("http://localhost:3000/api/topics",{cache: "no-store"});

        if(!response.ok){
            throw new Error(response.statusText);
        }
        return await response.json();
    }catch(error){
        console.log(error);
    }
};

export default async function TopicList() 
{
    const topics = await getTopics();

    return (
        <>
        {topics.map((topic, index) => (
            <div key={index} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="front-bold text-2xl">{topic.title}</h2>
                    <p>{topic.description}</p>
                </div>
                <div className="flex gap-2">
                    <RemoveBtn id={topic._id} />
                    <Link href={"/editTopic/" + topic._id}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        ))}
        </>
    );
}