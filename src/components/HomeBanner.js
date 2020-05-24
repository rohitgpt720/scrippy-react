import React from "react";
import { Link } from "react-router-dom";

//styled components
import {
  Banner,
  LineOne,
  LineTwo,
  ButtonSection,
} from "../styles/bannerStyles";

import { motion } from "framer-motion";

const HomeBanner = () => {
  return (
    <Banner>
      <LineOne
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -40,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        Write your heart out, they said
      </LineOne>
      <LineTwo
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -40,
          opacity: 0,
        }}
        transition={{
          delay: 1.5,
          duration: 1.5,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        what is it worth, we'll decide
      </LineTwo>
      <ButtonSection
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          delay: 4.5,
          duration: 1.5,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        <motion.div
          style={{ margin: 0, padding: 0 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <Link to="/register">Buy a Script !</Link>
        </motion.div>
        <motion.div
          style={{ margin: 0, padding: 0 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <Link to="/register">Sell a Script !</Link>
        </motion.div>
      </ButtonSection>
    </Banner>
  );
};

export default HomeBanner;
