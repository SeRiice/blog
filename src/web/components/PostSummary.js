import formatDate from "@/web/utils/formatDate"
import { Fragment, useState } from "react"
import {
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline"

import { HeartIcon as HeartIconFill } from "@heroicons/react/24/solid"

import iconStyle from "@/web/styles/iconStyle"
import Button from "@/web/components/Button"
import api from "@/web/services/api"
import isLikedByUser from "@/web/utils/isLikedByUser"
import { useRouter } from "next/router"

const PostSummary = (props) => {
  const {
    session,
    post: { _id, content, createdAt, user, likedBy, comments },
  } = props

  //console.log(_id, content, createdAt, user, likedBy)

  const router = useRouter()

  const clicked = isLikedByUser(likedBy, session)

  const [like, setLike] = useState({
    clicked,
    result: likedBy.length,
  })

  const handleClickLike = async () => {
    try {
      await api.patch("/posts", { postId: _id, liked: like.clicked })
    } catch (err) {
      return
    }

    setLike({
      clicked: !like.clicked,
      result: like.clicked ? like.result - 1 : like.result + 1,
    })
  }

  const handleClickComment = () => {
    router.push(`/posts/${_id}`)
  }

  return (
    <article className="border-2 p-4 rounded-lg flex flex-col hover:bg-gray-200 gap-2">
      <header className="text-xs">
        <p className=" italic">
          Posted on {formatDate(new Date(createdAt))} by{" "}
          <span className="font-semibold hover:underline text-blue-400">
            {user.name}
          </span>
        </p>
      </header>
      <div>
        <p>
          {content.split("\n").map((line, index) => {
            return (
              <Fragment key={index}>
                {line}
                <br></br>
              </Fragment>
            )
          })}
        </p>
      </div>
      <div className="flex w-fit rounded-lg bg-gray-200 gap-4">
        <div className="flex gap-1 items-center">
          <Button variant="none" onClick={handleClickLike}>
            {like.clicked && session ? (
              <HeartIconFill className={iconStyle.fill.blue}></HeartIconFill>
            ) : (
              <HeartIcon className={iconStyle.blue}></HeartIcon>
            )}
          </Button>
          <span className="text-xs">{like.result}</span>
        </div>
        <div className="flex gap-1 items-center">
          <Button variant="none" onClick={handleClickComment}>
            <ChatBubbleOvalLeftEllipsisIcon
              className={iconStyle.green}
            ></ChatBubbleOvalLeftEllipsisIcon>
          </Button>
          <span className="text-xs pr-2">{comments.length}</span>
        </div>
      </div>
    </article>
  )
}

export default PostSummary
