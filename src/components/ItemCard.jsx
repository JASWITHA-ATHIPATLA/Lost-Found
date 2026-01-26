import React from "react";
import styled from "styled-components";
import { Phone, Mail, MapPin, Calendar, Tag, Search } from "lucide-react";

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ItemCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const TypeBar = styled.div`
  height: 4px;
  background: ${(props) => (props.$type === "lost" ? "#dc2626" : "#16a34a")};
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  padding: 20px;
`;

const ItemContent = styled.div`
  padding: 16px;

  h3 {
    margin: 0 0 12px 0;
    font-size: 18px;
    font-weight: 600;
    color: #111827;
  }

  p {
    margin: 8px 0;
    font-size: 14px;
    color: #6b7280;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      flex-shrink: 0;
    }

    &.desc {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid #e5e7eb;
      color: #374151;
      line-height: 1.5;
    }
  }
`;

const ContactSection = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;

  a {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 12px;
    background: #3b82f6;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.2s;

    &:hover {
      background: #2563eb;
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #9ca3af;

  p {
    margin-top: 16px;
    font-size: 16px;
  }
`;

const ItemCards = ({ items }) => {
  if (items.length === 0) {
    return (
      <EmptyState>
        <Search size={64} color="#D1D5DB" style={{ margin: "0 auto 16px" }} />
        <p>No items found.</p>
      </EmptyState>
    );
  }

  return (
    <ItemsGrid>
      {items.map((item) => (
        <ItemCard key={item.id}>
          <TypeBar $type={item.type} />

          {item.imagePreview ? (
            <ItemImage src={item.imagePreview} alt={item.name} />
          ) : (
            <ImagePlaceholder>{item.name}</ImagePlaceholder>
          )}

          <ItemContent>
            <h3>{item.name}</h3>
            <p>
              <Tag size={14} /> {item.category}
            </p>
            <p>
              <MapPin size={14} /> {item.location}
            </p>
            <p>
              <Calendar size={14} />{" "}
              {new Date(item.date).toLocaleDateString()}
            </p>
            <p className="desc">{item.description}</p>

            <ContactSection>
              <a href={`mailto:${item.email}`}>
                <Mail size={16} /> Email
              </a>
              {item.phone && (
                <a href={`tel:${item.phone}`}>
                  <Phone size={16} /> Call
                </a>
              )}
            </ContactSection>
          </ItemContent>
        </ItemCard>
      ))}
    </ItemsGrid>
  );
};

export default ItemCards;