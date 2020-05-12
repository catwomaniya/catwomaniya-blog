// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import BulbBlue from "../components/images/bulb_blue"
import BulbGreen from "../components/images/bulb_green"
import BulbPink from "../components/images/bulb_pink"
import BulbOrange from "../components/images/bulb_orange"
import BulbRed from "../components/images/bulb_red"
import './blog.css'

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="All posts" />
      <div className="div1">
        <div className="div2">
          <div className="div3">
            <a href='javascript:;'>
              <BulbBlue />
            </a>
          </div>
          <div className="div3" >
            <a href='javascript:;'>
              <BulbGreen />
            </a>
          </div>
          <div className="div3">
            <a href='javascript:;'>
              <BulbPink />
            </a>
          </div>
          <div className="div3" >
            <a href='javascript:;'>
              <BulbOrange />
            </a>
          </div>
          <div className="div3" >
            <a href='javascript:;'>
              <BulbRed />
            </a>
          </div>
        </div>
      </div>
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
