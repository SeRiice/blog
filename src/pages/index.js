import AppContext from "@/web/components/AppContext"
import PublishSomething from "@/web/components/PublishSomething"
import Page from "@/web/components/Page"
import PostSummary from "@/web/components/PostSummary"
import api from "@/web/services/api"
import { useContext, useEffect, useState } from "react"

const IndexPage = () => {
  const {
    state: { session },
  } = useContext(AppContext)

  const [posts, setPosts] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { result },
        } = await api.get("/posts")

        setPosts(result)
      } catch (err) {
        return
      }
    })()
  }, [])

  return (
    <Page title="Home page">
      {session && <PublishSomething></PublishSomething>}
      <div
        className={`flex flex-col gap-4 ${
          session ? "mt-8 pt-8 border-t-2" : "mt-4"
        }`}
      >
        {posts.map((post) => (
          <PostSummary
            post={post}
            key={post._id}
            session={session}
          ></PostSummary>
        ))}
      </div>
    </Page>
  )
}

export default IndexPage
