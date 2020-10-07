const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  type MarkdownRemark implements Node {
    frontmatter: Frontmatter
  }
  type Frontmatter {
    authors: [AuthorJson] @link(by: "github")
  }
  `;
  createTypes(typeDefs);
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              mobiusTag
              primaryElement
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const templateType = edge.node.fields.slug.split("/")[1];
      const id = edge.node.id;

      let templateValue = "";
      if (templateType === "blog") {
        templateValue = "blog-template";
      } else if (templateType === "page") {
        templateValue = "additional-page";
      } else if (templateType === "practice") {
        templateValue = "practice-page";
      }

      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.mobiusTag,
        component: path.resolve(`src/templates/${templateValue}.js`),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    // Tag pages:
    let tags = ["all", "discovery", "options", "delivery", "foundation"];
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags-template.js`),
        context: {
          tag,
        },
      });
    });

    let elements = [
      "leadership",
      "product management",
      "development",
      "architecture",
      "operations",
    ];
    elements.forEach((element) => {
      const elementPath = `/elements/${_.kebabCase(element)}/`;

      createPage({
        path: elementPath,
        component: path.resolve(`src/templates/elements-template.js`),
        context: {
          element,
        },
      });
    });
  
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
