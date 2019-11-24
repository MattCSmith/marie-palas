import React from "react"

import styles from "./blog-post.module.css"

const BlogPostLayout = ({ children }) => (
  <div className={styles.blogPostContainer}>{children}</div>
)

export default BlogPostLayout
