import React, { useEffect, useState } from 'react'

function useWindowResize() {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    console.log(screenWidth)

    const resizeWindow = () => {
      setScreenWidth(window.innerWidth)
    }
    resizeWindow()
    window.addEventListener('resize', resizeWindow)

    return () => {
      window.removeEventListener('resize', resizeWindow)
    }
  }, [])

  return [screenWidth]
}

export default useWindowResize
