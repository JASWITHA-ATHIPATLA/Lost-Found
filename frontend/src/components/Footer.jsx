import React from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

/* ===== Styled Components ===== */

const FooterWrapper = styled.footer`
  background: #111827;
  color: #9ca3af;
  padding: 48px 20px;
`;

const FooterInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-bottom: 32px;
`;

const FooterTitle = styled.h3`
  color: white;
  font-weight: bold;
  margin-bottom: 16px;
`;

const FooterColumn = styled.div`
  font-size: 14px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterButton = styled.button`
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  text-align: left;
  padding: 0;
  font-size: 14px;

  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`;

const FooterText = styled.div`
  font-size: 14px;
`;

const FooterCopyright = styled.div`
  border-top: 1px solid #374151;
  padding-top: 32px;
  text-align: center;
  font-size: 14px;
`;
const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  color: #9ca3af;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;

  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`;

/* ===== Component ===== */

function  Footer({ setCurrentPage, setShowForm }){
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterGrid>
          <FooterColumn>
            <FooterTitle>Lost &amp; Found</FooterTitle>
            <FooterText>
              Helping communities reunite with their belongings since 2026.
            </FooterText>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle as="h4">Quick Links</FooterTitle>
            <FooterLinks>
              <FooterButton onClick={() => setCurrentPage("browse")}>
                Browse Items
              </FooterButton>
              <FooterButton
                onClick={() => {
                  setCurrentPage("browse");
                  setShowForm(true);
                }}
              >
                Post Item
              </FooterButton>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle as="h4">Contact Us</FooterTitle>
            <FooterLinks>
              <SocialLink href="https://www.linkedin.com" target="_blank">
                <FaLinkedin size={20} />
                LinkedIn
              </SocialLink>

              <SocialLink href="https://www.instagram.com" target="_blank">
                <FaInstagram size={20} />
                Instagram
              </SocialLink>

              <SocialLink href="https://www.facebook.com" target="_blank">
                <FaFacebook size={20} />
                Facebook
              </SocialLink>

              <SocialLink href="https://www.twitter.com" target="_blank">
                <FaTwitter size={20} />
                Twitter
              </SocialLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle as="h4">Categories</FooterTitle>
            <FooterLinks>
              <div>Phones &amp; Electronics</div>
              <div>IDs &amp; Documents</div>
              <div>Bags &amp; Accessories</div>
            </FooterLinks>
          </FooterColumn>
        </FooterGrid>

        <FooterCopyright>
          <p>&copy; 2026 Lost &amp; Found. All rights reserved.</p>
        </FooterCopyright>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
