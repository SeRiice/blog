import CustomLink from "@/web/components/CustomLink"
import clsx from "clsx"
import Image from "next/image"

const variants = {
  lg: "max-w-3xl",
  md: "max-w-xl",
  sm: "max-w-xs",
}

const titleCss = "text-2xl font-semibold"

const Page = (props) => {
  const { children, title, variant = "lg" } = props

  return (
    <div>
      <header className=" sticky top-0 border-b p-4 bg-white">
        <div className="flex justify-between max-w-3xl mx-auto items-center">
          <div className="flex gap-4 items-center">
            <Image
              src="/img/profile.png"
              alt="logo"
              width={50}
              height={50}
              className="  rounded-full bg-blue-400"
            />
            <CustomLink href="/" className="hover:underline">
              <h1 className={titleCss}>MyBlog</h1>
            </CustomLink>
          </div>
          <nav>
            <ul className="flex gap-4">
              <li>
                <CustomLink href="/sign-in">Sign-in</CustomLink>
              </li>
              <li>
                <CustomLink href="/sign-up">Sign-up</CustomLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={clsx("mx-auto", variants[variant])}>
        {title && <h2 className={clsx("mt-8 pb-4", titleCss)}>{title}</h2>}
        {children}
      </main>
    </div>
  )
}

export default Page
