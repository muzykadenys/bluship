import React, { useContext, useEffect, useRef, useState } from "react";
import "../home/home.scss";
import BookButton from "../bookButton/BookButton";
import { Context } from "../../App";

function Home() {
  const screenWidth = useContext(Context).screenWidth;

  useEffect(() => {
    const referSection = document.querySelector(".HomeSection_Main");
    const image = document.querySelector(".HomeSection_Images");
    const indicator = document.querySelector(".HomeSection_Main_Indicator");

    if (screenWidth > 320 && screenWidth < 1080) {
      image.style.top = `${referSection.clientHeight}px`;
    } else if (screenWidth <= 320) {
      image.style.top = `${indicator.getBoundingClientRect().top}px`;
    } else {
      image.style.top = "0px";
    }
  }, [screenWidth]);

  return (
    <div className="HomeSection">
      <div className="HomeSection_Main">
        <div className="HomeSection_Main_BigText">
          <div className="HomeSection_Main_BigText_Line1">
            <span className="HomeSection_Main_BigText_Line1_GDText">BORN</span>{" "}
            IN WEB2
          </div>

          <div className="HomeSection_Main_BigText_Line2">
            <span className="HomeSection_Main_BigText_Line2_GDText">BUILT</span>{" "}
            FOR WEB3
          </div>
        </div>

        <div className="HomeSection_Main_SmallText">
          We know building and growing a community can be tough.{" "}
          {screenWidth >= 758 ? <br /> : null}
          We're here to alleviate all the trial & error. With our expertise, you
          will confidently soar into growth. Say goodbye to "flying blind.”
        </div>

        <BookButton />
        <div className="HomeSection_Main_Indicator"></div>
      </div>

      <div className="HomeSection_Images">
        <img
          src={"./img/ship_fly_2.webp"}
          className="HomeSection_Images_ShipFly"
        />
      </div>
    </div>
  );
}

export default Home;
