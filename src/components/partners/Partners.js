import React, { useContext, useEffect, useRef, useState } from "react";
import "../partners/partners.scss";
import RunningLine from "../runningLine/RunningLine";
import { Context } from "../../App";
import BackElips from "../backElips/BackElips";

const partnersData = [
  "1.svg",
  "2.svg",
  "3.svg",
  "4.svg",
  "5.svg",
  "6.svg",
  "7.svg",
  "8.svg",
];

function BricksRender() {
  return (
    <>
      {partnersData.map((el, index) => (
        <div key={`PSBE_${index}`} className="PartnersSection_Bricks_El">
          <img src={`./img/partners/${el}`} />
        </div>
      ))}
    </>
  );
}

function Partners() {
  const screenWidth = useContext(Context).screenWidth;

  return (
    <div className="PartnersSection_Wrap">
      <div className="PartnersSection">
        <div className="PartnersSection_Text">
          Some Of The Brands <span>That Trust Us!</span>
        </div>

        <div className="PartnersSection_Bricks">
          {screenWidth <= 1080 && screenWidth != 0 ? (
            <div className="PartnersSection_Bricks_RunningLine">
              <RunningLine height={"130px"} childWidth="2812px">
                <div className="PartnersSection_Bricks_Wrap">
                  {partnersData.map((el, index) => (
                    <div
                      key={`PSBE_${index}`}
                      className="PartnersSection_Bricks_Wrap_El"
                    >
                      <img src={`./img/partners/${el}`} />
                    </div>
                  ))}
                </div>
              </RunningLine>
            </div>
          ) : (
            <BricksRender />
          )}
        </div>

        <div className="PartnersSection_Phrase">
          <div className="PartnersSection_Phrase_Line1">
            GOING THE EXTRA MILE
          </div>

          <div className="PartnersSection_Phrase_Line2">
            SEES NO SETBACKS WHEN YOU’RE FLYING
          </div>

          <div className="PartnersSection_Phrase_Line3">
            WITH
            <div className="PartnersSection_Phrase_Line3_Bluship">
              <div className="PartnersSection_Phrase_Line3_Bluship_text">
                BLUSHIP
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
