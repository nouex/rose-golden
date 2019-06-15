const { resolve } = require(`path`)
const slug = require("slug")

slug.defaults.mode = "rfc3986"

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query getAllComplexesList {
      postgres {
        allComplexesList {
          id
          name
        }
      }
    }
  `).then(result => {
    result.data.postgres.allComplexesList.forEach(({ name, id}) => {
      createPage({
        path: slug(name),
        component: resolve("./src/templates/complex.js"),
        context: {
          id
        },
      })
    })
  })
}
