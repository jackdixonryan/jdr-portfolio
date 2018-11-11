import React from 'react'
import Link from 'next/link';
// import NavStyles from './styles/NavStyles';
import styled from 'styled-components';

const Navbar = styled.div`
  position: fixed;
  z-index: 2000;
  h3 {
    margin: 0;
    font-family: "Poiret One", sans-serif;
    font-size: 1.5em;
  }
  span {
    font-size: .8em;
    font-family: "Open Sans", sans-serif
  }
  background-color: white;
  padding: 10px;
  border-radius: 0 0 10px 0;
  border: 2px whitesmoke solid;
`;

const Nav = () => {
  return <Navbar>
      <h3>
        JDR: <span>Full-Stack Web Developer</span>
      </h3>
    </Navbar>;
}

export default Nav;

