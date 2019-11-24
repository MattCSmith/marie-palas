import styled from "styled-components"

export const CatIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(71, 71, 71, 0), rgba(0, 0, 0, 0)),
    url(${props => props.img});

  background-size: cover;
  width: 150px;
  height: 150px;

  &:hover {
    background: linear-gradient(0deg, rgba(71, 71, 71, 0), rgba(177, 0, 207, 0)),
      url(${props => props.img});
    background-size: cover;

    & h2 {
      color: #fff;
      visibility: visible;
    }
  }
`

export const CatTitle = styled.h2`
  visibility: hidden;
  font-size: 30px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  transform: rotate(-14deg);
`
CatTitle.displayName = "CatTitle"

export const CatCard = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  background: linear-gradient(25deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
    url(${props => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 359px;
  border-radius: 6%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0), 0 0px 20px rgba(0, 0, 0, 0);
    background: linear-gradient(25deg, rgba(0, 0, 0, 0), rgba(237, 27, 36, 0)),
      url(${props => props.img});
    background-position: center;
    background-size: cover;

    & h2 {
      visibility: visible;
    }
  }
`
