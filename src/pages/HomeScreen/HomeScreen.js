import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { StyledH1, StyledSpan } from "../../shared/StyledTypography";
import { ImageWrapper } from "../../shared/ContentWrapper";
import media from "styled-media-query";
import themes from "../../shared/theme";
import { Snackbar } from "@material-ui/core";
import { StyledAlert } from "../../shared/Alert";

const HomeScreen = forwardRef((props, ref) => {
  const [showHelperBox, setShowHelperBox] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (!showHelperBox) setShowHelperBox(true);
    }, 2000);
  }, []);
  const handleClose = () => {
    setShowHelperBox(false);
  };
  return (
    <Wrapper ref={ref}>
      <MainPageTitle color={"lightgrey"} fontSize={"80px"}>
        {/* a portfolio. */}
        Hi, I'm Steven! <br />
        <MainPageUnderTitle color={"grey"}>
          A fullstack developer with a slightly bigger passion for frontend.
        </MainPageUnderTitle>
      </MainPageTitle>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showHelperBox}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <StyledAlert
          onClose={handleClose}
          severity={"info"}
          variant={"filled"}
          // style={{ minWidth: "400px" }}
        >
          Scroll up or down for more content!
        </StyledAlert>
      </Snackbar>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  ${spacing}
  ${palette}
  display:flex;
  /* flex-direction: column; */
  /* flex: 2; */
  height: 100vh;
  width: 100vw;
  /* width: 100vw; */
  background: url("/images/Background_lightCoral.png") no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: cover;
  align-items: center;
`;
const MainPageTitle = styled.h1`
  ${spacing}
  ${palette}
  ${typography}
  font-weight:100;
  /* margin: 0 auto; */
  margin-left:10%;
  ${media.greaterThan("large")`
      /* screen width is greater than 1170px (large) */
      margin-left:25%;
  `};
   ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    `};
    ${media.between("medium", "large")`
    /* screen width is less than 768px (medium) */
        font-size:60px;
    `};
`;
const MainPageUnderTitle = styled.p`
  ${spacing}
  ${palette}
  ${typography}
  color: ${themes.standard.palette.lightCoral};
  font-weight:200;
  margin: 0 auto;
  margin-right:40%;
  ${media.greaterThan("large")`
      /* screen width is greater than 1170px (large) */
      /* margin-left:50%; */
      font-size:3vw;
  `};
  ${media.lessThan("medium")`
  /* screen width is less than 768px (medium) */
    font-size: 6vw;
    margin-left:2%;
  `};
  ${media.between("medium", "large")`
    /* screen width is less than 768px (medium) */
        font-size:5vw;
        
    `};

`;

export default HomeScreen;
