import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import { Coffee } from "@styled-icons/boxicons-regular/Coffee";
import { FileEarmarkImage as Gallery } from "@styled-icons/bootstrap/FileEarmarkImage";
import { FileEarmarkText as Blog } from "@styled-icons/bootstrap/FileEarmarkText";
import { Computer as Tech } from "@styled-icons/remix-line/Computer";
import { FileEarmarkPerson as Resume } from "@styled-icons/bootstrap/FileEarmarkPerson";

const MenuItems = styled.div`
  display: flex;

  @media ${({ theme }) => theme.Queries.tabletAndSmaller} {
    flex-direction: column;
    flex: 1;
    justify-content: space-evenly;
  }
`;
const MenuItem = styled.span`
  color: var(--color-gray-900);
  font-family: ${({ theme }) => theme.font.head};
  font-size: 1.5rem;
  margin-top: -0.5rem;
  margin-right: 2rem;

  &:first-child {
    margin-left: 1rem;
  }
  &:hover {
    text-decoration: underline;
  }

  & svg {
    display: none;
  }
  @media ${({ theme }) => theme.Queries.tabletAndSmaller} {
    margin: 0;
    &:first-child {
      margin-left: 0;
    }
    & span {
      display: none;
    }
    & svg {
      display: block;
    }
  }
`;
const Wrapper = styled.div`
  height: 3.5rem;
  width: 4rem;
  padding: 1rem;
  background-color: var(--color-gray-300);

  display: flex;
  justify-content: space-between;

  transition: all 0.25s ease-in-out;

  ${MenuItem} {
    display: none;
    transition: all 0.25s ease-in-out;
  }

  &.open {
    width: 35rem;
    ${MenuItem} {
      display: block;
    }
  }
  @media ${({ theme }) => theme.Queries.tabletAndSmaller} {
    flex-direction: column-reverse;
    /* gap: 1rem; */
    &.open {
      width: 4rem;
      height: 25rem;
      ${MenuItem} {
        /* display: none; */
      }
    }
  }
`;

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Wrapper className={open ? "open" : ""}>
        <MenuItems>
          <MenuItem>
            <Tech />
            <span>tech</span>
          </MenuItem>
          <MenuItem>
            <Coffee />
            <span>cafe</span>
          </MenuItem>
          <MenuItem>
            <Blog />
            <span>blog</span>
          </MenuItem>

          <MenuItem>
            <Gallery />
            <span>gallery</span>
          </MenuItem>
          <MenuItem>
            <Resume />
            <span>resume</span>
          </MenuItem>
        </MenuItems>
        <Hamburger isOpen={open} onOpen={() => setOpen((state) => !state)} />
      </Wrapper>
    </>
  );
};

export default Menu;
