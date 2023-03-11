import Button from "@/web/components/Button"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import Page from "@/web/components/Page"
import api from "@/web/services/api"
import * as yup from "yup"

const initialValues = {
  name: "",
  email: "",
  password: "",
}

const validationSchema = yup.object().shape({
  name: yup.string().min(1).required().label("Name"),
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().min(6).required().label("Password"),
})

const SignUpPage = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await api.post("/sign-up", values)
    } finally {
      resetForm()
    }
  }

  return (
    <Page variant="sm" title="Sign-up">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField
          name="name"
          placeholder="Enter your name"
          label="Name"
        ></FormField>
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

export default SignUpPage
