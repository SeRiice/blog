import clsx from "clsx"
import { ErrorMessage, Field } from "formik"

const FormField = (props) => {
  const { name, className, ...otherProps } = props

  return (
    <>
      <Field
        name={name}
        className={clsx(
          "border-2 p-2 rounded-lg focus:border-blue-400 focus:outline-none",
          className
        )}
        {...otherProps}
      ></Field>
      <ErrorMessage
        component="p"
        name={name}
        className="text-red-500 text-sm ml-2"
      />
    </>
  )
}

export default FormField
