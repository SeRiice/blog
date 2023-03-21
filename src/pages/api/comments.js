import PostModel from "@/api/db/models/PostModel"
import auth from "@/api/middlewares/auth"
import mw from "@/api/mw"

const handler = mw({
  POST: [
    auth,
    async (req, res) => {
      const { postId, content } = req.body
      const { user } = req

      const post = await PostModel.findOne({ _id: postId })

      if (!post) {
        res.status(404).send({ error: "Not found" })

        return
      }

      const newComment = {
        content,
        user: {
          id: user._id,
          name: user.name,
        },
      }

      const result = await PostModel.updateOne(
        { _id: postId },
        { $push: { comments: newComment } }
      )

      res.send({ result })
    },
  ],
})

export default handler
