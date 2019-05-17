import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { checkPropTypes } from "prop-types";


export default () => (
  <Layout>
    <SEO
          title="Home Page"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

  <div className="banner" style={{minHeight: `80vh`, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center` }}>
    {/* <h1 style={{fontSize: `50px`, color: `#557a95`}}> &lt;Hello World /&gt;</h1> */}
    
    <h2 style={{fontSize: `36px`, color: `#545459`, marginTop: `-10px`}}>My name is Ellie, and I build websites*</h2>
    <h6 style={{fontSize: `12px`, color: `#545459`, marginTop: `-20px`}}>*and do some other stuff as well.</h6>
    {/* <Img fixed={data.file.childImageSharp.fixed} /> */}

  </div>
  </Layout>  
)


export const query = graphql`
  query {
    file(relativePath: { eq: "test.JPG" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`