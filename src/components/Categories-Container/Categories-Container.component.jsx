import React from "react"

import { SectionContainer, CatContainer } from "./Categories-Container.styles"
import CategoryIcons from "../category-icons/Category-Icons.component"
import Card from "../Card/Card.component"

export default ({ projects }) => (
  <SectionContainer>
    <CatContainer>
      {projects.map(({ node }) => {
        return <CategoryIcons key={node.slug} category={node} />
      })}
    </CatContainer>
  </SectionContainer>
)
