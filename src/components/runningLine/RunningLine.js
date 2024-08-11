import React, { useEffect, useRef, useState } from "react";
import "../runningLine/runningLine.scss";

function RunningLine({
  children,
  height = "100px",
  returnSame = false,
  childWidth= "2905px",
  // wrapRef,
  ...rest
}) {

  // const [chageWidth, setChangeWidth] = useState("100px")
  // useEffect(() => {
  //   if(!wrapRef.current) return
    
  //   setChangeWidth(`${wrapRef.current.offsetWidth}px`)

  //   console.log(wrapRef.current.offsetWidth)
  // }, []);
  return (
    <>
      {!returnSame ? (
        <div className="RunningLineSection" style={{ height: height }}>
          <div
            className="RunningLineSection_First"
            style={{ width: childWidth }}
          >
            {React.cloneElement(children, { ...rest })}
          </div>

          <div
            className="RunningLineSection_Second"
            style={{ width: childWidth }}
          >
            {React.cloneElement(children, { ...rest })}
          </div>
        </div>
      ) : (
        <>{React.cloneElement(children, { ...rest })}</>
      )}
    </>
  );
}

export default RunningLine;
