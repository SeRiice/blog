import clsx from "clsx"
import { Formik, Form as FormikForm } from "formik"

const Form = (props) => {
  const { children, className, formProps, ...otherProps } = props

  return (
    <Formik {...otherProps}>
      <FormikForm
        className={clsx("flex flex-col gap-4", className)}
        noValidate
        {...formProps}
      >
        {children}
      </FormikForm>
    </Formik>
  )
}

export default Form
