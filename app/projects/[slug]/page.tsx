import PageHeader from "@/components/archive-page-header"
import BlockNoteViewer from "@/components/blocknote-view"
import { ImgCarousel } from "@/components/shared/carousel"
import { Button } from "@/components/ui/button"
import { ISkill, skills, socialLinks } from "@/constant/base"
import { IProject } from "@/interface"
import { axiosIstance } from "@/lib/axios"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { formatDistanceToNow } from "date-fns"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await axiosIstance.get(`/projects/${params.slug}`)
  const projectData = (await project?.data?.data) as IProject

  return {
    title: projectData?.metadata?.title,
    description: projectData?.metadata?.description,
  }
}

const SingleProject = async ({ params }: { params: { slug: string } }) => {
  const project = await axiosIstance.get(`/projects/${params.slug}`)
  const projectData = project?.data?.data as IProject
  const technology = skills.filter(skill => {
    if (!!projectData.skills.find(sk => sk === skill.value)) {
      return skill
    } else {
      return false
    }
  })

  if (!projectData) return notFound()

  return (
    <section className="bg-secondary relative">
      <PageHeader
        title={projectData.title}
        bgImg={projectData.featurePhoto}
      >
        <div className="text-muted-foreground">
          Posted: {formatDistanceToNow(new Date(projectData.createdAt))}
        </div>
      </PageHeader>
      <div className="container">
        <div className="w-full max-w-3xl mx-auto py-6 md:py-8 lg:py-10 space-y-6">
          <div className="p-4 md:p-8 bg-background rounded-xl -mt-20 relative space-y-6">
            <div className="aspect-video relative">
              <Image
                src={projectData.featurePhoto}
                alt={projectData.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-full flex flex-wrap items-center justify-center">
              {technology.map((skill, idx) => (
                <div
                  key={skill?.value}
                  className="flex items-center gap-2 px-4 py-1"
                >
                  {skill?.icon && <skill.icon />}
                  {skill?.label && <p>{skill.label}</p>}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center w-full flex-wrap">
              {projectData.sourceLinks.map(source => (
                <Button
                  key={source.link}
                  asChild
                  variant="outline"
                  className="group flex px-6 py-4 rounded-none items-center gap-2 flex-1 grow lg:grow-0 "
                >
                  <Link
                    href={source.link}
                    target="_blank"
                  >
                    <span>{source.label}</span>
                    <ArrowTopRightIcon className="w-5 h-5 transition group-hover:rotate-45" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-4xl">Challenges</h3>
              <span className="block flex-1 h-px bg-muted-foreground" />
            </div>
            <BlockNoteViewer
              initialContent={JSON.parse(projectData.challenges)}
            />
          </div>
        </div>
      </div>
      <div className="px-6 mx-auto w-full max-w-7xl">
        <ImgCarousel imgs={projectData.photos} />
      </div>

      <div className="container">
        <div className="w-full max-w-3xl mx-auto py-6 md:py-8 lg:py-10 space-y-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-4xl">Solutions</h3>
              <span className="block flex-1 h-px bg-muted-foreground" />
            </div>
            <BlockNoteViewer
              initialContent={JSON.parse(projectData.solutions)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default SingleProject
