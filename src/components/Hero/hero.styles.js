import styled from "styled-components"

export const HeroContainer = styled.div`
  height: 100vh;
  transform: translateY(0);
  & img {
    height: 80vh;
    width: auto;
  }
`
HeroContainer.displayName = "HeroContainer"

export const HeroSubContainer = styled.div`
  background-image: url("https://images.ctfassets.net/noarwe3aza5g/3U4MqPgnBX8TtGuxuzkV7k/6c78fc25e9a2fe80eb0434a719086669/Untitled-2.png?");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
`
HeroSubContainer.displayName = "HeroContainer"
