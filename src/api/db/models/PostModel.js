import PostSchema from "@/api/db/schemas/PostSchema"
import mongoose from "mongoose"

const PostModel = mongoose.modelNames().includes("Post")
  ? mongoose.model("Post")
  : mongoose.model("Post", PostSchema)

export default PostModel
