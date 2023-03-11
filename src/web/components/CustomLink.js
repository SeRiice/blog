import clsx from "clsx"
import Link from "next/link"

const CustomLink = (props) => {
  const { className, ...otherProps } = props

  return (
    <Link className={clsx("hover:underline", className)} {...otherProps}></Link>
  )
}

export default CustomLink
