import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = ({handleNavBar, navbarState}) => {
  const { open } = useSpring({ open: navbarState ? 0 : 1 });

  if (navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.to({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).to(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><a href="/" onClick={handleNavBar}>Home</a></li>
          <li><a href="/portfolio" onClick={handleNavBar}>Portfolio</a></li>
          <li><a href="/experience" onClick={handleNavBar}>Experience</a></li>
          <li><a href="/pixelart" onClick={handleNavBar}>Pixel Art</a></li>
          <li><a href="/sketches" onClick={handleNavBar}>Sketches</a></li>

        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #023047;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 9999;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  z-index: 9999;

  & li {
    transition: all 300ms linear 0s;
    z-index: 9999;
  }

  & a {
    font-size: 1.7rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    font-family: 'WhiteRabbit';
    width:100%;
    z-index: 9999;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
      z-index: 9999;
    }
  }
`;