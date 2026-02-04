import React from 'react'
import styled from "styled-components";

/* ===== FEATURES ===== */

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 48px;
`;

export const FeatureCard = styled.div`
  text-align: center;
`;

export const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  background: ${({ bg }) => bg};
`;

export const FeatureTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #1f2937;
`;

export const FeatureDesc = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

/* ===== CTA SECTION ===== */

export const CTASection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  color: white;
  text-align: center;
`;

export const CTAInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const CTATitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const CTADesc = styled.p`
  font-size: 20px;
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CTAButton = styled.button`
  background: white;
  color: #4f46e5;
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;

  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: #eef2ff;
  }
`;

function Features ({setCurrentPage}){
  return (<>
  <CTASection>
  <CTAInner>
    <CTATitle>Ready to Get Started?</CTATitle>

    <CTADesc>
      Join our community and help reunite lost items with their owners today.
    </CTADesc>

    <CTAButton onClick={() => setCurrentPage("browse")}>
      Get Started Now
    </CTAButton>
  </CTAInner>
</CTASection>
  </>
  )
}

export default Features;