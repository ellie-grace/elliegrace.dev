// import React from 'react'
// import { graphql, StaticQuery } from 'gatsby'

// import BackgroundImage from 'gatsby-background-image'

// const BackgroundSection = ({ className }) => (
//     <StaticQuery query={graphql`
//       query {
//         desktop: file(relativePath: { eq: "one.jpg" }) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 4160) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     `}
//      render={data => {
//        // Set ImageData.
//        const imageData = data.desktop.childImageSharp.fluid
//        return (
//           <BackgroundImage 
//                             Tag="section"
//                            className={className}
//                            fluid={props/data.imageOne.childImageSharp.fluid}
//                            backgroundColor={`#040e18`}
//                            style={{height: `100vh`, display: `flex`, justifyContent: `center`, alignItems: `center`}}
//           >
//             <h1 style={{color: `white`}}>Hello gatsby-background-image</h1>
//           </BackgroundImage>
//        )
//      }
//      }
//     />
// )

// export default BackgroundSection
