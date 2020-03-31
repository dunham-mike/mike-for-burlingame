import React from 'react';
import { Link } from "gatsby";
import Img from "gatsby-image";

import HeaderInfo from './headerInfo';
import FacebookIcon from '../images/facebook.svg';
import InstagramIcon from '../images/instagram.svg';
import TwitterIcon from '../images/twitter.svg';

import styled from 'styled-components';

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const PageContainer = styled.div`
`

const HeaderSectionContainer = styled.div`
    margin: 0 auto;
    max-width: 980px;
`

const NavbarContainer = styled.div`
    margin: 0 auto;
    max-width: 980px;
    display: flex;
    flex-direction: row;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    position: relative;
`

const LinkContainer = styled.div`
    padding-top: 11px;
    padding-bottom: 11px;
`

const HeaderLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 10px 0.6rem;
    &:hover { color: #F49FA6; };
    transition: color 0.4s ease 0s;
`

const WhiteHeader = styled.div`
    background-color: white;
    padding-top: 0.8rem;
    padding-bottom: 0.5rem;
`

const BlueSection = styled.div`
    background-color: #154883;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: white;
`

const HeaderIconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const RedSection = styled.div`
    padding: 3.5rem;
    background-color: #ED4856;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 11px;
    color: white;
    text-align: center;
`

const SocialIcon = styled.img`
    width: 17px;
    margin: 0 0.5rem;
`

const FooterIconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`

const Layout = (props) => {
    return (
        <PageContainer>
            <HeaderInfo />
            <WhiteHeader>
                <HeaderSectionContainer>
                    <Img fixed={props.logo} />
                </HeaderSectionContainer>
            </WhiteHeader>
            <BlueSection>
                <NavbarContainer>
                    <LinkContainer>
                        <HeaderLink to="/" style={{ color: '#F9BFC4' }}>
                            Home
                        </HeaderLink>
                        <HeaderLink to="#why">
                            Why I'm Running
                        </HeaderLink>
                        <HeaderLink to="#meet">
                            Meet Mike
                        </HeaderLink>
                        <HeaderLink to="/endorsements">
                            Endorsements
                        </HeaderLink>
                    </LinkContainer>
                    <div style={{flex: '1'}}></div>
                    <HeaderIconsContainer>
                        <a href="https://www.facebook.com/mikeforburlingame/" target="_blank" rel="noopener noreferrer">
                            <SocialIcon src={FacebookIcon} style={{ marginRight: '0.3rem'}} />
                        </a>
                        <a href="https://www.instagram.com/mikeforburlingame/" target="_blank" rel="noopener noreferrer">
                            <SocialIcon src={InstagramIcon} />
                        </a>
                        <a href="https://twitter.com/mldunham" target="_blank" rel="noopener noreferrer">
                            <SocialIcon src={TwitterIcon} />
                        </a>
                    </HeaderIconsContainer>
                </NavbarContainer>
            </BlueSection>
            {props.children}
            <RedSection>
                Paid for by Mike Dunham for Burlingame City Council 2019. FPPC ID# 1417015<br /><br />
                <a href="mailto:mikeforburlingame@gmail.com" style={{color: 'white'}}>mikeforburlingame@gmail.com</a>
                <br />
                <FooterIconsContainer>
                    <a href="https://www.facebook.com/mikeforburlingame/" target="_blank" rel="noopener noreferrer">
                        <SocialIcon src={FacebookIcon} style={{ marginRight: '0.3rem'}} />
                    </a>
                    <a href="https://www.instagram.com/mikeforburlingame/" target="_blank" rel="noopener noreferrer">
                        <SocialIcon src={InstagramIcon} />
                    </a>
                    <a href="https://twitter.com/mldunham" target="_blank" rel="noopener noreferrer">
                        <SocialIcon src={TwitterIcon} />
                    </a>
                </FooterIconsContainer>
            </RedSection>
        </PageContainer>
    );
}

export default Layout;