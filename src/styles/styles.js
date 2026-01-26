import styled from "styled-components";

/* Page */
export const BrowseContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #eff6ff, #e0e7ff);
  padding: 32px;
`;

export const BrowseInner = styled.div`
  max-width: 1280px;
  margin: auto;
`;

/* Buttons */
export const AddButton = styled.button`
  background: #4f46e5;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  display: flex;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 20px;
`;

/* Grid */
export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`;
