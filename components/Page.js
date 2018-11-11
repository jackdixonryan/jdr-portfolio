import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from "styled-components";

import Header from '../components/Header';
import Meta from '../components/Meta';
import Footer from '../components/Footer';
// import { inject } from 'async';

const theme = {
  maxWidth: "1000px",
  lightGreen: "#00CF52",
  darkBlue: "#0f2027",
  darkTeal: "#19646A",
  teal: "#00C690",
  lightTeal: "#00DF96"
};

const StyledPage = styled.div`
  background: white;
`;

const Inner = styled.div`
  margin: 0 auto;
`;

injectGlobal`
  html {
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: ${theme.darkBlue};
  }
  .material-tooltip {
    background-color: white;
    color: black;
    border: 1px ${theme.darkTeal} solid;
    font-size: 1em;
    border-radius: 10px;
  }
`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>
            {this.props.children}
          </Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    )
  }
}
