import React, { useState } from "react";
import styled from "styled-components";
import { Plus } from "lucide-react";
import PostItem from "./PostItem.jsx";
import FilterSection from "./FilterSection.jsx";
import ItemCards from "./ItemCard.jsx";

const BrowseContainer = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  padding: 20px;
`;

const BrowseInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const AddButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
  transition: all 0.2s;
  z-index: 100;

  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 15px 20px -3px rgba(59, 130, 246, 0.4);
  }
`;

const BrowsePage = ({ items, setItems, setCurrentPage, categories }) => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [filterLocation, setFilterLocation] = useState("");

  const [formData, setFormData] = useState({
    type: "lost",
    name: "",
    category: "Phone",
    location: "",
    date: new Date().toISOString().split("T")[0],
    description: "",
    contactName: "",
    email: "",
    phone: "",
    image: null,
    imagePreview: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };

    const updatedItems = [newItem, ...items];
    setItems(updatedItems);
    window.itemsData = updatedItems;

    setFormData({
      type: "lost",
      name: "",
      category: "Phone",
      location: "",
      date: new Date().toISOString().split("T")[0],
      description: "",
      contactName: "",
      email: "",
      phone: "",
      image: null,
      imagePreview: null,
    });

    setShowForm(false);
    setCurrentPage("browse");
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      filterCategory === "all" || item.category === filterCategory;

    const matchesType = filterType === "all" || item.type === filterType;

    const matchesLocation =
      !filterLocation ||
      item.location.toLowerCase().includes(filterLocation.toLowerCase());

    return matchesSearch && matchesCategory && matchesType && matchesLocation;
  });

  return (
    <BrowseContainer>
      <BrowseInner>
        <AddButton onClick={() => setShowForm(true)}>
          <Plus size={20} /> Post Item
        </AddButton>

        {showForm && (
          <PostItem
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            onClose={() => setShowForm(false)}
            categories={categories}
          />
        )}

        <FilterSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          filterType={filterType}
          setFilterType={setFilterType}
          filterLocation={filterLocation}
          setFilterLocation={setFilterLocation}
          categories={categories}
        />

        <ItemCards items={filteredItems} />
      </BrowseInner>
    </BrowseContainer>
  );
};

export default BrowsePage;