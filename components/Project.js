import React from 'react';
import styled from 'styled-components';

const ProjectWindow = styled.div`
  flex: 1 0 46.5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 3fr 3fr 1fr;
  grid-template-areas: 
  "top top top"
  "content content content"
  "footer footer footer";
  border: 1px whitesmoke solid;
  border-radius: 15px;
  margin: 10px;
`;

const Content = styled.div`
  height: 80px;
  overflow: scroll;
  grid-area: content;
  display: grid; 
  grid-template-columns: 1fr;
  grid-template-rows: 40px 40px;
  grid-template-areas: 
  "title"
  "description";
  justify-items: center;
  @media screen and (min-width: 400px) {
    height: 210px;
  }
`;

const Image = styled.img`
  grid-area: top;
  width: 100%;
  border-radius: 15px 15px 0px 0px;
`;

const Description = styled.p`
  grid-area: description;
  padding: 5px;
  text-align: center;
`;

const DisplayText = styled.h3`
  grid-area: title;
`;

const Footer = styled.footer`
  grid-area: footer;
  background-color: orange;
  border-radius: 0px 0px 15px 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: ". github . view .";
  align-items: center;
  justify-items: center;
`;

const Github = styled.i`
  color: white;
  grid-area: github;
  font-size: 2em;
`;

const View = styled.i`
  color: white;
  grid-area: view;
  font-size: 1.5em;
`;

export default function Project(props) {
  return (
    <ProjectWindow>
      {props.image && <Image src={props.image} alt={props.name} />}
      <Content>
        <DisplayText>{props.name}</DisplayText>
        <Description>{props.content}</Description>
      </Content>
      <Footer>
        <Github className="fab fa-github" />
        <View className ="fas fa-link" />
      </Footer>
    </ProjectWindow>
  )
}
