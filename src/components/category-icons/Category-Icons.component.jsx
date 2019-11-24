import React from "react"
import Link from "gatsby-link"
import { CatTitle, CatIcons, CatCard } from "./Category-icons.styles"

export default ({ category }) => {
  console.log(category.image)
  return (
    <>
      {
        //   <CatIcons img={category.image.file.url}>
        //   <CatTitle>{category.title}</CatTitle>
        // </CatIcons>
      }
      <CatCard img={category.image.file.url}>
        <CatTitle>{category.title}</CatTitle>
      </CatCard>
    </>
  )
}
