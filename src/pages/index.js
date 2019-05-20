import React from "react"
import {Link, graphql} from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = (props) => (
  <Layout>
    <SEO
          title="Home Page"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
            

  <div className="banner" style={{minHeight: `80vh`, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center` }}>
   

    <h2 style={{fontSize: `36px`, color: `#545459`, marginTop: `-10px`}}>My name is Ellie, and I build websites*</h2>
    <h6 style={{fontSize: `12px`, color: `#545459`, marginTop: `-20px`}}>*and do some other stuff as well.</h6>
    

  </div>
  {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} /> */}
<Img fluid={props.data.imageTwo.childImageSharp.fluid} />
<Img fluid={props.data.imageThree.childImageSharp.fluid} />

<BackgroundImage 
                            Tag="section"
                           fluid={props.data.imageOne.childImageSharp.fluid}
                           backgroundColor={`#040e18`}
                           style={{height: `100vh`, display: `flex`, justifyContent: `center`, alignItems: `center`}}
          >
            <h1 style={{color: `white`}}>Hello gatsby-background-image</h1>
          </BackgroundImage>
       )

  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query {
  imageOne: file(relativePath: { eq: "one.jpg" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

  imageTwo: file(relativePath: { eq: "two.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageThree: file(relativePath: { eq: "three.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

