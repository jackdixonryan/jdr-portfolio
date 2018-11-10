import styled from "styled-components";

const NavStyle = styled.ul`
  margin: 0;
  display: flex;
  background: ${props => props.theme.darkBlue};
  text-align: center;
  a {
    flex: 1;
    font-size: 2rem;
    color: white;
  }
`;

export default NavStyle;

