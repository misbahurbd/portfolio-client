import PageHeader from "@/components/archive-page-header"
import { BlogCard } from "@/components/shared/blog-card"
import PaginationComponent from "@/components/ui/pagination-com"
import { IBlog } from "@/interface"
import { axiosIstance } from "@/lib/axios"

const BlogsPage = async ({
  searchParams,
}: {
  searchParams: Record<string, string>
}) => {
  const blogs = await axiosIstance("/blogs")
  const query = Object.keys(searchParams)
    .map(key => {
      if (searchParams[key] !== undefined) {
        return `${key}=${searchParams[key]}`
      }
    })
    .join("&")

  const totalPage = Math.ceil(
    blogs?.data?.meta?.total / blogs?.data?.meta?.limit
  )

  return (
    <div className="space-y-12">
      <PageHeader title="Blogs" />
      <div className="container space-y-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.data?.data?.map((blog: IBlog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
        <PaginationComponent totalPages={totalPage} />
      </div>
    </div>
  )
}
export default BlogsPage
