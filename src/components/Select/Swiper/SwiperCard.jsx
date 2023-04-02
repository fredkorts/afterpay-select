import { StyledSwiperCard } from './Styles/SwiperCard';

const SwiperCard = ({value, handleTrigger, subtitle, primaryColor, secondaryColor, backgroundColor}) => {

    return (
        <StyledSwiperCard
          backgroundColor={backgroundColor}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        >
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