import React from "react"

export interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Name of the project. */
  title: string
  /** Description of the project. */
  summary: string
  /** Link to public repository. */
  repo: string
  /** Link to public hosted website. */
  website: string
  /** Source location for image. */
  image?: string
  /** Technology used in the project. */
  technology?: { category: string; list: string[] }[]
}

/**
 * Split layout with image, title, summary, bullet points, and links to website and/or repository.
 *
 * @author Mitchell Woods <github.com/mmwoods>
 * @param title Name of the project.
 * @param summary Description of the project.
 * @param repo Link to public repository.
 * @param website Link to public hosted website.
 * @param image (optional) Source location for image.
 * @param technology (optional) Technology used in the project.
 */
export const Project: React.FC<ProjectProps> = props => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.summary}</p>
    <p>{props.image}</p>

    {props.technology.map((item, index) => (
      <p>
        <strong>{item.category}</strong> •{" "}
        {item.list.map((item, index) => (
          <span>{item} </span>
        ))}{" "}
      </p>
    ))}

    <a href={props.website}>
      <button>{props.website != "#" ? "Website" : "Private Website"}</button>
    </a>
    <a href={props.repo}>
      <button>{props.repo != "#" ? "View Source" : "Source Restricted"}</button>
    </a>
  </div>
)
