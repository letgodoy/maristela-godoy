/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

import type { GatsbyNode } from 'gatsby'
import path from 'path'

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: '/using-dsg',
    component: path.resolve('./src/templates/using-dsg.tsx'),
    context: {},
    defer: true,
  })
}
