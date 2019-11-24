import styled from "styled-components"

export const CardContainer = styled.div`
  background: linear-gradient(
    25deg,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.9)
  );
  border: 1px solid rgba(0, 0, 0, 0.25);

  & img {
    max-height: 360px;
  }

  & h2 {
    position: absolute;
    top: 0;
    text-transform: uppercase;
    padding: 100px;
    color: #fff;
    font-size: 50px;
    visibility: hidden;
  }

  &:hover h2 {
    visibility: visible;
    transition: visibility 1s;
  }

  &:hover img {
    opacity: 0.1;
    transition: opacity 1s;
  }
`

export const Text = styled.div`
  height: 100%;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
