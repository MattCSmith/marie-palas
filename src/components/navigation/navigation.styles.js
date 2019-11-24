import styled, { css } from "styled-components"

const floatStyles = css`
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.25);
  background: #fff;
`

const logoHide = css`
  visibility: hidden;
`

const logoShow = css`
  visibility: visible;
`

const getFloatStyles = ({ float }) => (float ? floatStyles : null)
const showLogo = ({ float }) => (float ? logoShow : logoHide)

export const NavigationContainer = styled.nav`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 80px;
  z-index: 1000;
  ${getFloatStyles};
`
NavigationContainer.displayName = "NavigationContainer"

export const NavContentContainer = styled.div`
  display: flex;
  width: 100vw;
  padding: 0 100px;
  align-items: center;
  justify-content: flex-end !important;
`
NavContentContainer.displayName = "NavContentContainer"

export const NavLogo = styled.img`
  height: 50px;
  width: auto;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 100px;
  ${showLogo}
`
LogoContainer.displayName = "LogoContainer"
