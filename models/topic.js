import mongoose, { Schema } from "mongoose";

const TopicSchema = new Schema({
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Topic = mongoose.models.Topic || mongoose.model("Topic", TopicSchema);

export default Topic;