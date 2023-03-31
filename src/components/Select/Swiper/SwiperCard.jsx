import styled from 'styled-components';

const SwiperCard = ({value, handleTrigger, subtitle, primaryColor, secondaryColor}) => {

    const StyledSwiperCard = styled.div`
    min-width: 300px;
    width: 100%;
    height: 85px;
    padding: 6px 0 6px 12px;
    text-align: left;
    border-left: 6px solid ${secondaryColor};
    box-shadow: 0 0 12px 0 #bbb;
    border-radius: 6px;

    .selectedOption {
      font-size: 2.5rem;
      font-weight: bold;
    }

    .options {
      display: flex;
      justify-content: space-between;
      padding-right: 0.5rem;

      button {
        padding: 0;
        background: #fff;
        color: ${secondaryColor};
        font-size: 0.875rem;
      }
    }
`;

    return (
        <StyledSwiperCard>
          <div className="selectedOption">{value}</div>
          <div className="options">
            <div className="unit-label">{subtitle}</div>
            <div className="button">
              <button aria-label="Select new value" onClick={handleTrigger}>EDIT</button>
            </div>
          </div>
        </StyledSwiperCard>
    );
  }

export default SwiperCard;