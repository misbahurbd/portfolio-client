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
import { BlogCard } from "../shared/blog-card"

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
            <BlogCard
              key={blog.id}
              blog={blog}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
