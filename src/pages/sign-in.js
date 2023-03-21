import AppContext from "@/web/components/AppContext"
import Button from "@/web/components/Button"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import Page from "@/web/components/Page"
import { useRouter } from "next/router"
import { useContext } from "react"
import * as yup from "yup"

const initialValues = {
  email: "",
  password: "",
}

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().required().label("Password"),
})

const SignInPage = () => {
  const router = useRouter()

  const {
    actions: { signIn },
  } = useContext(AppContext)

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const [err] = await signIn(values)

      if (!err) {
        router.push("/")

        return
      }
    } finally {
      resetForm()
    }
  }

  return (
    <Page title="Sign-in" variant="sm">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField
          name="email"
          type="email"
          placeholder="Enter your email"
          label="E-mail"
        ></FormField>
        <FormField
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        ></FormField>
        <Button type="submit">SUBMIT</Button>
      </Form>
    </Page>
  )
}

export default SignInPage
