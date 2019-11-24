const path = require("path")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const projectPage = path.resolve("./src/templates/project-page.js")
    resolve(
      graphql(
        `
          {
            allContentfulProjects {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulProjects.edges
        posts.forEach((project, index) => {
          createPage({
            path: `/project/${project.node.slug}/`,
            component: projectPage,
            context: {
              slug: project.node.slug,
            },
          })
        })
      })
    )
  })
}
