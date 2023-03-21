import Button from "@/web/components/Button"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import api from "@/web/services/api"
import { useRouter } from "next/router"

const initialValues = {
  content: "",
}

const PublishSomething = (props) => {
  const { type = "post", postId, ...otherProps } = props

  const router = useRouter()

  const handleSubmit = async (values, { resetForm }) => {
    if (values.content === "") {
      return
    }

    try {
      type === "post"
        ? await api.post("/posts", values)
        : await api.post("/comments", { postId, ...values })

      router.reload(window.location.pathname)
    } finally {
      resetForm()
    }
  }

  return (
    <div {...otherProps}>
      <Form initialValues={initialValues} onSubmit={handleSubmit}>
        <FormField
          name="content"
          placeholder="Type your text right here..."
          as="textarea"
          className="resize-none h-11"
        ></FormField>
        <Button type="submit">{type === "post" ? "POST" : "COMMENT"}</Button>
      </Form>
    </div>
  )
}

export default PublishSomething
