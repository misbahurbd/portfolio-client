"use client"

import { fadeScaleUpVariants } from "@/constant/motion"
import { IBlog } from "@/interface"
import { formatDistanceToNow } from "date-fns"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export const BlogCard = ({ blog, idx = 0 }: { blog: IBlog; idx?: number }) => {
  return (
    <motion.div
      variants={fadeScaleUpVariants}
      initial="hidden"
      whileInView="show"
      custom={idx}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-background transition-all p-4 border border-border rounded-xl space-y-4 shadow-none hover:shadow-md shadow-border"
    >
      <Link
        href={`/blogs/${blog.slug}`}
        className="block rounded-lg relative group/blog-img"
      >
        <div className="aspect-[5/3] relative">
          <Image
            fill
            src={blog.featurePhoto}
            alt={blog.title}
            className="rounded-lg transition duration-500 object-cover group-hover/blog-img:scale-105"
          />
        </div>
      </Link>
      <div className="space-y-3">
        <Link href={`/blogs/${blog.slug}`}>
          <h3 className="font-bold transition hover:text-primary">
            {blog.title}
          </h3>
          <div className="text-sm text-muted-foreground">
            {blog.category.label}
            <span className="px-1">-</span>
            {formatDistanceToNow(new Date(blog.createdAt))} ago
          </div>
        </Link>
      </div>
    </motion.div>
  )
}
