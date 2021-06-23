import React from 'react'
import styled from "styled-components";

import logo from "../../assets/logo-min.png";
import sprite from "../../assets/mollySpriteKick.gif"

const Brand = () => {
  return (
    <Image src={sprite} alt="Company Logo" />
  )
}

export default Brand

const Image = styled.img`
  height: 100%;

`;