import React from "react";

//styles
import { Container, Flex } from "../styles/globalStyles";
import { HeaderNav, Logo, Navigation } from "../styles/headerStyles";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderNav
      animate={{
        y: 0,
        opacity: 1,
      }}
      initial={{
        y: -100,
        opacity: 1,
      }}
      transition={{
        delay: 4,
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">SCRIPPY.</Link>
          </Logo>
          <Navigation>
            <nav>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </nav>
          </Navigation>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
