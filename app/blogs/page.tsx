import PaginationComponent from "@/components/ui/pagination-com"
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
    <div className="section">
      <div className="container">
        <PaginationComponent totalPages={totalPage} />
      </div>
    </div>
  )
}
export default BlogsPage
