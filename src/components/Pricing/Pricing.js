import React from "react";
import { Button } from "../../globalStyles";
// import { AiFillThunderbolt } from "react-icons/ai";
// import { GiCrystalBars } from "react-icons/gi";
// import { GiCutDiamond, GiRock } from "react-icons/gi";
// import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Dzieje obchodów</PricingHeading>
          <PricingContainer>
            <PricingCard to="/ojczyzna">
              <PricingCardInfo>
                <PricingCardIcon>{/* <GiRock /> */}</PricingCardIcon>
                <PricingCardPlan>23 kwietnia 1937</PricingCardPlan>
                <PricingCardCost>Ustanowienie</PricingCardCost>
                <PricingCardLength>przez Sejm</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Uroczystość</PricingCardFeature>
                  <PricingCardFeature>o charakterze</PricingCardFeature>
                  <PricingCardFeature>wojskowym</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Czytaj</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/ojczyzna">
              <PricingCardInfo>
                <PricingCardIcon>{/* <GiCrystalBars /> */}</PricingCardIcon>
                <PricingCardPlan>22 lipca 1945</PricingCardPlan>
                <PricingCardCost>Zniesienie</PricingCardCost>
                <PricingCardLength>przez KRN</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Nielegalne</PricingCardFeature>
                  <PricingCardFeature>obchody przez</PricingCardFeature>
                  <PricingCardFeature>
                    środowiska niepodległościowe
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Czytaj</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/ojczyzna">
              <PricingCardInfo>
                <PricingCardIcon>{/* <GiCutDiamond /> */}</PricingCardIcon>
                <PricingCardPlan>15 lutego 1989</PricingCardPlan>
                <PricingCardCost>Przywrócenie</PricingCardCost>
                <PricingCardLength>
                  w okresie transformacji systemowej
                </PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Uroczystość</PricingCardFeature>
                  <PricingCardFeature>z udziałem</PricingCardFeature>
                  <PricingCardFeature>najwyższych władz</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Czytaj</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
