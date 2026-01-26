import React from "react";
import styled, { keyframes } from "styled-components";
import HowItWorks from "./HowItWorkSection";
import ItemsPost from "./ItemsPost";
import Features from "./Features";
import Footer from "./Footer";
/* ===== Animation ===== */
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* ===== Styled Components ===== */
const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid white;
  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    background: white;
    color: #4f46e5;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const Hero = styled.section`
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%);
  color: white;
  position: relative;
  overflow: hidden;
`;

const HeroInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 96px 20px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 24px;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  max-width: 800px;
  margin: 0 auto 32px;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background: white;
  color: #4f46e5;
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

/* ===== Component ===== */

function HomePage({ setCurrentPage, setShowForm, items }) {
  return (
    <Container>
      <Hero>
        <HeroInner>
          <HeroTitle>Lost &amp; Found</HeroTitle>

          <HeroSubtitle>
            Reuniting people with their belongings. Post found items or search
            for your lost possessions in your college or city.
          </HeroSubtitle>

          <HeroButtons>
            <PrimaryButton onClick={() => setCurrentPage("browse")}>
              Browse Items
            </PrimaryButton>

            <SecondaryButton
              onClick={() => {
                setCurrentPage("browse");
                setShowForm(true);
              }}
            >
              Post an Item
            </SecondaryButton>
          </HeroButtons>
        </HeroInner>
        <ItemsPost items={items}/>
        <HowItWorks />
        <Features/>
        <Footer/>
      </Hero>
    </Container>
  );
}

export default HomePage;
