import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function GET(request) {
    const id = request.nextUrl.searchParams.get("id");
    const topic = await Topic.findById(id);
    return NextResponse.json(topic);
}

export async function POST(request) {
    const { _id, title, description } = await request.json();
    await Topic.updateOne({_id}, {title, description});
    return NextResponse.json({message: "Topic created successfully"}, { status: 201 });
}