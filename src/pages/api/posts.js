import PostModel from "@/api/db/models/PostModel"
import auth from "@/api/middlewares/auth"
import mw from "@/api/mw"

const handler = mw({
  POST: [
    auth,
    async (req, res) => {
      const { content } = req.body
      const { user } = req

      const post = await PostModel.create({
        content,
        user: {
          id: user._id,
          name: user.name,
        },
      })

      res.send({ result: post })
    },
  ],
  GET: [
    async (req, res) => {
      try {
        const posts = await PostModel.find({}).sort({ createdAt: -1 })

        res.send({ result: posts })
      } catch (err) {
        res.status(500).send({ error: "Something went wrong!" })

        return
      }
    },
  ],
  PATCH: [
    auth,
    async (req, res) => {
      const { postId, liked } = req.body
      const { user } = req

      const post = await PostModel.findOne({ _id: postId })

      if (!post) {
        res.status(404).send({ error: "Not found" })

        return
      }

      if (liked) {
        const result = await PostModel.updateOne(
          { _id: postId },
          { $pull: { likedBy: { "user.id": user._id } } }
        )

        res.send({ result })
      } else {
        const addUser = {
          user: {
            id: user._id,
            name: user.name,
          },
        }

        const result = await PostModel.updateOne(
          { _id: postId },
          { $push: { likedBy: addUser } }
        )

        res.send({ result })
      }
    },
  ],
})

export default handler
