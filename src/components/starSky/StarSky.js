import React, { useContext, useEffect, useState } from 'react'
import '../starSky/starSky.scss'
import { Context } from '../../App'

function StarSky() {
  const screenHeight = useContext(Context).screenHeight
  const [skyHeight, setSkyHeight] = useState(5000)

  useEffect(() => {
    const resizeWindow = () => {
      const app = document.querySelector('.App')
      const wrapper = document.querySelector('.stars-wrapper')
      wrapper.style.height = `${app.clientHeight}px`
    }
    resizeWindow()
    window.addEventListener('resize', resizeWindow)

    return () => {
      window.removeEventListener('resize', resizeWindow)
    }
  }, [screenHeight])

  return (
    <div className="stars-wrapper">
      <svg
        className="stars"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 3 }).map((_, s) =>
          Array.from({ length: 400 }).map((_, i) => {
            const cx = `${Math.round(Math.random() * 10000) / 100}%`
            const cy = `${Math.round(Math.random() * 10000) / 100}%`
            const r = Math.round((Math.random() + 0.5) * 10) / 10
            return (
              <circle
                key={`SW_${i}_${s}`}
                className="star"
                cx={cx}
                cy={cy}
                r={r}
              ></circle>
            )
          }),
        )}
      </svg>
      <svg
        className="extras"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
            <stop offset="0%" stopColor="rgba(255,255,255,.8)"></stop>
            <stop offset="100%" stopColor="rgba(255,255,255,0)"></stop>
          </radialGradient>
        </defs>
        <g transform="rotate(-135)">
          <ellipse
            className="comet comet-a"
            fill="url(#comet-gradient)"
            cx="0"
            cy="0"
            rx="150"
            ry="2"
          ></ellipse>
        </g>
        <g transform="rotate(20)">
          <ellipse
            className="comet comet-b"
            fill="url(#comet-gradient)"
            cx="100%"
            cy="0"
            rx="150"
            ry="2"
          ></ellipse>
        </g>
        <g transform="rotate(300)">
          <ellipse
            className="comet comet-c"
            fill="url(#comet-gradient)"
            cx="40%"
            cy="100%"
            rx="150"
            ry="2"
          ></ellipse>
        </g>
      </svg>
    </div>
  )
}

export default StarSky
