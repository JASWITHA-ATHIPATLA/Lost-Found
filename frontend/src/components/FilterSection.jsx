import React from "react";
import styled from "styled-components";

const FilterCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 24px;

  input,
  select {
    padding: 10px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: #3b82f6;
    }
  }

  select {
    cursor: pointer;
    background: white;
  }
`;

const FilterSection = ({
  searchTerm,
  setSearchTerm,
  filterCategory,
  setFilterCategory,
  filterType,
  setFilterType,
  filterLocation,
  setFilterLocation,
  categories,
}) => {
  return (
    <FilterCard>
      <input
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
        <option value="all">All Types</option>
        <option value="lost">Lost</option>
        <option value="found">Found</option>
      </select>

      <input
        placeholder="Location..."
        value={filterLocation}
        onChange={(e) => setFilterLocation(e.target.value)}
      />
    </FilterCard>
  );
};

export default FilterSection;