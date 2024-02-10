import Marquee from "react-fast-marquee";
import React from "react";

type MarqueeCardsProps = {
  direction: "left" | "right" | "up" | "down" | undefined
  children: React.ReactNode
}
const MarqueeCards: React.FC<MarqueeCardsProps> = ({children, direction}) => {

  return (
    <Marquee
      direction={direction}
      gradient={false}
      speed={100}
      pauseOnHover={true}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
