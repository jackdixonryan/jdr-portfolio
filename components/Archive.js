import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const Projects = styled.div`
  width: 80%;
  max-width: 750px;
  margin: 0 auto;
  background: white;
  border: 2px teal solid;
  padding: 20px;
  position: relative;
  top: -60px;
  border-radius: 25px;
`;

const Header = styled.h3`
  font-family: 'Poiret One', sans-serif;
  text-align: center;
  color: #0f2027;
  text-transform: uppercase;
`;

export default function Archive() {
  return <Projects className="animated flipInX">
      <Header>Projects</Header>
      <div className="row">
        <Project name="Climascience" image="../static/images/climascience.gif" content="Built on Vue.js with Nuxt powering the backend, Climascience provides dynamic and interactive climate data for any locale." git="https://github.com/adambeck7/ClimaScience" link="https://mysterious-escarpment-94857.herokuapp.com/" />

        <Project name="Umsatz" image="../static/images/umsatz.gif" content="Umsatz is a serverless progressive web application for restaurants to seamlessly oversee and manage orders and reservations placed by their clientele online." git="https://github.com/adambeck7/umsatz-fb" link="https://umsatz.co/" />

        <Project name="Bitminer" image="" content="Bitminer is still a work in progress. It's an idea to create a friendly front-end simple and educational game to demonstrate how blockchain technology works. Currently it is only files for building, mining, and distributing a simple JavaScript blockchain." git="https://github.com/jackdixonryan/intro-blockchain" link="https://github.com/jackdixonryan/intro-blockchain" />
      </div>
    </Projects>;
}
