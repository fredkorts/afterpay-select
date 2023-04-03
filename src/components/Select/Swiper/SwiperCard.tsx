import React from 'react';
import { StyledSwiperCard } from './Styles/SwiperCard';

interface SwiperCardProps {
  value: number | null;
  handleTrigger: () => void;
  subtitle: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
}

const SwiperCard: React.FC<SwiperCardProps> = ({
  value, 
  handleTrigger, 
  subtitle, 
  primaryColor, 
  secondaryColor, 
  backgroundColor
}) => {

    return (
        <StyledSwiperCard
          backgroundColor={backgroundColor}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        >
          <div className="selected-option">{value}</div>
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