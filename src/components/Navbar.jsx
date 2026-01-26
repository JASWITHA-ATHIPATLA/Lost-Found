import React from "react";
import { Plus } from "lucide-react";
import styled from "styled-components";
import home from "./HomePage";
import browse from "./BrowserPage";
/* ===== Styled Components ===== */

const Nav = styled.nav`
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.button`
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const NavActions = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const NavButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background: transparent;
  color: #6b7280;
  transition: all 0.3s ease;

  &:hover {
    background: #eef2ff;
    color: #4f46e5;
  }
`;

const PostButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  background: #4f46e5;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;

  transition: background 0.3s ease;

  &:hover {
    background: #4338ca;
  }
`;

/* ===== Component ===== */

function Navbar({ currentPage, setCurrentPage, setShowForm }) {
  return (
    <Nav>
      <NavInner>
        <Logo>Lost &amp; Found</Logo>

        <NavActions>
          <NavButton onClick={() => setCurrentPage('home')}>Home</NavButton>
          <NavButton onClick={() => setCurrentPage('browse')}>Browse</NavButton>

          <PostButton onClick={() => {
            setCurrentPage('browse');
            setShowForm(true);
          }}
        >
            <Plus size={18} />
            Post Item
          </PostButton>
        </NavActions>
      </NavInner>
    </Nav>
  );
}

export default Navbar;
