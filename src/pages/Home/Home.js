import React, { forwardRef, useRef, useState } from "react";
import styled from "styled-components";
import { spacing, palette } from "@material-ui/system";
import { Toolbar, Tooltip } from "@material-ui/core";
import { StyledBox, LinkWrapper } from "../../shared/ContentWrapper";
import { BrowserRouter as Router } from "react-router-dom";
import About from "../About/About";
import Skills from "../Skills/Skills";
import HomeScreen from "../HomeScreen/HomeScreen";
import Interest from "../Interest/Interest";
import {
  StyledIconButton,
  StyledArrowUp,
  StyledArrowDown,
} from "../../shared/icons";
import { StyledH1, StyledPara } from "../../shared/StyledTypography";

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
  const [currPage, setCurrPage] = useState(0);
  const initalHeight = window.innerHeight;
  var windowInnerHeight = window.innerHeight;
  const pageList = [homeScreenRef, aboutRef, skillsRef, interestRef];
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    const navbar = document.getElementById("stickyNavbar");
    const arrowUp = document.getElementById("stickyNavigationArrow");
    const sticky = navbar.offsetTop;
    console.log("---------------Window", window.pageYOffset);
    console.log("window height", windowInnerHeight);
    console.log("start ", start);

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      arrowUp.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
      arrowUp.classList.remove("sticky");
    }

    // if (start === 1 && window.pageYOffset < windowInnerHeight - 500) {
    //   start--;
    //   if (start === 0 || start - 1 === 0) windowInnerHeight = initalHeight;
    //   // if start is 0 then we reset windowinnerheight to be the initial
    //   else windowInnerHeight = initalHeight * (start - 1);
    //   console.log("START ", start);
    //   console.log("windowInnerHeight is NOWWSS", windowInnerHeight);
    //   setTimeout(() => {
    //     scrollToRefOnWindowScroll(pageList[start]);
    //   }, 500);
    //   console.log("Less than HALF", start);
    // } else if (
    //   start > 0 &&
    //   start < pageList.length - 1 &&
    //   window.pageYOffset < windowInnerHeight / (start - 1) - 500
    // ) {
    //   // less than current window
    //   start--;
    //   if (start === 0 || start - 1 === 0) windowInnerHeight = initalHeight;
    //   // if start is 0 then we reset windowinnerheight to be the initial
    //   else windowInnerHeight = initalHeight * (start - 1);
    //   console.log("START ", start);
    //   console.log("windowInnerHeight is NOWWSS", windowInnerHeight);
    //   setTimeout(() => {
    //     scrollToRefOnWindowScroll(pageList[start]);
    //   }, 500);
    //   console.log("Less than HALF", start);
    // } else if (
    //   // case for when we are at the last page and are scrolling up
    //   start > 0 &&
    //   start === pageList.length - 1 &&
    //   window.pageYOffset < windowInnerHeight - 500
    // ) {
    //   // less than current window
    //   start--;
    //   // if start is 0 then we reset windowinnerheight to be the initial
    //   windowInnerHeight = initalHeight * (start + 1);
    //   console.log("SCrolling up from last page START ", start);
    //   console.log("windowInnerHeight is NOWWSS", windowInnerHeight);
    //   setTimeout(() => {
    //     scrollToRefOnWindowScroll(pageList[start]);
    //   }, 500);
    //   console.log("Less than HALF", start);
    // } else {
    //   // scrolling down
    //   if (start === 0) {
    //     console.log("start is 0");
    //     // if we are at the top first page ref
    //     if (window.pageYOffset > windowInnerHeight - 500) {
    //       start += 1;
    //       scrollToRefOnWindowScroll(pageList[start]);
    //       windowInnerHeight = initalHeight * 2; // double the inner height
    //       console.log("MORETHAN HALF", start);
    //       console.log("windowInnerHeight is now", windowInnerHeight);
    //     }
    //   } else if (
    //     window.pageYOffset > windowInnerHeight - 500 &&
    //     start > 0 &&
    //     start < pageList.length - 1
    //   ) {
    //     console.log("----- start is 1");
    //     start += 1;

    //     windowInnerHeight = initalHeight * start + 1;
    //     scrollToRefOnWindowScroll(pageList[start]);
    //     console.log("MORETHAN HALF", start);
    //     console.log("windowInnerHeight is now", windowInnerHeight);
    //   }
    // }
  }

  const handleArrowDown = () => {
    const currPageIndex = Math.round(window.pageYOffset / window.innerHeight);
    console.log("Curr ", currPage, "Currindex: ", currPageIndex);
    if (currPageIndex < pageList.length - 1) {
      scrollToRef(pageList[currPageIndex + 1]);
      setCurrPage(currPageIndex + 1);
    }
  };
  const handleArrowUp = () => {
    const currPageIndex = Math.round(window.pageYOffset / window.innerHeight);
    console.log(currPageIndex);
    if (currPageIndex > 0) {
      scrollToRef(pageList[currPageIndex - 1]);
      setCurrPage(currPageIndex - 1);
    }
  };
  return (
    <HomeWrapper>
      <Router>
        <NavBarSticker id={"stickyNavbar"}>
          <StyledNavbar bgcolor={"black"}>
            <LinkWrapper to={"/"}>
              <StyledBox
                color={"white"}
                fontSize={"2vw"}
                onClick={() => scrollToRef(homeScreenRef)}
              >
                Steven Nguyen
              </StyledBox>
            </LinkWrapper>
            <HeaderWrapper pr={5}>
              <LinkWrapper
                pl={"2vw"}
                to={"/Aboutme"}
                // fontSize={"2vw"}
                onClick={() => scrollToRef(aboutRef)}
              >
                <StyledBox color={"white"}>About me</StyledBox>
              </LinkWrapper>
              <LinkWrapper
                pl={"2vw"}
                to={"/Skill-Experience"}
                // fontSize={"2vw"}
                onClick={() => scrollToRef(skillsRef)}
              >
                <StyledBox color={"white"}>Skills {"&"} Experience</StyledBox>
              </LinkWrapper>
              <LinkWrapper
                pl={"2vw"}
                to={"/Skill-Experience"}
                // fontSize={"2vw"}
                onClick={() => scrollToRef(interestRef)}
              >
                <StyledBox color={"white"}>Interest</StyledBox>
              </LinkWrapper>
              <LinkWrapper
                pl={"2vw"}
                to={"/Contact"}
                // fontSize={"2vw"}
                // onClick={() => scrollToRef()}
              >
                <StyledBox color={"white"}>Contact</StyledBox>
              </LinkWrapper>
            </HeaderWrapper>
          </StyledNavbar>
        </NavBarSticker>

        <ContentWrapper>
          <StyledIconButton
            onClick={handleArrowUp}
            id={"stickyNavigationArrow"}
            style={{
              position: "fixed",
              top: 50,
              alignSelf: "center",
              width: "100vw",
            }}
          >
            <Tooltip
              title={
                <StyledPara fontSize={"large"}>Scroll to previous</StyledPara>
              }
            >
              <StyledArrowUp fontSize={"large"}></StyledArrowUp>
            </Tooltip>
          </StyledIconButton>
          <StyledIconButton
            onClick={handleArrowDown}
            id={"stickyNavigationArrow"}
            style={{
              position: "fixed",
              bottom: 0,
              alignSelf: "center",
              width: "100vw",
            }}
          >
            <Tooltip
              title={<StyledPara fontSize={"large"}>Scroll to next</StyledPara>}
            >
              <StyledArrowDown fontSize={"large"}></StyledArrowDown>
            </Tooltip>
          </StyledIconButton>

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
  height:100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const ContentWrapper = styled.div`
  ${spacing}
  ${palette}
  height:100vh;
  width: 100vw;
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
  width: 100vw;
`;

export default Home;
