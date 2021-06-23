import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = ({navbarState, handleNavBar}) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href="/">Home</a>
            <a href="/">Portfolio</a>
            <a href="/">Experience</a>
            <a href="/">Pixel Art</a>
            <a href="/">Sketches</a>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={navbarState} 
              handleNavBar={handleNavBar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={navbarState} 
        handleNavBar={handleNavBar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #023047;
  z-index: 1;
  font-size: 1.8rem;
  font-family: 'WhiteRabbit';
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 100;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;


    &:hover {
      color: #FFB703;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }

    @media (max-width: 812px) {
        margin: 0 0.5rem;
    }

    // @media (max-width: 1000px) {
    //     display: none;
    //   }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;