import React, { forwardRef } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import {
  StyledPara,
  StyledH1,
  StyledSpan,
} from "../../shared/StyledTypography";
import {
  ImageWrapper,
  StyledBox,
  StyledFragment,
} from "../../shared/ContentWrapper";
import AboutCard from "../../components/AboutCard/AboutCard";

const About = forwardRef((props, ref) => {
  const aboutCard = [<AboutCard />, <AboutCard />, <AboutCard />];
  return (
    <Wrapper ref={ref} className={"AboutRoot"}>
      <StyledBox flexDirection={"row"} className={"Title&logo"} pl={20} pt={20}>
        <StyledBox flexWrap={"wrap"}>
          <ImageWrapper
            src={"logo/profile-logo.png"}
            alt={"logo"}
            style={{ height: "100%", width: "100%" }}
          ></ImageWrapper>
        </StyledBox>
        <StyledBox
          className={"AboutTitle"}
          flexDirection={"column"}
          ml={2}
          style={{ alignSelf: "center" }}
        >
          <StyledText color={"white"} fontSize={60} mt={1} mb={1}>
            About me
          </StyledText>
          <StyledSpan
            fontSize={20}
            color={"white"}
            mb={3}
            ml={1}
            style={{ fontWeight: "300" }}
          >
            An active computer science student at UiO with <br /> great
            engagement in innovation and technology.
          </StyledSpan>
        </StyledBox>
      </StyledBox>
      <SkillsCard ml={20} pl={20} color={"white"}>
        {aboutCard}
      </SkillsCard>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  ${spacing}
  ${palette}
  background: url("/images/Aboutme.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  ${spacing}
  ${palette}
  ${typography}
  display: flex;
  flex-direction: column;
  flex:1;
`;
const SkillsCard = styled.div`
  ${spacing}
  ${palette}
  ${typography}
  display: flex;
  flex-direction: column;
  /* flex:1; */
  flex-wrap:wrap;

`;
const StyledText = styled.h1`
  ${spacing}
  ${palette}
  ${typography}
  font-weight: 400;
`;
export default About;
