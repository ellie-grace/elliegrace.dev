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
        <main>
          <Img fluid={props.data.imageIcon.childImageSharp.fluid} style={{margin: `10vh auto 2vh auto`, width: `400px`, alignSelf: `center`}} />

        <div className="landing" style={{ height: `20vh`, width: `100%`, display: `flex`, flexDirection: `column`, justifyContent: `flex-start`, alignItems: `center` }}>

    <h2 style={{zIndex: `100`, opacity: `100%`, fontSize: `36px`, color: `#545459`, marginTop: `-10px`}}>Hi, my name is Ellie,</h2>
    <h2 style={{fontSize: `32px`, color: `#545459`, marginTop: `-20px`}}>and I'm a Freelance Frontend Developer.</h2>

            </div>
            <div className="linebreak"></div>
        <div className="about" style={{maxWidth: `1366px`, display: `flex`, flexDirection: `column`, alignItems: `center`, margin: `auto 10vw auto 10vw`}}>
            <p style={{maxWidth: `800px`, margin: `10vh auto 50px auto`}}>I am a 20-something self taught web developer navigating the fun and frustrating world of working as a Freelance Frontend Developer. British born and currently residing in <Link to="/" style={{textDecoration: `underline`}}>Malta</Link>. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
            </p><p style={{maxWidth: `800px`, margin: `auto auto 10vh auto`}}>
             And approximately two years ago with a MEng Degree, I had absolutely no freaking clue what I wanted out of life. I was bouncing around from country to country, from poorly paid hospitality job to unsatisfying hospitality job, I had enough. I signed up to CodeAcademy, and thus started the journey from absolute coding noob to a "professional" web dev, with actual paying clients, and the lifestyle I used to dream of. </p>
          
        </div>

        <div className="linebreak"></div>


        </main>
        


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
  imageIcon: file(relativePath: { eq: "icon.png" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }

 
}
`

