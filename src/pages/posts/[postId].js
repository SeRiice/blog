import AppContext from "@/web/components/AppContext"
import CommentSummary from "@/web/components/CommentSummary"
import Page from "@/web/components/Page"
import PostSummary from "@/web/components/PostSummary"
import PublishSomething from "@/web/components/PublishSomething"
import api from "@/web/services/api"
import { useContext, useEffect, useState } from "react"

export const getServerSideProps = async ({ params }) => {
  return {
    props: { params },
  }
}

const PostPage = (props) => {
  const {
    params: { postId },
  } = props

  const {
    state: { session },
  } = useContext(AppContext)

  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { result },
        } = await api.get(`/posts/${postId}`)

        setPost(result)

        setComments(result.comments.reverse())
      } catch (err) {
        return
      }
    })()
  }, [])

  return (
    <Page title="Post">
      <div className="flex flex-col mt-4 gap-4">
        {post && <PostSummary post={post} session={session}></PostSummary>}
        <PublishSomething type="comment" postId={postId}></PublishSomething>
        <div
          className={`flex flex-col gap-4 ${
            session && comments.length > 0 ? "mt-4 pt-8 border-t-2" : "mt-4"
          }`}
        >
          {post &&
            comments.map((comment) => {
              return (
                <CommentSummary
                  key={comment._id}
                  comment={comment}
                ></CommentSummary>
              )
            })}
        </div>
      </div>
    </Page>
  )
}

export default PostPage
