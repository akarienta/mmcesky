import styled from 'styled-components';

const StyledLink = styled.div`
  a {
    color: ${props => props.theme.colors.secondaryColor}
  }
`;

export { StyledLink };