import React from "react"

export interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Name of the project. */
  title: string
  /** Description of the project. */
  summary: string
  /** Source location for image. */
  image?: string
  /** Technology used in the project. */
  technology?: []
  /** Link to public repository. */
  repo?: string
  /** Link to public hosted website. */
  website?: string
}

/**
 * Split layout with image, title, summary, bullet points, and links to website and/or repository.
 *
 * @author Mitchell Woods <github.com/mmwoods>
 * @param title Name of the project.
 * @param summary Description of the project.
 * @param image (optional) Source location for image.
 * @param technology Technology used in the project.
 * @param repo (optional) Link to public repository.
 * @param website (optional) Link to public hosted website.
 */
export const Project: React.FC<ProjectProps> = props => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.summary}</p>
    <button>Website</button>
    <button>Source</button>
  </div>
)
