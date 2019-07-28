import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import { Image } from "../components/image"
import { SEO } from "../components/seo"
import { Project } from "../components/Project"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Project
      title="ReactJS Component Library"
      summary="Setup as a Lerna monorepo with every component including type checking, Storybook integration, usage docs, and full JSDoc commenting."
    />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
