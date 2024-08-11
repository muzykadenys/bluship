import React, { useContext, useState } from 'react'
import '../footer/footer.scss'
import { ReactComponent as Logo } from '../../svg/logo/logo.svg'
import { ReactComponent as LogoName } from '../../svg/logo/logo_name.svg'
import { ReactComponent as LinkedIn } from '../../svg/icons/LinkedIn.svg'
import { ReactComponent as Twitter } from '../../svg/icons/Twitter.svg'
import { ReactComponent as Mail } from '../../svg/icons/Mail.svg'
import { Context } from '../../App'

const footerData = [
  { name: 'GRAPHIC DESIGN & DIGITAL ILLUSTRATION', link: '#' },
  { name: 'INFLUENCER CAMPAIGNS', link: '#' },
  { name: 'COLLABORATIONS & ACQUISITION MARKETING', link: '#' },
  { name: 'ALPHA CALLS', link: '#' },
  { name: 'PPC MARKETING', link: '#' },
  { name: 'STRATEGY & ADVISORY', link: '#' },
  { name: 'DISCORD GROWTH', link: '#' },
  { name: 'INFLUENCER CAMPAIGNS', link: '#' },
  { name: 'TWITTER SPACE PACKAGES & HOSTING', link: '#' },
  { name: 'DEVELOPMENT', link: '#' },
  { name: 'GRAPHIC DESIGN & DIGITAL ILLUSTRATION', link: '#' },
  { name: 'B2B CAMPAIGNS', link: '#' },
]

function SocialsBricks() {
  return (
    <div className="FooterSection_Right_Bottom_Social">
      <a
        href="https://www.linkedin.com/company/bluship/"
        className="FooterSection_Right_Bottom_Social_El"
      >
        <LinkedIn className="FooterSection_Right_Bottom_Social_El_Icon" />
      </a>

      <a
        href="https://twitter.com/Bluship_Web3"
        className="FooterSection_Right_Bottom_Social_El"
      >
        <Twitter className="FooterSection_Right_Bottom_Social_El_Icon" />
      </a>

      <a
        href="mailto:hello@bluship.io"
        className="FooterSection_Right_Bottom_Social_El"
      >
        <Mail className="FooterSection_Right_Bottom_Social_El_Icon" />
      </a>
    </div>
  )
}

function LeftText() {
  return (
    <div className="FooterSectio_Left_Text">
      Building and growing communities is the foundation of Bluship. Each piece
      of our content has a purpose and is designed to convert curiosity into
      enthusiasm.
      <br />
      <br /> Web3 is a curious space because there is no formal education for
      this industry. There is no course for curiosity, and that is the
      philosophy that we want to push forward.
      <br />
      <br />
      You have the opportunity to partner with a highly growth-obsessed team
      that prioritizes creativity and innovation. Your curiosity led you here.
      How far will it take you?
    </div>
  )
}

function Footer() {
  const screenWidth = useContext(Context).screenWidth

  return (
    <div className="FooterSection">
      <div className="FooterSection_Wrapp">
        <div className="FooterSectio_Left">
          <div className="FooterSectio_Left_Logo">
            <div className="FooterSectio_Left_Logo_Wrapp">
              <Logo className="FooterSectio_Left_Logo_Icon" />
              <LogoName className="FooterSectio_Left_Logo_Text" />
            </div>

            {screenWidth < 1080 && screenWidth !== 0 ? <SocialsBricks /> : null}
          </div>

          {screenWidth > 1080 && screenWidth !== 0 ? <LeftText /> : null}
        </div>

        <div className="FooterSection_Right">
          <div className="FooterSection_Right_Wrap">
            <div className="FooterSection_Right_Title">SERVICES</div>

            <div className="FooterSection_Right_Line"></div>

            <div className="FooterSection_Right_Links">
              {footerData.map((el, index) => (
                <a
                  href="#"
                  className="FooterSection_Right_Links_El"
                  key={`FRLE_${index}`}
                >
                  {el.name}
                </a>
              ))}
            </div>
          </div>

          {screenWidth < 1080 && screenWidth !== 0 ? <LeftText /> : null}

          <div className="FooterSection_Right_Bottom">
            <div className="FooterSection_Right_Bottom_Text">
              <a href="#" className="FooterSection_Right_Bottom_Text_1">
                PRIVATE POLICY
              </a>
              <div className="FooterSection_Right_Bottom_Line"></div>
              <a href="#" className="FooterSection_Right_Bottom_Text_2">
                TERMS AND CONDITIONS
              </a>
            </div>

            {screenWidth > 1080 && screenWidth !== 0 ? <SocialsBricks /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
