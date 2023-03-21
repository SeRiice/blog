import clsx from "clsx"

const base = "w-6 p-1 hover:bg-opacity-10 rounded-lg transition duration-150"

const iconStyle = {
  blue: clsx(base, "hover:text-blue-400 hover:bg-blue-400"),
  red: clsx(base, "hover:text-red-400 hover:bg-red-400"),
  green: clsx(base, "hover:text-green-400 hover:bg-green-400"),
  fill: {
    blue: clsx(base, "text-blue-400 hover:bg-blue-400"),
  },
}

export default iconStyle
