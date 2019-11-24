import React from "react"

import { CardContainer, Middle, Text } from "./Card.styles"

export default ({ category }) => {
  console.log("HERE", category)

  if (category)
    return (
      <CardContainer>
        <div>
          <Text>
            <h2>{category.title}</h2>
          </Text>

          <img src={category.image.file.url}></img>
        </div>
      </CardContainer>
    )
  else return null
}
