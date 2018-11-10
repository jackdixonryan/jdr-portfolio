import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const Projects = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  border: 2px whitesmoke solid;
  padding: 20px;
  position: relative;
  top: -60px;
  border-radius: 25px;
`;

const Header = styled.h1`
  text-align: center;
  color: #0f2027;
  text-transform: uppercase;
`;

export default function Archive() {
  return <Projects>
      <Header>Projects</Header>
      <div className = "row">
        <Project name="Climascience" image="../static/images/climascience.gif" content="Built on Vue.js with Nuxt powering the backend, Climascience provides dynamic and interactive climate data for any locale."/>

        <Project name="Umsatz" image="../static/images/umsatz.gif" content="Umsatz is a serverless progressive web application for restaurants to seamlessly oversee and manage orders and reservations placed by their clientele online."/>
      </div>
    </Projects>;
}
