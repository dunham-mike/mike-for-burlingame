import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from '../components/layout';

import styled from 'styled-components';

const PinkSection = styled.div`
    background-color: #FEFDFD;
    min-height: 80px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #4F181C;
`

const SectionContainer = styled.div`
    margin: 0 auto;
    max-width: 800px;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
`

const RedTitle = styled.div`
    color: #EE4856;
    font-family: 'Oswald', sans-serif;
    font-size: 3rem;
    width: 100%;
    text-align: center;
`

const Endorsements = ({data}) => {

    return(
        <Layout logo={data.logo.childImageSharp.fixed} platformActive={true}>
            <PinkSection>
                <SectionContainer>
                    <RedTitle>
                        MIKE'S PLATFORM
                    </RedTitle>
                    <div style={{margin: '0.5rem', display: 'flex', justifyContent: 'center'}}>
                        <Img fixed={data.group.childImageSharp.fixed} alt="Group of Supporters" />
                    </div>
                    <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '663px'}}>
                            Burlingame is poised to undergo enormous changes in the next 3-5 years, especially in light of the massive 3,500-employee office park currently under construction on our Bayfront.
                            <br /><br />
                            We need a different approach going forward if we want to address the crippling traffic on our streets and highways, the teachers deciding to leave our schools, and the record-high rents.
                            <br /><br />
                            As councilmember, Mike will prioritize addressing:
                            <ul>
                                <li>
                                    <strong>Affordable Housing:</strong> Rents are at record highs and the city is far behind on its affordable housing goals
                                    <br /><br />
                                </li>
                                <li>
                                    <strong>Empty Storefronts:</strong> Many small businesses in our commercial areas are struggling
                                    <br /><br />
                                </li>
                                <li>
                                    <strong>Traffic:</strong> Over the last five years, traffic has gone from annoying to unbearable
                                    <br /><br />
                                </li>
                                <li>
                                    <strong>Residential Parking:</strong> Many neighborhoods are now experiencing a parking crunch
                                    <br /><br />
                                </li>
                                <li>
                                    <strong>Schools:</strong> Each of our local schools routinely loses teachers who can't afford to live anywhere nearby
                                    <br /><br />
                                </li>
                                <li>
                                    <strong>Speeding on Local Streets:</strong> Many residential streets now feel unsafe, especially for children and seniors
                                    <br /><br />
                                </li>
                            </ul>
                        </div>
                    </div>
                </SectionContainer>
            </PinkSection>
        </Layout>
    );
};

export default Endorsements;

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

    group: file(relativePath: { eq: "images/2-group.jpg" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 808, height: 373, quality: 100) {
            ...GatsbyImageSharpFixed
            }
        }
    }
  }
`