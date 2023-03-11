import UserModel from "@/api/db/models/UserModel"
import mw from "@/api/mw"
import hashPassword from "@/api/utils/hashPassword"

const handler = mw({
  POST: [
    async (req, res) => {
      const { name, email, password } = req.body
      const passwordHash = hashPassword(password)

      await UserModel.create({ name, email, passwordHash })

      res.send({ result: true })
    },
  ],
})

export default handler
