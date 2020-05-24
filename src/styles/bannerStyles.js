import styled from "styled-components"
import { motion } from "framer-motion"

export const Banner = styled.div`
  /* border: 2px solid red; */
  height: 100vh;
  width: 100%;
  position: relative;
`

export const LineOne = styled(motion.h1)`
  position: absolute;
  top: 300px;
  right: 220px;
  font-size: 2rem;
  color: white;
  /* border: 2px solid green; */
`
export const LineTwo = styled(motion.h1)`
  position: absolute;
  top: 350px;
  right: 220px;
  font-size: 2rem;
  color: white;
  /* border: 2px solid green; */
`

export const ButtonSection = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  top: 450px;
  right: 180px;

  a {
    font-size: 1rem;
    font-weight: 500;
    color: white;
    /* letter-spacing: 0.7px; */
    margin-right: 30px;
    padding: 8px 15px;
    text-transform: lowercase;
  }

  a:hover {
    background: white;
    color: black;
  }
`
