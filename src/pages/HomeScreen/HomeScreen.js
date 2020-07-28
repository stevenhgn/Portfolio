import React, { forwardRef } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { StyledH1 } from "../../shared/StyledTypography";
import { ImageWrapper } from "../../shared/ContentWrapper";

const HomeScreen = forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <MainPageText color={"white"} fontSize={"80px"}>
        a portfolio
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
  background: url("/images/Background.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: cover;
`;
const MainPageText = styled.h1`
  ${spacing}
  ${palette}
  ${typography}
  font-weight:100;
  position: absolute;
  top: 50%;
  left: 30%;
`;

export default HomeScreen;
