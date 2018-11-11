import React from 'react'
import styled from 'styled-components';

const Main = styled.div`
  width: 80%;
  max-width: 750px;
  margin: 0 auto;
  background: white;
  border: 2px teal solid;
  padding: 20px;
  position: relative;
  top: -60px;
  border-radius: 25px;
  h3 {
    text-align: center;
    font-family: "Poiret One", sans-serif;
  }
  .loc {
    text-align: center;
  }
  p {
    text-align: justify;
  }
`;

export default function About() {
  return (
    <Main>
      <img src="eh.jpg"></img>
      <h3>Jack D. Ryan</h3>
      <p className="loc">Full-stack web developer based in Niwot, CO</p>
      <p>I have extensive experience programming in front-end frameworks like React and Vuejs, and I avidly pursue the cleanest, sharpest code from my front-end applications. I love working at the junction between front-end reactivity and back-end data structures to create web apps that react immediately to every change in the data. </p>
    </Main>
  )
}
