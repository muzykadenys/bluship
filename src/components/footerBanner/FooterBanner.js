import React, { useContext } from 'react'
import '../footerBanner/footerBanner.scss'
import BookButton from '../bookButton/BookButton'
import { Context } from '../../App'

function FooterBanner() {
  return (
    <div className="FooterBannerSection">
      <div className="FooterBannerSection_Main_Wrap">
        <div className="FooterBannerSection_Main">
          <div className="FooterBannerSection_Main_Left"></div>

          <div className="FooterBannerSection_Main_Right">
            <div className="FooterBannerSection_Main_Right_BigText">
              “Bluship Delivered Services In Our Campaign That <span>Positively Impacted</span> Our ROI“
            </div>

            <div className="FooterBannerSection_Main_Right_SmallText">
              — Christian Kok, EarlyAccess Pass ($576,573.65 in sales)
            </div>

            <BookButton />
          </div>
        </div>
      </div>

      <img
        src="./img/ship_lay_center.webp"
        className="FooterBannerSection_CenterRocket"
      />
    </div>
  )
}

export default FooterBanner
