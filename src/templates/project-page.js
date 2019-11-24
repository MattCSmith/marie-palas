import React from "react"
import Helmet from "react-helmet"
import get from "lodash/get"
import { graphql } from "gatsby"

import PageLayout from "../layouts/page/page.layout.jsx"
import BlogPostLayout from "../layouts/blog-post/blog-post.layout.jsx"

class ProjectPageTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulProjects")
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <PageLayout>
        <BlogPostLayout>
          <div style={{ background: "#fff" }}>
            <Helmet title={`${post.title} | ${siteTitle}`} />
            <div className="wrapper">
              <p
                style={{
                  display: "block",
                }}
              >
                {post.publishDate}
              </p>

              <div
                style={{
                  maxWidth: "720px",
                  margin: "0 auto",
                  background: "#fff",
                }}
              ></div>
            </div>
          </div>
        </BlogPostLayout>
      </PageLayout>
    )
  }
}

export default ProjectPageTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      title
    }
  }
`
