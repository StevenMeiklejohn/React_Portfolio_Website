import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = ({handleNavBar, navbarState}) => {
  const { open } = useSpring({ open: navbarState ? 0 : 1 });

  if (navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><a href="/" onClick={handleNavBar}>Home</a></li>
          <li><a href="/" onClick={handleNavBar}>Portfolio</a></li>
          <li><a href="/" onClick={handleNavBar}>Experience</a></li>
          <li><a href="/" onClick={handleNavBar}>Pixel Art</a></li>
          <li><a href="/" onClick={handleNavBar}>Sketches</a></li>

        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.7rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    font-family: 'WhiteRabbit';

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;