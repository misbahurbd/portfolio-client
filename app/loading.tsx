import { motion } from "framer-motion"
import Image from "next/image"

const Loading = () => {
  return (
    <div className="h-screen relative z-[100] flex items-center justify-center">
      <Image
        src={"/assets/img/misbahur-rahman-logo-light.svg"}
        width={250}
        height={250}
        alt="Misbahur Rahman"
        className="animate-ping hidden dark:block"
      />
      <Image
        src={"/assets/img/misbahur-rahman-logo-dark.svg"}
        width={300}
        height={300}
        alt="Misbahur Rahman"
        className="animate-ping block dark:hidden"
      />
    </div>
  )
}
export default Loading