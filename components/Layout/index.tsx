/* eslint-disable react/no-unescaped-entities */
import React, { ReactChild } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = styled.header`
  height: 4rem;
  background-color: white;
`;

const Main = styled.main`
  border: 1px solid red;
`;

const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
