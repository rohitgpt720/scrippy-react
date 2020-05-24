import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
  /* border: 2px solid yellow; */
`
export const Logo = styled.div`
  /* border: 2px solid orange; */
  a {
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
    letter-spacing: 4px;
  }
`

export const Navigation = styled.div`
  a {
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: white;
    margin: 0 20px;
    text-transform: lowercase;
  }

  a:nth-child(1):hover {
    border-bottom: 1px solid white;
    padding-bottom: 2px;
  }

  a:nth-child(2) {
    border: 1px solid white;
    padding: 8px 20px;
  }

  a:nth-child(2):hover {
    background: white;
    color: black;
  }
`
