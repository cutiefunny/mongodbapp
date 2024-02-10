"use client";

import EditTopicForm from "@/components/EditTopicForm"
import { useState } from "react";

const getTopicById = async (id) => {
    const response = await fetch("https://mongodbapp.vercel.app/api/topic?id=" + id);
    const data = await response.json();
    return data;
};

export default async function EditTopic({params}) {
    const _id = params.id;
    const topic = await getTopicById(_id);
    const title = topic.title;
    const description = topic.description;

    return <EditTopicForm title={title} description={description} id={_id} />
}