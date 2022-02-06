import styled from 'styled-components'
import { primaryColor } from '../../config/colors'

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
  }

  a:hover {
    color: #ff0;
  }
`
