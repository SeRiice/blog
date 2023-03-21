import UserDataSchema from "@/api/db/schemas/UserDataSchema"
import { Schema } from "mongoose"

const LikedBySchema = new Schema(
  {
    user: {
      type: UserDataSchema,
      required: true,
    },
  },
  { timestamps: true, _id: false }
)

export default LikedBySchema
