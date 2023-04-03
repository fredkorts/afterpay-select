import styled from 'styled-components';

interface StyledSwiperCardProps {
  backgroundColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export const StyledSwiperCard = styled.div<StyledSwiperCardProps>`
background-color: ${(props) => props.backgroundColor || '#fff'};
width: auto;
height: 85px;
padding: 6px 0 6px 12px;
margin: 10px;
text-align: left;
border-left: 6px solid ${(props) => props.secondaryColor || '#fff'};
box-shadow: 0 0 12px 0 #bbb;
border-radius: 6px;

.unit-label {
  color: ${(props) => props.primaryColor || '#fff'};
}

.selected-option {
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.primaryColor || '#fff'};
}

.options {
  display: flex;
  justify-content: space-between;
  padding-right: 0.5rem;

  button {
    padding: 0;
    background: #fff;
    color: ${(props) => props.secondaryColor || '#fff'};
    font-size: 0.875rem;
    border: 2px solid white;
  }
}
`;