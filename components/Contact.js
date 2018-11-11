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
    font-family: "Poiret One", sans-serif;
    text-align: center;
  }
  #grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "linkedin email github";
    justify-items: center;
    align-items: center;
    .linkedin {
      grid-area: linkedin;
      color: teal;
    }
    .github {
      grid-area: github;
      color: teal;
    }
    .email {
      grid-area: email;
    }
    i {
      margin-right: 6px;
    }
    a {
      font-size: 1.2em;
    }
  }
`;

export default function Contact() {
  return (
    <Main className="animated flipInX">
      <h3>Get in Touch!</h3>
      <div id="grid">
        <a className="contact animated fadeInLeft delay-1s linkedin" href="#">
          <i className="fab fa-linkedin"></i>
          <span className="hide-on-small-only">LinkedIn</span>
        </a>
        <a href="#" className="contact animated fadeInLeft delay-2s email">
          <span>jack.dixon.ryan@gmail.com</span>
        </a>
        <a href="#" className="contact animated fadeInLeft delay-3s github">
          <i className="fab fa-github"></i>
          <span className="hide-on-small-only">Github</span>
        </a>
      </div>
    </Main>
  );
}

