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
        <Img fluid={props.data.imageFour.childImageSharp.fluid} style={{margin: `10vh auto 2vh auto`, width: `400px`, alignSelf: `center`}} />

        <div className="banner" style={{ height: `20vh`, width: `100%`, display: `flex`, flexDirection: `column`, justifyContent: `flex-start`, alignItems: `center` }}>

    <h2 style={{zIndex: `100`, opacity: `100%`, fontSize: `36px`, color: `#545459`, marginTop: `-10px`}}>My name is Ellie, and I build websites*</h2>
    <h6 style={{fontSize: `12px`, color: `#545459`, marginTop: `-20px`}}>*and do some other cool things as well.</h6>

            </div>


        {/* <BackgroundImage 
                            Tag="section"
                           fluid={props.data.imageOne.childImageSharp.fluid}
                           backgroundColor={`#040e18`}

                           style={{
                            
                            height: `100vh`, display: `flex`, justifyContent: `center`, alignItems: `center`}}
          >
              
           
  
          </BackgroundImage>
            

    */}

    

  
  {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} /> */}
{/* <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
<Img fluid={props.data.imageThree.childImageSharp.fluid} /> */}


       )

  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query {
  imageOne: file(relativePath: { eq: "test.JPG" }) {
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
  imageFour: file(relativePath: { eq: "icon.png" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
 
}
`

