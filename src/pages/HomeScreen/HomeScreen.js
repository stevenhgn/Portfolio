import React, { forwardRef } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { StyledH1, StyledSpan } from "../../shared/StyledTypography";
import { ImageWrapper } from "../../shared/ContentWrapper";
import media from "styled-media-query";
import themes from "../../shared/theme";

const HomeScreen = forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <MainPageTitle color={"lightgrey"} fontSize={"80px"}>
        {/* a portfolio. */}
        Hi, I'm Steven! <br />
        <MainPageUnderTitle color={"grey"}>
          A fullstack developer with a slightly more love to frontend.
        </MainPageUnderTitle>
      </MainPageTitle>
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


`;

export default HomeScreen;
