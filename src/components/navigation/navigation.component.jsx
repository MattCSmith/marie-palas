import React, { useState, useEffect } from "react"

import {
  NavigationContainer,
  NavContentContainer,
  NavLogo,
  LogoContainer,
} from "./navigation.styles"
import Navlink from "../Navlink/Navlink.component"

export default () => {
  const [float, setFloat] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setFloat(true)
      else if (window.scrollY === 0) setFloat(false)
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <NavigationContainer float={float} role="navigation">
      <LogoContainer float={float}>
        <NavLogo src="https://images.ctfassets.net/noarwe3aza5g/2tWflLAqd7t9icOZyscwTF/4436e7faa294d1a83b2e37109c15b186/mplogo.png?h=150" />
      </LogoContainer>

      <NavContentContainer>
        <Navlink>About</Navlink>
        <Navlink>Projects</Navlink>
        <Navlink>Contact</Navlink>
      </NavContentContainer>
    </NavigationContainer>
  )
}
