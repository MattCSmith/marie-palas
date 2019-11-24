import React from "react"
import get from "lodash/get"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import PageLayout from "../layouts/page/page.layout.jsx"
import CategoriesContainer from "../components/Categories-Container/Categories-Container.component.jsx"
import Hero from "../components/Hero/Hero.component"
import CardComponent from "../components/Card/Card.component"
import CardContainer from "../components/Card-Container/Card-container.component"

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const projects = get(this, "props.data.allContentfulProjectTag.edges")

    return (
      <PageLayout>
        <Helmet title={siteTitle} />
        <Hero />

        <CardContainer projects={projects} />

        <br />
        <br />

        <h3> Contact Form Here</h3>
      </PageLayout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProjectTag {
      edges {
        node {
          title
          slug
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`
