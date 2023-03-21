import UserDataSchema from "@/api/db/schemas/UserDataSchema"
import { Schema } from "mongoose"

const CommentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: UserDataSchema,
      required: true,
    },
  },
  { timestamps: true }
)

export default CommentSchema
