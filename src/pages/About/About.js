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
import media from "styled-media-query";
const About = forwardRef((props, ref) => {
  const isNotDesktop = window.innerWidth < 768;
  const aboutCard = [
    <ContentWrapper flex={1} key={0}>
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
    <ContentWrapper flex={1} key={1}>
      <AboutCard
        component={FitnessCenter}
        key={2}
        color={"purple"}
        title={"Powerlifter"}
      />
      <AboutCard component={Flight} color={"purple"} title={"Travel"} key={3} />
    </ContentWrapper>,
    <ContentWrapper flex={1} key={2}></ContentWrapper>,
  ];
  return (
    <Wrapper ref={ref} className={"AboutRoot"} id={"Aboutme"}>
      <StyledBox
        flexDirection={"row"}
        className={"Title&logo"}
        pt={20}
        pl={"5vw"}
      >
        <StyledBox flexWrap={"wrap"}>
          <StyledImage src={"logo/profile-logo.png"} alt={"logo"}></StyledImage>
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
            fontSize={"2vw"}
            color={"white"}
            mb={3}
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
          pl={"5vw"}
          color={"white"}
          className={"About-card"}
          style={{ marginRight: "auto" }}
        >
          {aboutCard}
        </SkillsCard>
        <StyledBox flex={2} flexDirection={"column"} alignItems={"center"}>
          <StyledSpan color={"darkGrey"} fontSize={"3vw"} mb={"1vw"}>
            Free time activities
          </StyledSpan>
          <StyledImage
            src={"images/Aboutme_activities_lightCoral.png"}
            style={{ width: isNotDesktop ? "100%" : "60%" }}
          ></StyledImage>
        </StyledBox>
      </StyledBox>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  ${spacing}
  ${palette}
  background: url("/images/Aboutme_lightCoral.png") no-repeat;
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

const StyledImage = styled.img`
    /* object-fit:; */
    ${palette}
    ${spacing}
    ${typography}
    ${media.greaterThan("large")`
      /* screen width is greater than 1170px (large) */
      min-width:150px;
      max-width:500px;
      min-height:100px;
      max-height:500px;
        
    `};
    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
      min-width:100px;
      max-width:150px;
      min-height:100px;
      max-height:150px;
    `};
    ${media.between("medium", "large")`
      /* screen width is between 768px (medium) and 1170px (large) */
      min-width:100px;
      max-width:200px;
      min-height:100px;
      max-height:200px;
    `};
`;
export default About;
