import React, { forwardRef } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { StyledH1 } from "../../shared/StyledTypography";
import { ImageWrapper } from "../../shared/ContentWrapper";
import media from "styled-media-query";

const HomeScreen = forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <MainPageText color={"lightgrey"} fontSize={"80px"}>
        a portfolio.
      </MainPageText>
      {/* <ImageWrapper
        src={"/images/Background.png"}
        alt="Homescreen"
      ></ImageWrapper> */}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  ${spacing}
  ${palette}
  display:flex;
  flex: 1;
  height: 100vh;
  /* width: 100vw; */
  background: url("/images/Background.png") no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: cover;
  align-items: center;
`;
const MainPageText = styled.h1`
  ${spacing}
  ${palette}
  ${typography}
  font-weight:100;
  margin: 0 auto;
  margin-left:10%;
  ${media.greaterThan("large")`
      /* screen width is greater than 1170px (large) */
      margin-left:25%;
  `};

  /* padding:20%; */
  /* position: absolute;
  top: 50%;
  left: 30%; */
`;

export default HomeScreen;
