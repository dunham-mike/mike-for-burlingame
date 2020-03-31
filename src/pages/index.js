import React from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Slideshow from '../components/slideshow';
import Layout from '../components/layout';

import styled from 'styled-components'

const SectionContainer = styled.div`
    margin: 0 auto;
    max-width: 675px;
    padding-top: 2rem;
    padding-bottom: 2.5rem;
`

const SlideshowSection = styled.div`
    background-color: white;
    min-height: 75vh;
`

const BlueSection = styled.div`
    background-color: #154883;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: white;
`

const PinkSection = styled.div`
    background-color: #FEFDFD;
    min-height: 80px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #4F181C;
`

const RedTitle = styled.div`
    color: #EE4856;
    font-family: 'Oswald', sans-serif;
    font-size: 3rem;
    width: 100%;
    text-align: center;
`

const WhiteTitle = styled.div`
    color: white;
    font-family: 'Oswald', sans-serif;
    font-size: 3rem;
    width: 100%;
    text-align: center;
`

export default ({ data }) => {
    return (
        <Layout logo={data.logo.childImageSharp.fixed}>
            <SlideshowSection>
                <Slideshow />
            </SlideshowSection>
            <PinkSection>
                <SectionContainer>
                    <RedTitle id="why">
                        WHY I'M RUNNING
                    </RedTitle>
                    <br/>
                    <div style={{lineHeight: '1.3rem'}}>
                        Dear Neighbor,<br/><br/>
                        Four years ago, I had just finished grad school at Stanford, and my wife Deeksha and I were looking for a place to put down roots. We were attracted to Burlingame for its convenient location, proximity to public transit, and a sense of community that we felt we could invest in for the long term. Since then, we’ve also grown to love the walkable downtown, tremendous amenities, and historical charm that makes this such a special place. However, I’m worried that the housing crisis -- combined with ever-worsening traffic and an exodus of teachers from our schools -- is poised to undermine the Burlingame we all know and love. I want to prevent that.<br/><br/>

                        I’m a former 5th grade math teacher, and I have spent most of the last decade helping teachers around the Bay Area and around the country leverage technology and data to improve student learning. But over the last few years, I’ve watched the quality of life deteriorate on the Peninsula: traffic is getting worse and worse, every school is seeing teachers deciding to leave because they can't afford to live nearby, and more and more young people who grew up here look at the cost of housing and either move back in with their parents or head to a more affordable part of the country.<br/><br/>

                        Seeing this happen, I couldn’t stand by and do nothing. Despite a very successful career in education technology, I left my full-time job and devoted myself to understanding the housing crisis and all its related impacts. After talking to dozens of experts, reading thousands of pages, and getting involved with a variety of community groups, it became clear that there are solutions that will not just reverse these alarming trends but actually make the quality of life in Burlingame better. Doing so will require us to think creatively and embrace thoughtful change, but we can leverage the very best ideas from cities around the world to create a city that is more walkable, more resilient, and more sustainable -- all while helping young people and families thrive.<br/><br/>

                        I’m running for City Council to tackle these problems head-on, and I ask for both your support and your ideas. Please see my Platform page for many specific proposals on how we can keep Burlingame a great city. I would love to hear your thoughts.<br/><br/>

                        Together, we can preserve Burlingame as a city that our children and grandchildren will be able to enjoy too.<br/><br/>

                        Sincerely,<br/>
                        Mike
                    </div>
                </SectionContainer>
            </PinkSection>
            <BlueSection>
                <SectionContainer>
                    <WhiteTitle id="meet">
                        MEET MIKE
                    </WhiteTitle>
                    <br/>
                    <table style={{width: '100%'}}>
                        <tr>
                            <td style={{width: '70%', paddingLeft: '0', lineHeight: '1.3rem'}}>
                                The son of an English teacher and a financial analyst, Mike was born and raised in Pittsford, New York -- a suburb of Rochester whose excellent schools, walkable downtown, and historical charm share a lot in common with Burlingame. After graduating with a degree in political science from Yale University, Mike began a career in Hollywood, starting literally in the mailroom at a talent agency and moving on to work on one of the first digital teams at NBC Universal.<br/><br/>
                                However, dismayed at growing inequality in the US, Mike left Los Angeles in 2010 to join Teach For America and teach 5th grade math in East New York, Brooklyn. Since then, he has dedicated the last decade of his career to helping teachers around the country leverage data and technology to improve educational outcomes for children. He’s now running for city council in Burlingame to tackle the housing crisis and preserve our city as a place of opportunity for future generations.<br/><br/>
                                In addition to his undergraduate degree, Mike has three master’s degrees in education, including a degree in Learning, Design, and Technology from the Stanford Graduate School of Education.
                            </td>
                            <td style={{width: '30%', position: 'relative'}}>
                                <div 
                                style={{ 
                                        paddingLeft: '1rem',
                                        position: 'absolute', left: '0', top: '0'
                                        }}
                                >
                                     <Img fixed={data.meet_mike.childImageSharp.fixed} />
                                </div>
                            </td>
                        </tr>
                    </table>
                </SectionContainer>
            </BlueSection>
        </Layout>
    )
}

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "images/mike_dunham_logo.png" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 238, height: 104) {
            ...GatsbyImageSharpFixed
            }
        }
    }

    meet_mike: file(relativePath: { eq: "images/meet_mike.jpg" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 214, height: 245, quality: 100) {
                ...GatsbyImageSharpFixed
            }
        }
    }
  }
`