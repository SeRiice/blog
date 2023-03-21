import clsx from "clsx"

const variants = {
  default: "bg-blue-400 active:bg-blue-500",
  red: "bg-red-400 active:bg-red-500",
}

const Button = (props) => {
  const { variant = "default", children, ...otherProps } = props

  return (
    <button
      className={clsx(
        variant === "none"
          ? ""
          : "rounded-lg font-semibold text-center text-white py-2",
        variants[variant]
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
