import React, { forwardRef, Fragment } from "react";
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
import School from "@material-ui/icons/School";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import Flight from "@material-ui/icons/Flight";
const About = forwardRef((props, ref) => {
  const aboutCard = [
    <ContentWrapper flex={1}>
      <AboutCard
        component={School}
        color={"lightCoral"}
        title={"Master student"}
        key={0}
      />
      <AboutCard
        component={BusinessCenter}
        color={"lightCoral"}
        title={"Part-time developer"}
        key={1}
      />
    </ContentWrapper>,
    <ContentWrapper flex={1}>
      <AboutCard
        component={FitnessCenter}
        key={2}
        color={"purple"}
        title={"Powerlifter"}
      />
      <AboutCard component={Flight} color={"purple"} title={"Travel"} key={3} />
    </ContentWrapper>,
    <ContentWrapper flex={1}></ContentWrapper>,
  ];
  return (
    <Wrapper ref={ref} className={"AboutRoot"} pl={"4vw"}>
      <StyledBox flexDirection={"row"} className={"Title&logo"} pl={5} pt={20}>
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
          <StyledText color={"white"} fontSize={"6vw"} mt={1} mb={1}>
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
      <StyledBox flexDirection={"row"} flexWrap={"wrap"}>
        <SkillsCard
          ml={5}
          pl={5}
          color={"white"}
          className={"About-card"}
          style={{ marginRight: "auto" }}
        >
          {aboutCard}
        </SkillsCard>
        <StyledBox flex={2}>
          <ImageWrapper
            src={"images/Aboutme_activities.png"}
            style={{ width: "100%", height: "100%" }}
          ></ImageWrapper>
        </StyledBox>
      </StyledBox>
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
  flex:2;
  flex-wrap:wrap;

`;
const StyledText = styled.h1`
  ${spacing}
  ${palette}
  ${typography}
  font-weight: 400;
`;
export default About;
