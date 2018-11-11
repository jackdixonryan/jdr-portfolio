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
`;

const Skillsheet = styled.div`
  display: flex;
  div {
    flex: 1;
    .frontend {
      font-family: "Poiret One", sans-serif;
      text-align: right;
      margin: 10px;
    }
    .backend {
      font-family: "Poiret One", sans-serif;
      text-align: left;
      margin: 10px;
    }
    .right {
      margin: 10px;
      display: flex;
      flex-wrap: wrap;
      .skill {
        flex: 1 0 100%;
        font-size: 1.1em;
        padding: 5px;
        text-align: left;
        i {
          margin-left: 6px;
        }
        span {
          border-bottom: 2px ${props => props.theme.teal} solid;
        }
      }
    }
    .left {
      margin: 10px;
      display: flex;
      flex-wrap: wrap;
      .skill {
        flex: 1 0 100%;
        font-size: 1.1em;
        padding: 5px;
        text-align: right;
        i {
          margin-right: 6px;
        }
        span {
          border-bottom: 2px ${props => props.theme.teal} solid;
        }
      }
    }
  }
`;


export default function Skills() {
  return <Main>
      <h3>Skills</h3>
      <Skillsheet>
        <div>
          <h4 className="frontend">Frontend</h4>
          <div className="skills left">
            <div className="skill">
              <i className="fab fa-react" />
              <span>React</span>
            </div>
            <div className="skill">
              <i className="fab fa-vuejs" />
              <span>Vue</span>
            </div>
            <div className="skill">
              <i className="fab fa-js" />
              <span>ECMAScript 6</span>
            </div>
            <div className="skill">
              <i className="fab fa-css3-alt" />
              <span>CSS</span>
            </div>
            <div className="skill">
              <i className="fab fa-html5" />
              <span>HTML</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="backend">Backend</h4>
          <div className="skills right">
            <div className="skill">
              <span>Node Js</span>
              <i className="fab fa-node-js" />
            </div>
            <div className="skill">
              <span>mySQL & MongoDB</span>
              <i class="fas fa-database" />
            </div>
            <div className="skill">
              <span>NPM</span>
              <i className="fab fa-npm" />
            </div>
            <div className="skill">
              <span>PHP</span>
              <i className="fab fa-php"></i>
            </div>
            <div className="skill">
              <span>Google APIs & Firebase</span>
              <i className="fab fa-google" />
            </div>
          </div>
        </div>
      </Skillsheet>
    </Main>;
}
