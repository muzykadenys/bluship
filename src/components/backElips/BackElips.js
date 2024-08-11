import React from 'react'
import '../backElips/backElips.scss'

function BackElips({ pos_horizontal, pos_vertical }) {
  return (
    <div
      className="BgElips"
      style={{ justifyContent: pos_horizontal, alignItems: pos_vertical }}
    >
      <div className="BgElips_Elips"></div>
    </div>
  )
}

export default BackElips
