import React, { useEffect, useRef, useState } from "react";
import BookButton from "../bookButton/BookButton";
import "../network/network.scss";
import RunningLine from "../runningLine/RunningLine";

function Network() {
  const networkData = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
  ]
  // const wrapRef = useRef(null)


  
  return (
    <div id="network_section" className="NetworkSection_Wrap">
      <div className="NetworkSection">
        <div className="NetworkSection_Pin">NETWORK</div>
        <div className="NetworkSection_BigText">
          Our Network, Is Your Network
        </div>
        <div className="NetworkSection_SmallText">
          Our network Community Bluprint™ is proven, the data is undeniable.
          When you provide founders with the tools to succeed, a dedicated
          growth team, and the largest sold-out network in the industry, success
          follows. What are you waiting for?
        </div>

        <BookButton />

        <div className="NetworkSection_Back_Bottom">
          <RunningLine >
            <div className="NetworkSection_Back_Bottom_Wrap" >
              {networkData.map((el, index) => (
                <div
                  key={`NSBBW_${index}`}
                  className="NetworkSection_Back_Bottom_Wrap_El"
                >
                  <img src={`./img/network/${el}`} key={`NBBWE_${index}`} />
                </div>
              ))}
            </div>
          </RunningLine>
        </div>
      </div>
    </div>
  );
}

export default Network;
