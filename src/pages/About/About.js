import React, { forwardRef } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { StyledPara, StyledH1 } from "../../shared/StyledTypography";
import { ImageWrapper, StyledBox } from "../../shared/ContentWrapper";

const About = forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <StyledBox p={20}>
        <StyledText color={"white"} pt={10}>
          About me
        </StyledText>
      </StyledBox>
      {/* <StyledH1 pt={20}>About me </StyledH1> */}
      {/* <ImageWrapper src={"/images/Aboutme.png"} alt="About me"></ImageWrapper> */}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  ${spacing}
  ${palette}
  background: url("/images/Aboutme.png") no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
`;
const StyledText = styled.h1`
  ${spacing}
  ${palette}
  ${typography}
  font-family: "Fira Sans"
`;
export default About;
