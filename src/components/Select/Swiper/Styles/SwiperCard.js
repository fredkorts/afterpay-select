import styled from 'styled-components';

export const StyledSwiperCard = styled.div`
background-color: ${(props) => props.backgroundColor || '#fff'};
width: 100%;
height: 85px;
padding: 6px 0 6px 12px;
text-align: left;
border-left: 6px solid ${(props) => props.secondaryColor || '#fff'};
box-shadow: 0 0 12px 0 #bbb;
border-radius: 6px;

.unit-label {
  color: ${(props) => props.primaryColor || '#fff'};
}

.selectedOption {
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
  }
}
`;