import React from "react";
import styled from "styled-components";
import Archive from './Archive';

const Space = styled.div`
  background: linear-gradient(#0f2027, #203a43);
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
  background-image: radial-gradient(yellow, orange, red);
  border-radius: 50%;
  grid-area: sun;
  height: 5em;
  width: 5em;
`;

const NorthPlanet = styled.div`
  background-color: white;
  border-radius: 50%;
  grid-area: north-planet;
  height: 3em;
  width: 3em;
  position: relative;
  bottom: 45px;
  cursor: pointer;
`;

const EastPlanet = styled.div`
  background: white;
  border-radius: 50%;
  grid-area: east-planet;
  height: 3em;
  width: 3em;
  position: relative;
  left: 45px;
  cursor: pointer;
`;

const SouthPlanet = styled.div`
  background: white;
  border-radius: 50%;
  grid-area: south-planet;
  height: 3em;
  width: 3em;
  position: relative; 
  top: 45px;
  cursor: pointer;
`;

const WestPlanet = styled.div`
  background: white;
  border-radius: 50%;
  grid-area: west-planet;
  height: 3em;
  width: 3em;
  position: relative;
  right: 45px;
  cursor: pointer;
`;

const Icon = styled.i`
  color: ${props => props.theme.darkBlue};
  padding: 15px;
  @keyframes counter-rotate {
    0% {transform: rotate(0deg)}
    50% {transform: rotate(-179deg)}
    100% {transform: rotate(-359deg)}
  }
  animation-name: counter-rotate;
  animation-duration: 120s;
  animation-iteration-count: infinite;
`;

const Content = styled.div`
  background: white;
`;

export default class Orbitals extends React.Component{
  state = {
    mount: 'archive',
  };

  handleIconClick = val => {
    this.setState({ mount: val });
  }

  render() {
    let component = <div></div>
    if (this.state.mount === "archive") {
      component = <Archive />
    }
    return (
    <div>
      <Space>
        <MainOrbit>
          <Sun />
          <NorthPlanet>
            <Icon className="fas fa-archive" onClick={() => {
                this.handleIconClick("archive");
              }} />
          </NorthPlanet>
          <EastPlanet>
            <Icon className="fas fa-question-circle" onClick={() => {
              this.handleIconClick("about");
            }}/>
          </EastPlanet>
          <SouthPlanet>
            <Icon className="fas fa-drafting-compass" onClick={() => {
              this.handleIconClick("about");
            }}></Icon>
          </SouthPlanet>
          <WestPlanet />
        </MainOrbit>
      </Space>
      <Content>
        {component}
      </Content>
    </div>
    );
  }
}
