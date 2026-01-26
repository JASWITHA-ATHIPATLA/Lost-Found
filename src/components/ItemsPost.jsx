import React from "react";
import styled from "styled-components";

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin: 20px;
`;
const StatCard = styled.div`
  width: auto;
  background: rgba(255, 255, 255, 0.1);
  backdropfilter: blur(10px);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 18px;
  color: hsla(0, 0%, 100%, 0.8);
`;

function ItemsPost({ items }) {
  return (
    <>
      <StatGrid>
        <StatCard>
          <StatNumber>{items.length}</StatNumber>
          <StatLabel>Total Posts</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>
            {items.filter((i) => i.type === "lost").length}
          </StatNumber>
          <StatLabel>Lost Items</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>
            {items.filter((i) => i.type === "found").length}
          </StatNumber>
          <StatLabel>Found Items</StatLabel>
        </StatCard>
      </StatGrid>
    </>
  );
}
export default ItemsPost;
