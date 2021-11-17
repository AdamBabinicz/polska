import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  NavIcon,
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";
import img from "../../images/3.png";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      {/* <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription> */}
      <FooterLinksContainer>
        <FooterLinksWrapper>
          {/* <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Destinations</FooterLink>
            <FooterLink to="/">Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/">Submit Video</FooterLink>
            <FooterLink to="/">Ambassadors</FooterLink>
            <FooterLink to="/">Agency</FooterLink>
            <FooterLink to="/">Influencer</FooterLink>
          </FooterLinkItems> */}
          <FooterLinkItems>
            <FooterLinkTitle>„Polska” – Antoni Słonimski</FooterLinkTitle>
            <p>
              Pytasz się, synu, gdzie jest i jaka? W niewymierzonej krainie
              leży. Jest w każdym wiernym sercu Polaka, Co o nią walczył,
              cierpiał i wierzył.
            </p>
            {/* <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">Twitter</FooterLink> */}
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/" src={img} alt="..." onClick={toggleHome}>
            <NavIcon src={img} alt="..." />
            Polska
          </SocialLogo>
          <WebsiteRights>
            Radom 2021 - {new Date().getFullYear()}.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="//m.facebook.com/events/292991114632935/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="//www.instagram.com/p/CWInn7usyh7/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={"//www.youtube.com/watch?v=lTM56r00eWQ"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="//twitter.com/msz_rp/status/1060924546352627713"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="//pl.linkedin.com/pulse/dlaczego-11-xi-%C5%9Bwi%C4%99tem-narodowym-jest-tomasz-chraba%C5%82owski"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
