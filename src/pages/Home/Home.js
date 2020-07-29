import React, { forwardRef, useRef, useState } from "react";
import styled from "styled-components";
import { spacing, palette } from "@material-ui/system";
import { Toolbar } from "@material-ui/core";
import { StyledBox, LinkWrapper } from "../../shared/ContentWrapper";
import { BrowserRouter as Router } from "react-router-dom";
import About from "../About/About";
import Skills from "../Skills/Skills";
import HomeScreen from "../HomeScreen/HomeScreen";
import Interest from "../Interest/Interest";

const scrollToRef = (ref) => {
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
};
const scrollToRefOnWindowScroll = (ref) => {
  console.log("EREF", ref);
  if (ref.current) {
    ref.current.scrollIntoView({ block: "start" });
  }
};

const Home = () => {
  const homeScreenRef = React.createRef();
  const aboutRef = React.createRef();
  const skillsRef = React.createRef();
  const interestRef = React.createRef();
  var start = 0;
  const initalHeight = window.innerHeight;
  var windowInnerHeight = window.innerHeight;
  const pageList = [homeScreenRef, aboutRef, skillsRef];
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    const navbar = document.getElementById("stickyNavbar");
    const sticky = navbar.offsetTop;
    console.log("---------------Window", window.pageYOffset);
    console.log("window height", windowInnerHeight);
    console.log("start ", start);

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
    if (
      start > 0 &&
      start < pageList.length - 1 &&
      window.pageYOffset < windowInnerHeight / (start + 1) - 500
    ) {
      // less than current window
      start--;
      if (start === 0 || start - 1 === 0) windowInnerHeight = initalHeight;
      // if start is 0 then we reset windowinnerheight to be the initial
      else windowInnerHeight = initalHeight * (start - 1);
      console.log("START ", start);
      console.log("windowInnerHeight is NOWWSS", windowInnerHeight);
      scrollToRefOnWindowScroll(pageList[start]);
      console.log("Less than HALF", start);
    } else if (
      // case for when we are at the last page and are scrolling up
      start > 0 &&
      start === pageList.length - 1 &&
      window.pageYOffset < windowInnerHeight - 500
    ) {
      // less than current window
      start--;
      // if start is 0 then we reset windowinnerheight to be the initial
      windowInnerHeight = initalHeight * (start + 1);
      console.log("SCrolling up from last page START ", start);
      console.log("windowInnerHeight is NOWWSS", windowInnerHeight);
      scrollToRefOnWindowScroll(pageList[start]);
      console.log("Less than HALF", start);
    } else {
      if (start === 0) {
        console.log("start is 0");
        // if we are at the top first page ref
        if (
          window.pageYOffset > windowInnerHeight - 500 &&
          start >= 0 &&
          start < pageList.length - 1
        ) {
          start++;
          windowInnerHeight = initalHeight * (start + 1);
          scrollToRefOnWindowScroll(pageList[start]);
          console.log("MORETHAN HALF", start);
          console.log("windowInnerHeight is now", windowInnerHeight);
        }
      } else {
        if (start === pageList.length - 2) {
          // if start is the next last one
          if (
            window.pageYOffset > windowInnerHeight - 500 &&
            start >= 0 &&
            start < pageList.length - 1
          ) {
            console.log("----- start is 1");
            start++;

            windowInnerHeight = initalHeight * start;
            scrollToRefOnWindowScroll(pageList[start]);
            console.log("MORETHAN HALF", start);
            console.log("windowInnerHeight is now", windowInnerHeight);
          }
        }
      }
    }
  }
  return (
    <HomeWrapper>
      <Router>
        <NavBarSticker id={"stickyNavbar"}>
          <StyledNavbar bgcolor={"black"}>
            <LinkWrapper to={"/"}>
              <StyledBox
                color={"white"}
                fontSize={"20px"}
                onClick={() => scrollToRef(homeScreenRef)}
              >
                Steven Nguyen
              </StyledBox>
            </LinkWrapper>
            <HeaderWrapper pr={5}>
              <LinkWrapper
                ml={10}
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
                onClick={() => scrollToRef(skillsRef)}
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
          <Skills ref={skillsRef} />
          <Interest ref={interestRef} />
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
