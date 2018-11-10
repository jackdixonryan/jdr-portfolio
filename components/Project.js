import React from "react";
import styled from "styled-components";

const Card = styled.div`
  margin: 0px;
`;

export default function Project(props) {
  return (
    <Card className="card col s12 m6 l4">
      <div className="card-image">
        {props.image && <img src={props.image} alt={props.name} />}
      </div>
      <div className="card-content">
        <h3>{props.name}</h3>
        <p>{props.content}</p>
      </div>
      <div className="card-action">
        <a href="#">
          <i className="fab fa-github" />
        </a>
        <a href="#">
          <i className="fas fa-link" />
        </a>
      </div>
    </Card>
  );
}