import React from "react"
import {Link, graphql} from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'


const AboutPage = (props) => (
 
<Layout>  
  <SEO>

  </SEO>
  <main>
  <div className="about" style={{maxWidth: `1366px`, display: `flex`, flexDirection: `column`, alignItems: `center`, margin: `auto`}}>
            
            <div className="about-segment">
            <Img fluid={props.data.imageRemote.childImageSharp.fluid} style={{ width: `400px`, alignSelf: `center`}} />
            <div className="about-text" style={{}}>
                <h6>Developer</h6>
                <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
            </div>
            </div>

<div className="about-segment">
            <div className="about-text" >
                <h6>Traveller</h6>
                <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
            </div>
            <Img fluid={props.data.imageTravel.childImageSharp.fluid} style={{ width: `400px`, alignSelf: `center`}} />

            </div>

            <div className="about-segment">
            <Img fluid={props.data.imageYoga.childImageSharp.fluid} style={{ width: `400px`, alignSelf: `center`}} />
            <div className="about-text">
                <h6>Developer</h6>
                <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
            </div>
            </div>

<div className="about-segment">
            <div className="about-text" >
                <h6>Traveller</h6>
                <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
            </div>
            <Img fluid={props.data.imageCountryside.childImageSharp.fluid} style={{ width: `400px`, alignSelf: `center`}} />

            </div>
        </div>
  </main>
</Layout>
  

)

export default AboutPage


export const pageQuery = graphql`
query {
  imageYoga: file(relativePath: { eq: "yoga.png" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }imageCountryside: file(relativePath: { eq: "countryside.png" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }imageRemote: file(relativePath: { eq: "remote.png" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }imageTravel: file(relativePath: { eq: "travel.png" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }

}
`