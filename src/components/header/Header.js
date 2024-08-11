import React, { useEffect, useRef, useState } from 'react'
import '../header/header.scss'
import BookButton from '../bookButton/BookButton'
import { ReactComponent as Logo } from '../../svg/logo/logo.svg'
import { ReactComponent as LogoName } from '../../svg/logo/logo_name.svg'
import { ReactComponent as LinkedIn } from '../../svg/icons/LinkedIn.svg'
import { ReactComponent as Twitter } from '../../svg/icons/Twitter.svg'
import { ReactComponent as Mail } from '../../svg/icons/Mail.svg'

function Header() {
  const [scrollTop, setScrollTop] = useState(0)
  const [menuToggle, setMenuToggle] = useState(false)
  const headerRef = useRef(null)
  const headerSectionRef = useRef(null)
  const menuButtonRef = useRef(null)
  const menuRef = useRef(null)
  const menuBackRef = useRef(null)

  const clickMenu = () => {
    if (menuButtonRef !== null) {
      menuRef.current.classList.remove('menu_start')

      setMenuToggle((el) => !el)
      menuButtonRef.current.classList.toggle('menuButton_active')
      menuRef.current.classList.toggle('menu_active')
      menuBackRef.current.classList.toggle('menuBack_active')
    }
  }

  useEffect(() => {
    if (headerRef !== null && !menuToggle) {
      if (scrollTop > 0) {
        headerRef.current.style.background = '#04020D'
        headerSectionRef.current.style.marginTop = '10px'
        headerSectionRef.current.style.marginBottom = '10px'
      } else {
        headerRef.current.style.background = 'none'
        headerSectionRef.current.style.marginTop = '20px'
        headerSectionRef.current.style.marginBottom = '20px'
      }
    }
  }, [scrollTop, menuToggle])

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY)
    }
    const resizeWindow = () => {
      if (window.innerWidth > 758) {
        setMenuToggle(false)
        menuButtonRef.current.classList.remove('menuButton_active')
        menuRef.current.classList.remove('menu_active')
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', resizeWindow)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', resizeWindow)
    }
  }, [])

  return (
    <div ref={headerRef} className="HeaderSectionWrap">
      <header ref={headerSectionRef} className="HeaderSection">
        <div className="HeaderSection_Logo">
          <Logo className="HeaderSection_Logo_Icon" />
          <LogoName className="HeaderSection_Logo_Name" />
        </div>

        <nav className="HeaderSection_Navigation">
          <a
            href="#services_section"
            className="HeaderSection_Navigation_Services HeaderSection_Navigation_El"
          >
            SERVICES
          </a>
          <a
            href="#network_section"
            className="HeaderSection_Navigation_Network HeaderSection_Navigation_El"
          >
            NETWORK
          </a>
          <a
            href="#team_section"
            className="HeaderSection_Navigation_Team HeaderSection_Navigation_El"
          >
            TEAM
          </a>
        </nav>

        <div className="HeaderSection_Book">
          <BookButton small />

          <div
            ref={menuButtonRef}
            className="HeaderSection_Book_Menu"
            onClick={clickMenu}
          >
            <div className="HeaderSection_Book_Menu_1 HeaderSection_Book_Menu_el"></div>
            <div className="HeaderSection_Book_Menu_2 HeaderSection_Book_Menu_el"></div>
            <div className="HeaderSection_Book_Menu_3 HeaderSection_Book_Menu_el"></div>
          </div>
        </div>
      </header>

      <div ref={menuRef} className="HeaderSectionWrap_MobileMenu menu_start">
        <nav className="HeaderSectionWrap_MobileMenu_Navigation">
          <a
            href="#services_section"
            className=" HeaderSectionWrap_MobileMenu_Navigation_El HeaderSection_Navigation_El"
          >
            SERVICES
          </a>
          <a
            href="#network_section"
            className=" HeaderSectionWrap_MobileMenu_Navigation_El HeaderSection_Navigation_El"
          >
            NETWORK
          </a>
          <a
            href="#team_section"
            className=" HeaderSectionWrap_MobileMenu_Navigation_El HeaderSection_Navigation_El"
          >
            TEAM
          </a>
        </nav>

        <div className="HeaderSectionWrap_MobileMenu_Socioals">
          <div className="HeaderSectionWrap_MobileMenu_Socioals_Text">
            CHECK OUR SOCIALS:
          </div>

          <div className="HeaderSectionWrap_MobileMenu_Socioals_Text_Buttons">
            <a
              href="#"
              className="HeaderSectionWrap_MobileMenu_Socioals_Text_Buttons_El"
            >
              <LinkedIn />
            </a>
            <a
              href="#"
              className="HeaderSectionWrap_MobileMenu_Socioals_Text_Buttons_El"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="HeaderSectionWrap_MobileMenu_Socioals_Text_Buttons_El"
            >
              <Mail />
            </a>
          </div>
        </div>

        <div className="HeaderSectionWrap_MobileMenu_Driver"></div>
      </div>

      <div
        ref={menuBackRef}
        className="HeaderSectionWrap_MobileMenu_DarkerBack"
        onClick={clickMenu}
      ></div>
      {/* {menuToggle ? (
        <div
          className="HeaderSectionWrap_MobileMenu_DarkerBack"
          onClick={clickMenu}
        ></div>
      ) : null} */}
    </div>
  )
}

export default Header
