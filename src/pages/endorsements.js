import React from "react";
import { graphql } from "gatsby";

import Layout from '../components/layout';

import styled from 'styled-components';

import SMCDems from '../images/Endorsement - SMC Dems.png';
import NPDC from '../images/Endorsement - NPDC.jpg';
import PYD from '../images/Endorsement - PYD.jpg';
import P4E from '../images/Endorsement - P4E.png';
import YardSigns from '../images/Endorsement - Yard Signs.png';

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
    padding-top: 2rem;
    padding-bottom: 2.5rem;
`

const RedTitle = styled.div`
    color: #EE4856;
    font-family: 'Oswald', sans-serif;
    font-size: 2.3rem;
    width: 100%;
    text-align: center;
`

const OrgContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem;
`

const Endorsements = ({data}) => {

    return(
        <Layout logo={data.logo.childImageSharp.fixed} endorsementsActive={true}>
            <PinkSection>
                <SectionContainer>
                    <RedTitle>
                        ENDORSEMENTS
                    </RedTitle>
                    <div style={{textAlign: 'center', marginTop: '2rem'}}>
                        Join the many groups, community leaders, and Burlingame voters who are supporting Mike!
                    </div>
                    <div>
                        <div style={{marginTop: '1.5rem', marginBottom: '-0.5rem'}}>
                            <h3>Organizations</h3>
                        </div>
                        <div style={{margin: '1rem 0'}}>
                            <table style={{width: '100%'}}>
                                <tr>
                                    <td><OrgContainer><img src={SMCDems} width="336" alt="San Mateo County Democrats" /></OrgContainer></td>
                                    <td><OrgContainer><img src={NPDC} width="312" alt="North Peninsula Democratic Club" /></OrgContainer></td>
                                </tr>
                                <tr>
                                    <td><OrgContainer><img src={PYD} width="172" alt="Peninsula Young Democrats" /></OrgContainer></td>
                                    <td><OrgContainer><img src={P4E} width="291" alt="Peninsula For Everyone" /></OrgContainer></td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <h3>Community Leaders</h3>
                            <ul style={{lineHeight: '1.3rem'}}>
                                <li style={{marginLeft: '-10px'}}>Maurice Goodman - Board President, San Mateo County Community College District</li>
                                <li style={{marginLeft: '-10px'}}>Adrian Fine - Vice Mayor, Palo Alto</li>
                                <li style={{marginLeft: '-10px'}}>Lucas Ramirez - Mountain View City Councilmember</li>
                                <li style={{marginLeft: '-10px'}}>Shara Watkins - President, San Mateo-Foster City School Board</li>
                                <li style={{marginLeft: '-10px'}}>Noelia Corzo - Vice President, San Mateo-Foster City School Board</li>
                                <li style={{marginLeft: '-10px'}}>Cory Wolbach - Former Palo Alto City Councilmember</li>
                                <li style={{marginLeft: '-10px'}}>Ed Larenas - San Mateo County Harbor District Commissioner</li>
                                <li style={{marginLeft: '-10px'}}>Pat Murray - Vice President, South San Francisco Unified School District Board</li>
                                <li style={{marginLeft: '-10px'}}>Chelsea Bonini - Commissioner, San Mateo County Commission on Disabilities</li>
                                <li style={{marginLeft: '-10px'}}>Steven Lee - Commissioner, Palo Alto Human Relations Commission</li>
                                <li style={{marginLeft: '-10px'}}>Rebecca Oyama - Commissioner, San Mateo County Commission on the Status of Women</li>
                                <li style={{marginLeft: '-10px'}}>Jen Wolosin - Founder, Parents for Safe Routes</li>
                            </ul>
                            ...and hundreds and hundreds of your neighbors in Burlingame!
                        </div>
                        <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'center'}}>
                            <img src={YardSigns} width="771" />
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
  }
`