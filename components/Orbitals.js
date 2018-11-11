import React from "react";
import styled from "styled-components";
import Archive from './Archive';
import Skills from './Skills';
import About from './About';

const Space = styled.div`
  background: white;
  height: 550px;
  padding-top: 100px;
`;

const MainOrbit = styled.div`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    ". north-planet . . ."
    ". . . . ."
    ". . sun . east-planet"
    "west-planet . . . ."
    ". . . . south-planet";
  margin: 0 auto;
  justify-items: center;
  align-items: center;
  @keyframes rotate {
    0% { transform: rotate(0deg)}
    50% { transform: rotate(179deg)}
    100% { transform: rotate(359deg)}
  }
  animation-name: rotate;
  animation-duration: 120s;
  animation-iteration-count: infinite;
`;

const Sun = styled.div`
  background: white;
  border: 2px teal solid;
  border-radius: 50%;
  grid-area: sun;
  height: 5em;
  width: 5em;
  text-align: center;
  font-family: "Poiret One", sans-serif;
  h4 {
    margin-top: 35%;
    @keyframes counter-rotate {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(-179deg);
      }
      100% {
        transform: rotate(-359deg);
      }
    }
    animation-name: counter-rotate;
    animation-duration: 120s;
    animation-iteration-count: infinite;
  }
`;

const NorthPlanet = styled.div`
  text-align: center;
  i {
    margin-top: 35%;
  }
  border: 1px teal solid;
  border-radius: 50%;
  grid-area: north-planet;
  height: 3em;
  width: 3em;
  position: relative;
  bottom: 45px;
  cursor: pointer;
  @keyframes counter-rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-179deg);
    }
    100% {
      transform: rotate(-359deg);
    }
  }
  animation-name: counter-rotate;
  animation-duration: 120s;
  animation-iteration-count: infinite;
`;

const EastPlanet = styled.div`
  text-align: center;
  i {
    margin-top: 35%;
  }
  border: 1px teal solid;
  border-radius: 50%;
  grid-area: east-planet;
  height: 3em;
  width: 3em;
  position: relative;
  left: 45px;
  cursor: pointer;
  @keyframes counter-rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-179deg);
    }
    100% {
      transform: rotate(-359deg);
    }
  }
  animation-name: counter-rotate;
  animation-duration: 120s;
  animation-iteration-count: infinite;
`;

const SouthPlanet = styled.div`
  text-align: center;
  i {
    margin-top: 35%;
  }
  border: 1px teal solid;
  border-radius: 50%;
  grid-area: south-planet;
  height: 3em;
  width: 3em;
  position: relative;
  top: 45px;
  cursor: pointer;
  @keyframes counter-rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-179deg);
    }
    100% {
      transform: rotate(-359deg);
    }
  }
  animation-name: counter-rotate;
  animation-duration: 120s;
  animation-iteration-count: infinite;
`;

const WestPlanet = styled.div`
  text-align: center;
  i {
    margin-top: 35%;
  }
  border: 1px teal solid;
  border-radius: 50%;
  grid-area: west-planet;
  height: 3em;
  width: 3em;
  position: relative;
  right: 45px;
  cursor: pointer;
  @keyframes counter-rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-179deg);
    }
    100% {
      transform: rotate(-359deg);
    }
  }
  animation-name: counter-rotate;
  animation-duration: 120s;
  animation-iteration-count: infinite;
`;

// const Icon = styled.i`
//   @keyframes counter-rotate {
//     0% {transform: rotate(0deg)}
//     50% {transform: rotate(-179deg)}
//     100% {transform: rotate(-359deg)}
//   }
//   animation-name: counter-rotate;
//   animation-duration: 120s;
//   animation-iteration-count: infinite;
// `;

const Content = styled.div`
  background: linear-gradient(${props => props.theme.teal}, ${props => props.theme.darkTeal});
`;

export default class Orbitals extends React.Component{
  state = {
    mount: 'about',
  };

  handleIconClick = val => {
    this.setState({ mount: val });
  }

  render() {
    let component = <div></div>
    if (this.state.mount === "archive") {
      component = <Archive />
    } else if (this.state.mount === "skills") {
      component = <Skills />
    } else if (this.state.mount === "about") {
      component = <About />
    }
    return <div>
        <Space>
          <MainOrbit>

            <Sun>
              <h4>JDR</h4>
            </Sun>

            <NorthPlanet className="tooltipped" data-position="top" data-tooltip="About Me" onClick={() => {
                this.handleIconClick("about");
              }}>
              <i class="fas fa-question-circle"></i>
            </NorthPlanet>

            <EastPlanet className="tooltipped" data-position="top" data-tooltip="Projects" onClick={() => {
                this.handleIconClick("archive");
              }}>
              <i class="fas fa-project-diagram" />
            </EastPlanet>

            <SouthPlanet className="tooltipped" data-position="top" data-tooltip="Skills" onClick={() => {
                this.handleIconClick("skills");
              }}>
              <i class="fas fa-drafting-compass" />
            </SouthPlanet>

            <WestPlanet className="tooltipped" data-position="top" data-tooltip="Contact" onClick={() => {
                this.handleIconClick("contact");
            }}>
              <i className="far fa-envelope"></i>  
            </WestPlanet>
            
          </MainOrbit>
        </Space>
        <Content>
          <div className="outer">
            <div className="inner">{component}</div>
          </div>
        </Content>
      </div>;
  }
}
