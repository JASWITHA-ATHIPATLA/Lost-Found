import React from "react";
import styled from "styled-components";
import { AlertCircle, CheckCircle, Search } from "lucide-react";

/* ===== Styled Components ===== */

const Section = styled.section`
  padding: 80px 20px;
  background: white;
`;

const SectionInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #1f2937;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
`;

const FeatureCard = styled.div`
  background: #f9fafb;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;

  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;

  background: ${({ bg }) => bg};
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #111827;
`;

const FeatureDesc = styled.p`
  font-size: 16px;
  color: #6b7280;
  line-height: 1.6;
`;

/* ===== Component ===== */

function HowItWorks() {
  return (
    <Section>
      <SectionInner>
        <SectionTitle>How It Works</SectionTitle>

        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon bg="#FEE2E2">
              <AlertCircle color="#DC2626" size={40} />
            </FeatureIcon>
            <FeatureTitle>Lost Something?</FeatureTitle>
            <FeatureDesc>
              Post details about your lost item with location, date, and
              description. Others can help you find it.
            </FeatureDesc>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon bg="#D1FAE5">
              <CheckCircle color="#059669" size={40} />
            </FeatureIcon>
            <FeatureTitle>Found Something?</FeatureTitle>
            <FeatureDesc>
              Report found items with photos and details. Help the owner locate
              their belongings quickly.
            </FeatureDesc>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon bg="#DBEAFE">
              <Search color="#2563EB" size={40} />
            </FeatureIcon>
            <FeatureTitle>Search &amp; Connect</FeatureTitle>
            <FeatureDesc>
              Browse posts, filter by category, and contact item owners directly
              via email or phone.
            </FeatureDesc>
          </FeatureCard>
        </FeaturesGrid>
      </SectionInner>
    </Section>
  );
};

export default HowItWorks;
