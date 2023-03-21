import PostModel from "@/api/db/models/PostModel"
import mw from "@/api/mw"

const handler = mw({
  GET: [
    async (req, res) => {
      const { postId } = req.query

      try {
        const post = await PostModel.findOne({ _id: postId })

        if (!post) {
          res.status(404).send({ error: "Not found!" })

          return
        }

        res.send({ result: post })
      } catch (err) {
        return
      }
    },
  ],
})

export default handler
