import React, { useEffect, useState } from 'react'
import BottomText from './components/bottomText/BottomText'
import Footer from './components/footer/Footer'
import FooterBanner from './components/footerBanner/FooterBanner'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Metrics from './components/metrics/Metrics'
import Network from './components/network/Network'
import Partners from './components/partners/Partners'
import Services from './components/services/Services'
import StarSky from './components/starSky/StarSky'
import Team from './components/team/Team'
import BackElips from './components/backElips/BackElips'

export const Context = React.createContext()

function App() {
  const [screenWidth, setScreenWidth] = useState(0)
  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    const resizeWindow = () => {
      setScreenWidth(window.innerWidth)
      setScreenHeight(window.innerHeight)
    }
    resizeWindow()
    window.addEventListener('resize', resizeWindow)

    return () => {
      window.removeEventListener('resize', resizeWindow)
    }
  }, [])

  return (
    <Context.Provider
      value={{ screenWidth: screenWidth, screenHeight: screenHeight }}
    >
      <div className="App">
        <Header />
        <Home />

        <BackElips />

        <Partners />
        <Services />

        <BackElips pos_horizontal="start" pos_vertical="start" />

        <Network />
        <Metrics />

        <BackElips pos_vertical="start" />

        <Team />
        <FooterBanner />
        <Footer />
        <BottomText />
        <StarSky />
      </div>
    </Context.Provider>
  )
}

export default App
