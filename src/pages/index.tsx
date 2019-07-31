import React from "react"
import { Link } from "gatsby"
// Components
import { Layout } from "../components/Layout/Layout"
import { Image } from "../components/Image/Image"
import { SEO } from "../components/Seo/Seo"
import { Project } from "../components/Project/Project"
// Data
import { projects } from "../data/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* Intro */}
    <div style={{ textAlign: "center" }}>
      <h1>Front End Developer and Designer</h1>
      <h2>
        Passionate about how design affects user’s interactions and
        understanding, specifically through minimalist style.
      </h2>
    </div>

    <div style={{ maxWidth: `300px`, margin: `3rem auto` }}>
      <Image />
    </div>

    {/* Projects */}
    {projects.map((item, index) => (
      <Project
        key={item.index}
        title={item.title}
        summary={item.summary}
        technology={item.technology}
        website={item.website}
        repo={item.repo}
      />
    ))}
    <Link to="/resume/">Resume</Link>
  </Layout>
)

export default IndexPage
