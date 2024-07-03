export interface IProject {
  id: string
  title: string
  slug: string
  challenges: string
  solutions: string
  featurePhoto: string
  photos: string[]
  skills: string[]
  metadata: IMetadata
  sourceLinks: ISourceLink[]
  createdAt: string
  updatedAt: string
}

export interface IMetadata {
  id: string
  title: string
  description: string
  socialImg: string
  createdAt: string
  updatedAt: string
}

export interface ISourceLink {
  id: string
  label: string
  link: string
}
