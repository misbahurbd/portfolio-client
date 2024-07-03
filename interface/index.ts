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

export interface IEducation {
  id: string
  school: string
  location: string
  degree: string
  fieldOfStudy: string
  startDate: string
  endDate: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface IExperience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface IBlog {
  id: string
  slug: string
  title: string
  content: string
  featurePhoto: string
  createdAt: string
  updatedAt: string
  category: ICategory
  metadata: IMetadata
}

export interface ICategory {
  id: string
  image: any
  label: string
  slug: string
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
