import React, { useState } from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  position: relative;
  display: flex;
  margin: auto 20px;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0.7;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;
  div:first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  div:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(0.5rem)" : "translateX(0)")};
  }

  div:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
  div {
    width: 1.5rem;
    height: 0.125rem;
    background: ${({ open }) => (open ? "white" : "white")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(10px);
  backdrop-filter: blur(20px);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  right: 0;
  height: 60vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  background: black;

  transition: transform 0.3s ease-in-out;
  @media (max-width: 576px) {
    width: 50%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const BurgerAndMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu open={open}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/team">Our Team </a>
        <a href="/offering">Offering</a>
        <a href="/contact">Contact</a>
      </StyledMenu>
    </>
  );
};

export default BurgerAndMenu;
