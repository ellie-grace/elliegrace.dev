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
        <div className="about" style={{maxWidth: `1366px`, display: `flex`, flexDirection: `column`, alignItems: `center`, margin: `auto`}}>
            <p style={{maxWidth: `800px`, margin: `10vh auto 50px auto`}}>I am a 20-something self taught web developer navigating the fun and frustrating world of working as a Freelance Frontend Developer. British born and currently residing in Malta.
            </p><p style={{maxWidth: `800px`, margin: `auto auto 10vh auto`}}>
             And approximately two years ago with a MEng Degree, I had absolutely no freaking clue what I wanted out of life. I was bouncing around from country to country, from poorly paid hospitality job to unsatisfying hospitality job, I had enough. I signed up to CodeAcademy, and thus started the journey from absolute coding noob to a "professional" web dev, with actual paying clients, and the lifestyle I used to dream of. </p>


            <div className="about-segment" style={{display: `flex`, justifyContent: `center`}}>
            <Img fluid={props.data.imageRemote.childImageSharp.fluid} style={{ width: `400px`, alignSelf: `center`}} />
            <div className="about-text" style={{display: `flex`, flexDirection: `column`, justifyContent: `center`}}>
                <h6>Developer</h6>
                <p>fghfgh</p>
            </div>
            </div>

<div className="about-segment" style={{display: `flex`, justifyContent: `center`}}>
            <div className="about-text" style={{display: `flex`, flexDirection: `column`, justifyContent: `center`}}>
                <h6>Traveller</h6>
                <p>fghfgh</p>
            </div>
            <Img fluid={props.data.imageTraveller.childImageSharp.fluid} style={{ width: `400px`, alignSelf: `center`}} />

            </div>

            <div className="about-segment" style={{display: `flex`, justifyContent: `center`}}>
            <Img fluid={props.data.imageYoga.childImageSharp.fluid} style={{ width: `400px`, alignSelf: `center`}} />
            <div className="about-text" style={{display: `flex`, flexDirection: `column`, justifyContent: `center`}}>
                <h6>Developer</h6>
                <p>fghfgh</p>
            </div>
            </div>

<div className="about-segment" style={{display: `flex`, justifyContent: `center`}}>
            <div className="about-text" style={{display: `flex`, flexDirection: `column`, justifyContent: `center`}}>
                <h6>Traveller</h6>
                <p>fghfgh</p>
            </div>
            <Img fluid={props.data.imageCountryside.childImageSharp.fluid} style={{ width: `400px`, alignSelf: `center`}} />

            </div>
        </div>

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
  imageIcon: file(relativePath: { eq: "icon.png" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
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
  }imageTraveller: file(relativePath: { eq: "travellers.png" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
 
}
`

