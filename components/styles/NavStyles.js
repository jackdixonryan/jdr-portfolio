import styled from "styled-components";

const NavStyle = styled.ul`
  margin: 0;
  font-size: 1.5em;
  display: flex;
  background: white;
  text-align: center;
  border: 1px solid ${props => props.theme.teal};
  a {
    flex: 1;
    color: ${props => props.theme.darkBlue};
  }
`;

export default NavStyle;

