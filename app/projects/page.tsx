import ArchivePageHeader from "@/components/archive-page-header"
import { BlogCard } from "@/components/shared/blog-card"
import { ProjectCard } from "@/components/shared/project.card"
import PaginationComponent from "@/components/ui/pagination-com"
import { IBlog, IProject } from "@/interface"
import { axiosIstance } from "@/lib/axios"

const BlogsPage = async ({
  searchParams,
}: {
  searchParams: Record<string, string>
}) => {
  const projects = await axiosIstance("/projects")
  const query = Object.keys(searchParams)
    .map(key => {
      if (searchParams[key] !== undefined) {
        return `${key}=${searchParams[key]}`
      }
    })
    .join("&")

  const totalPage = Math.ceil(
    projects?.data?.meta?.total / projects?.data?.meta?.limit
  )

  return (
    <div className="section space-y-12">
      <ArchivePageHeader title="Latest Projects" />
      <div className="container space-y-8">
        <div className="grid gap-4">
          {projects.data?.data?.map((project: IProject, idx: number) => (
            <ProjectCard
              key={project.id}
              project={project}
              idx={idx}
            />
          ))}
        </div>
        <PaginationComponent totalPages={totalPage} />
      </div>
    </div>
  )
}
export default BlogsPage
