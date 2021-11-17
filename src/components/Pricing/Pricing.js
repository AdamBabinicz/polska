import React, { useState } from "react";
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
import Modal from "../Portal/Modal";
import Modal1 from "../Portal/Modal";
import Modal2 from "../Portal/Modal";

function Pricing() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  const [modal1, setModal1] = useState(false);
  const Toggle1 = () => setModal1(!modal1);
  const [modal2, setModal2] = useState(false);
  const Toggle2 = () => setModal2(!modal2);

  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection id="obchody">
        <PricingWrapper>
          <PricingHeading>Dzieje obchodów</PricingHeading>
          <PricingContainer>
            <PricingCard>
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
                <Button primary onClick={() => Toggle()}>
                  Czytaj
                </Button>
                <Modal
                  show={modal}
                  close={Toggle}
                  title="Przed II wojną światową"
                >
                  <p>
                    Święto niepodległości obchodzone jest w Polsce 11 listopada.
                    Upamiętnia ono odzyskanie przez nasz kraj niepodległości po
                    123 latach niewoli (1795-1918). Zostało ustanowione na mocy
                    ustawy z dnia 23 kwietnia 1937 roku. Przed wybuchem II wojny
                    światowej odbyły się zaledwie dwie takie uroczystości.
                  </p>
                  <br />
                  <p>
                    <em>wiadomosci.onet.pl/swieto-niepodleglosci</em>
                  </p>
                </Modal>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
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
                <Button primary onClick={() => Toggle1()}>
                  Czytaj
                </Button>
                <Modal1
                  show={modal1}
                  close={Toggle1}
                  title="Ustanowienie i zniesienie święta"
                >
                  <p>
                    Dzień 22 lipca ustanowiono świętem narodowym (i dniem wolnym
                    od pracy) ustawą Krajowej Rady Narodowej w dniu 22 lipca
                    1945, czyli rok po podpisaniu Manifestu Polskiego Komitetu
                    Wyzwolenia Narodowego. Ustawa została uchwalona podczas
                    siódmej trzydniowej sesji KRN odbywającej się w sali „Romy”
                    przy ul. Nowogrodzkiej 49. Święto zastąpiło zniesione ustawą
                    KRN Święto Niepodległości obchodzone 11 listopada.
                  </p>
                  <br />
                  <p>
                    <em>
                      pl.wikipedia.org/wiki/Narodowe_Święto_Odrodzenia_Polski
                    </em>
                  </p>
                </Modal1>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
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
                <Button primary onClick={() => Toggle2()}>
                  Czytaj
                </Button>
                <Modal2
                  show={modal2}
                  close={Toggle2}
                  title="Paradoks roku 1989"
                >
                  <p>
                    Ustawa Sejmu PRL z 15 lutego 1989 r. wytworzyła paradoksalną
                    sytuację. W kalendarzu świąt narodowych znajdowały się dwa
                    dni odwołujące się do idei suwerenności państwa. Nadal
                    obowiązywało ustanowione w 1945 r. Narodowe Święto
                    Odrodzenia Polski. Rok 1989 był jedynym, w którym oficjalnie
                    obchodzono oba te święta.
                  </p>
                  <br />
                  <p>
                    <em>
                      www.tvp.info/41324124/30-lat-temu-sejm-przyjal-ustawe-o-ustanowieniu-11-listopada-narodowym-swietem-niepodleglosci
                    </em>
                  </p>
                </Modal2>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
