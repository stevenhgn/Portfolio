import React, { forwardRef } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { ImageWrapper, StyledBox } from "../../shared/ContentWrapper";
const Projects = forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref} className={"ProjectsRoot"}>
      <StyledBox pl={"3vw"} pt={"10vw"}>
        <StyledText color={"white"}>Projects</StyledText>
      </StyledBox>
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
  font-family: "Fira Sans";
`;
export default Projects;
