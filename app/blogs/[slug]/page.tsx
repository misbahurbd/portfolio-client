import PageHeader from "@/components/archive-page-header"
import BlockNoteViewer from "@/components/blocknote-view"
import { IBlog } from "@/interface"
import { axiosIstance } from "@/lib/axios"
import { formatDistanceToNow } from "date-fns"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await axiosIstance.get(`/blogs/${params.slug}`)
  const blogData = (await blog?.data?.data) as IBlog

  return {
    title: blogData?.metadata?.title,
    description: blogData?.metadata?.description,
  }
}

const SingleBlog = async ({ params }: { params: { slug: string } }) => {
  const blog = await axiosIstance.get(`/blogs/${params.slug}`)
  const blogData = blog?.data?.data as IBlog

  if (!blogData) return notFound()

  return (
    <section className="bg-secondary relative">
      <PageHeader title={blogData.title}>
        <div className="text-muted-foreground">
          Category: {blogData.category.label}
          <span className="px-1 text-muted-foreground">-</span>
          Posted: {formatDistanceToNow(new Date(blogData.createdAt))}
        </div>
      </PageHeader>
      <div className="container">
        <div className="w-full max-w-3xl mx-auto px-3 py-6 md:py-8 lg:py-10 bg-secondary rounded-md relative">
          <BlockNoteViewer initialContent={JSON.parse(blogData.content)} />
        </div>
      </div>
    </section>
  )
}
export default SingleBlog
