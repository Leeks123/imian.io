import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  & {
    width: 32px;
    height: 24px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  & span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: var(--color-gray-900);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.75s ease-in-out;
  }

  & span:nth-child(1) {
    top: 0px;
  }

  & span:nth-child(2) {
    top: 11px;
  }

  & span:nth-child(3) {
    top: 22px;
  }

  &.open span:nth-child(1) {
    top: 11px;
    transform: rotate(135deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
    @media ${({ theme }) => theme.Queries.tabletAndSmaller} {
      left: 0;
      top: 60px;
    }
  }

  &.open span:nth-child(3) {
    top: 11px;
    transform: rotate(-135deg);
  }
`;
const Hamburger = ({
  isOpen,
  onOpen,
}: {
  isOpen: boolean;
  onOpen: () => void;
}) => {
  return (
    <Wrapper className={isOpen ? "open" : ""} onClick={onOpen}>
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  );
};

export default Hamburger;
