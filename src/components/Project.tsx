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
  <div style={{ paddingBottom: "3rem", maxWidth: "50%" }}>
    <h3>{props.title}</h3>
    <p style={{ color: "rgba(14, 30, 37, 0.54)" }}>{props.summary}</p>

    {props.technology.map((item, index) => (
      <p style={{ marginBottom: "5px", color: "rgba(14, 30, 37, 0.54)" }}>
        <strong>{item.category}</strong> •{" "}
        {item.list.map((item, index) => (
          <span>{item} </span>
        ))}{" "}
      </p>
    ))}

    <div style={{ marginTop: "20px" }}>
      <a href={props.website}>
        <button
          style={{
            backgroundColor: "#95bbdb",
            borderColor: "#95bbdb",
            height: "32px",
            lineHeight: "16px",
            borderRadius: "20px",
            fontSize: "16px",
            padding: "0 3rem",
            color: "#fff",
          }}
        >
          {props.website != "#" ? "Website" : "Private Website"}
        </button>
      </a>
      <a href={props.repo}>
        <button
          style={{
            backgroundColor: "transparent",
            borderColor: "transparent",
            height: "32px",
            lineHeight: "16px",
            fontSize: "16px",
            padding: "0 1rem",
            color: "rgba(14, 30, 37, 0.54)",
          }}
        >
          {props.repo != "#" ? "View Source" : "Source Restricted"}
        </button>
      </a>
    </div>
  </div>
)
