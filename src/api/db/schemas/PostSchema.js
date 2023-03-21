import CommentSchema from "@/api/db/schemas/CommentSchema"
import LikedBySchema from "@/api/db/schemas/LikedBySchema"
import UserDataSchema from "@/api/db/schemas/UserDataSchema"
import { Schema } from "mongoose"

const PostSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: UserDataSchema,
      required: true,
    },
    likedBy: [LikedBySchema],
    comments: [CommentSchema],
  },
  { timestamps: true }
)

export default PostSchema
