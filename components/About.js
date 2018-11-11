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
    margin-top: -20px;
  }
  .loc {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .picture {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border-radius: 50%;
    border: 1px ${props => props.theme.darkTeal} solid;
    position: relative;
    bottom: 50px;
    z-index: 1000;
    background-image: url("../static/images/jack-ryan.png");
    background-size: cover
  }
`;

export default function About() {
  return (
    <Main className="animated flipInX">
      <div className="picture"></div>
      <h3>Jack D. Ryan</h3>
      <p className="loc">Full-stack web developer based in Niwot, CO</p>
      <p>I have extensive experience programming in front-end frameworks like React and Vuejs, and I avidly pursue the cleanest, sharpest code from my front-end applications. I love working at the junction between front-end reactivity and back-end data structures to create web apps that react immediately to every change in the data. </p>
      <p>In addition to web development, I am an active writer, an aspiring cyclist, and an intermediate (verging on disastrous) homebrewer.</p>
    </Main>
  )
}
