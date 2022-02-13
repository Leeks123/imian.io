import React from "react";
import styled from "styled-components";
import Menu from "./Menu";

const Wrapper = styled.nav`
  max-width: ${({ theme }) => theme.maxWidth}px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
`;
const Logo = styled.span`
  font-family: ${({ theme }) => theme.font.head};
  font-weight: bolder;
  font-size: 1.5rem;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>imian.io</Logo>
      <Menu />
    </Wrapper>
  );
};

export default Navbar;
