import React from 'react';
import styled from 'styled-components';

const Foot = styled.div`
  height: 50px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: 
    "links links links links . . . . credits credits credits credits";
  .credits {
    grid-area: credits;
  }
  .links {
    grid-area: links;
  }
  .init {
    grid-area: init;
  }
  justify-items: center;
  align-items: center;
`;

export default function Footer() {
  return <Foot>
      <div className="links">
        <a href="#">LinkedIn!</a>
        <a href="#">Github!</a>
      </div>
      <div className="credits">
        <i className="fab fa-react" />
        <span>Powered By React & NextJS</span>
      </div>
    </Foot>;
}
