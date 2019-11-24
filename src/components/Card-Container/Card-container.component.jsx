import React from "react"

import Card from "../Card/Card.component"
import { Container } from "./Card-container.styles"

export default ({ projects }) => {
  console.log(projects)
  return (
    <Container>
      {projects.map(({ node }) => {
        return <Card key={node.slug} category={node} />
      })}
    </Container>
  )
}
