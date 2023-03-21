import formatDate from "@/web/utils/formatDate"
import { Fragment } from "react"

const CommentSummary = (props) => {
  const {
    comment: { content, user, createdAt },
  } = props

  return (
    <article className="border-2 p-4 rounded-lg flex flex-col hover:bg-gray-200 gap-2">
      <header className="text-xs">
        <p className=" italic">
          Commented on {formatDate(new Date(createdAt))} by{" "}
          <span className="font-semibold hover:underline text-blue-400">
            {user.name}
          </span>
        </p>
      </header>
      <div>
        <p className="text-sm">
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
    </article>
  )
}

export default CommentSummary
