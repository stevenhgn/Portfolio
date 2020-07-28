import React, { forwardRef, useRef } from "react";
import styled from "styled-components";
import { spacing, palette } from "@material-ui/system";
import { Toolbar } from "@material-ui/core";
import { StyledBox, LinkWrapper } from "../../shared/ContentWrapper";
import { BrowserRouter as Router } from "react-router-dom";
import About from "../About/About";
import Skills from "../Skills/Skills";
import HomeScreen from "../HomeScreen/HomeScreen";

const scrollToRef = (ref) => {
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Home = () => {
  window.onscroll = function () {
    myFunction();
  };

  const homeScreenRef = React.createRef();
  const aboutRef = React.createRef();

  function myFunction() {
    const navbar = document.getElementById("stickyNavbar");
    const sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  return (
    <HomeWrapper>
      <Router>
        <NavBarSticker id={"stickyNavbar"}>
          <StyledNavbar bgcolor={"black"}>
            <StyledBox
              color={"white"}
              fontSize={"25px"}
              onClick={() => scrollToRef(homeScreenRef)}
            >
              Steven Nguyen
            </StyledBox>
            <HeaderWrapper pr={5}>
              <LinkWrapper
                pl={5}
                to={"/Aboutme"}
                onClick={() => scrollToRef(aboutRef)}
              >
                <StyledBox color={"white"} fontSize={"15px"}>
                  About me
                </StyledBox>
              </LinkWrapper>
              <LinkWrapper
                pl={5}
                to={"/Skill-Experience"}
                onClick={() => scrollToRef(aboutRef)}
              >
                <StyledBox color={"white"} fontSize={"15px"}>
                  Skills {"&"} Experience
                </StyledBox>
              </LinkWrapper>
            </HeaderWrapper>
          </StyledNavbar>
        </NavBarSticker>

        <ContentWrapper>
          <HomeScreen ref={homeScreenRef} />
          <About ref={aboutRef} />
        </ContentWrapper>
      </Router>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  ${spacing}
  ${palette}
`;
const ContentWrapper = styled.div`
  ${spacing}
  ${palette}
  height:100vh;
`;
const HeaderWrapper = styled.div`
  ${spacing}
  ${palette}
  float:right;
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  flex-wrap: wrap;
`;
const StyledNavbar = styled(Toolbar)`
  ${spacing}
  ${palette}
`;
const NavBarSticker = styled.div`
  ${spacing}
  ${palette}
  position:fixed;
  top: 0;
  width: 100%;
`;

export default Home;
