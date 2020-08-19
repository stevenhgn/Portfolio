import React, { forwardRef, useRef, useState } from "react";
import styled from "styled-components";
import { spacing, palette } from "@material-ui/system";
import { Toolbar, Tooltip } from "@material-ui/core";
import {
  StyledBox,
  LinkWrapper,
  LinkWrapperDesktop,
  LinkWrapperPhone,
} from "../../shared/ContentWrapper";
import { BrowserRouter as Router } from "react-router-dom";
import About from "../About/About";
import HomeScreen from "../HomeScreen/HomeScreen";
import {
  StyledIconButton,
  StyledArrowUp,
  StyledArrowDown,
} from "../../shared/icons";
import { StyledH1, StyledPara } from "../../shared/StyledTypography";
import Projects from "../Projects/Projects";
import media from "styled-media-query";
import Experiences from "../Experiences/Experiences";
import ContactDialog from "../../dialogs/ContactDialog/ContactDialog";

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
  const expRef = React.createRef();
  const projectsRef = React.createRef();
  var start = 0;
  const [currPage, setCurrPage] = useState(0);
  const [openContact, setOpenContact] = useState(true);
  const initalHeight = window.innerHeight;
  var windowInnerHeight = window.innerHeight;
  const pageList = [homeScreenRef, aboutRef, expRef, projectsRef];
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    const navbar = document.getElementById("stickyNavbar");
    const arrowUp = document.getElementById("stickyNavigationArrow");
    const sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      arrowUp.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
      arrowUp.classList.remove("sticky");
    }
  }

  const handleArrowDown = () => {
    const currPageIndex = Math.round(window.pageYOffset / window.innerHeight);
    if (currPageIndex < pageList.length - 1) {
      scrollToRef(pageList[currPageIndex + 1]);
      setCurrPage(currPageIndex + 1);
    }
  };
  const handleArrowUp = () => {
    const currPageIndex = Math.round(window.pageYOffset / window.innerHeight);
    if (currPageIndex > 0) {
      scrollToRef(pageList[currPageIndex - 1]);
      setCurrPage(currPageIndex - 1);
    }
  };
  const handleOpenDialog = (bool) => {
    setOpenContact(true);
  };
  const handleCloseDialog = () => {
    setOpenContact(false);
  };
  return (
    <HomeWrapper>
      <Router>
        <NavBarSticker id={"stickyNavbar"}>
          <StyledNavbar bgcolor={"black"}>
            <LinkWrapperDesktop
              to={"/"}
              fontSize={"2vw"}
              onClick={() => scrollToRef(homeScreenRef)}
            >
              <StyledBox color={"white"}>Steven Nguyen</StyledBox>
            </LinkWrapperDesktop>
            <HeaderWrapper pr={"2vw"}>
              <LinkWrapperPhone
                to={"/"}
                pl={0}
                ml={0}
                style={{ position: "fixed", left: 10 }}
                pr={"4vw"}
                onClick={() => scrollToRef(homeScreenRef)}
              >
                <StyledBox color={"white"}>Steven Nguyen</StyledBox>
              </LinkWrapperPhone>
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
                to={"/Experience"}
                // fontSize={"2vw"}
                onClick={() => scrollToRef(expRef)}
              >
                <StyledBox color={"white"}>Experience</StyledBox>
              </LinkWrapper>
              <LinkWrapper
                pl={"2vw"}
                to={"/Projects"}
                // fontSize={"2vw"}
                onClick={() => scrollToRef(projectsRef)}
              >
                <StyledBox color={"white"}>Projects</StyledBox>
              </LinkWrapper>
              <LinkWrapper
                pl={"2vw"}
                to={"/Contacts"}
                onClick={handleOpenDialog}
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
          <Experiences ref={expRef} />
          <Projects ref={projectsRef} />
        </ContentWrapper>
      </Router>
      {openContact && <ContactDialog handleCloseDialog={handleCloseDialog} />}
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
  /* flex-grow: grow; */
`;
const StyledNavbar = styled(Toolbar)`
  ${spacing}
  ${palette}
  display: flex;
  flex-direction: row;
`;
const NavBarSticker = styled.div`
  ${spacing}
  ${palette}
  position:fixed;
  top: 0;
  width: 100vw;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    font-size:12px;
    `}
`;

export default Home;
