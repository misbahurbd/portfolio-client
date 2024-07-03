"use client"

import { useEffect, useState } from "react"
import { ParallaxText } from "../animation/perallax-text"
import { SectionHeading } from "../animation/section-heading"
import { axiosIstance } from "@/lib/axios"
import { IBlog } from "@/interface"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { fadeScaleUpVariants } from "@/constant/motion"

export const BlogSection = () => {
  const [blogs, setBlogs] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true)
      try {
        const res = await axiosIstance.get("/blogs?limit=3")
        setBlogs(res?.data?.data || [])
      } catch (error) {
        console.log(error)
      } finally {
        setIsFetching(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section
      id="blogs"
      className="section bg-dot-black/[0.1] dark:bg-dot-white/[0.1] isolate relative bg-secondary overflow-hidden"
    >
      <div className="absolute w-full top-20">
        <ParallaxText baseVelocity={-1.5}>INSIGHTS & UPDATES</ParallaxText>
      </div>
      <div className="container space-y-6">
        <div className="flex justify-between items-center">
          <SectionHeading
            className="text-center mx-auto"
            subtitle="Latest Blog"
            title="Sharing Knowledge and Trends"
            desc="Stay updated with my latest thoughts and industry trends. Dive into articles that inspire and inform, keeping you at the forefront of the digital landscape"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {blogs.map((blog: IBlog, idx) => (
            <motion.div
              key={blog.id}
              variants={fadeScaleUpVariants}
              initial="hidden"
              whileInView="show"
              custom={idx}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-background transition-all p-4 border border-border rounded-xl space-y-4 shadow-none hover:shadow-md shadow-border"
            >
              <div className="aspect-[5/3] relative">
                <Image
                  fill
                  src={blog.featurePhoto}
                  alt={blog.title}
                  className="rounded-lg object-cover"
                />
              </div>
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
          ))}
        </div>
      </div>
    </section>
  )
}
