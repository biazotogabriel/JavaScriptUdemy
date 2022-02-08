import styled from 'styled-components'

export const Conteiner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
  }

  span {
    color: white;
    background: #333;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 black;
    width: 120px;
    text-align: left;
  }
`
