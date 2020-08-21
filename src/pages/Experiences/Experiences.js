import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import media from "styled-media-query";
import {
  ImageWrapper,
  StyledBox,
  StyledTextField,
  StyledTextFieldMediaPhone,
} from "../../shared/ContentWrapper";
import { IconButton, Tooltip, Box } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import NavigateNext from "@material-ui/icons/NavigateNext";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import { StyledPara, StyledSpan } from "../../shared/StyledTypography";
import { StyledIconButton, StyledGetAppIcon } from "../../shared/icons";
import themes from "../../shared/theme";
const Experiences = forwardRef((props, ref) => {
  const experienceList = [
    {
      name: "Interkodex",
      description:
        "Hos Interkodex har jeg jobbet med flere prosjekter (RENAS, EFO, NRF) hvor jeg har utviklet og forvaltet web løsninger hvor med fokus på .Net, C#, HTML, Angular, JQuery, Typescript, Javascript, Microsoft SQL Server, Microsoft Team Foundation Server og Azure Dev Ops Server.",
      nameColor: "#4D96C5",
      techUsed: ["Angular", ".NET", "Azure devops", "Kanban"],
      imgLogo: "/logo/ikx-logo.png",
      date: "2019 - present",
      downloadAttest: null,
      index: 0,
    },
    {
      name: "Visma",
      description:
        "Prosjektet for Visma Consulting AS gikk ut på å lage et system for syntetisering av testdata.Målet var å lage en løsning som tillater brukere å enkelt generere testdata som ikke gjør noen kompromisser på personvern og gjør at man får testet løsninger uten å måtte forholde seg til data som inneholder personsensitiv informasjon.Løsningen består av tre deler, en generator for identiteter, en backend for en generisk håndtering av generering av data, og en frontend - applikasjon lar brukere se og opprette personer for bruk i testmiljøer.",
      nameColor: "contentRed",
      techUsed: ["React", ".NET", "Azure devops", "Scrum"],
      imgLogo: "/logo/Visma-logo.png",
      date: "Summer 2020",
      downloadAttest: "Attest_Steven.pdf",
      index: 1,
    },
  ];

  const handleOnArrowBack = () => {
    if (selectedExpe > 0) setSelectedExperiences(selectedExpe - 1);
    if (selectedExpe - 1 === -1)
      setSelectedExperiences(experienceList.length - 1);
  };
  const handleOnArrowForward = () => {
    if (selectedExpe < experienceList.length - 1)
      setSelectedExperiences(selectedExpe + 1);
    else if (selectedExpe + 1 === experienceList.length) {
      setSelectedExperiences(0);
    }
  };
  const [selectedExpe, setSelectedExperiences] = useState(0);

  const styles = (theme) => ({
    multilineColor: {
      color: "white",
    },
  });
  const isNotDesktop = window.innerWidth < 768;
  return (
    <Wrapper ref={ref} className={"SkillsRoot"}>
      <StyledBox
        pt={5}
        pl={"3vw"}
        justifyContent={isNotDesktop ? "center" : null}
      >
        <StyledText
          color={"white"}
          fontSize={isNotDesktop ? "6vw" : "4vw"}
          pt={"4vw"}
          pl={"2vw"}
        >
          Experience
        </StyledText>
      </StyledBox>
      <ContentWrapper id={"cardContentWrapper"} pt={1}>
        <StyledIconButtonBack onClick={handleOnArrowBack}>
          <Tooltip title={<StyledPara fontSize={"large"}>Previous</StyledPara>}>
            <StyledArrowBack />
          </Tooltip>
        </StyledIconButtonBack>

        <SkillsCard
          className={"SkillCard-content"}
          flexWrap={"wrap"}
          pl={"4vw"}
        >
          <StyledBox flexDirection={"column"} flex={4} color={"white"}>
            <StyledBox alignItems={"center"} flexWrap={"wrap"} mb={"2vw"}>
              <ImageWrapper
                src={experienceList[selectedExpe].imgLogo}
                alt={"logo"}
                // style={{ height: "100%", width: "100%" }}
              ></ImageWrapper>
              <StyledBox
                flexDirection={"column"}
                ml={2}
                justifyItems={"center"}
              >
                <StyledText
                  color={experienceList[selectedExpe].nameColor}
                  fontSize={"4vw"}
                  mt={1}
                  mb={1}
                >
                  {experienceList[selectedExpe].name}
                </StyledText>
                <StyledSpan
                  fontSize={"1.5vw"}
                  color={"white"}
                  mb={3}
                  ml={1}
                  style={{ float: "left" }}
                >
                  {experienceList[selectedExpe].date}
                </StyledSpan>
              </StyledBox>
              {experienceList[selectedExpe].downloadAttest ? (
                <StyledBox alignItems={"center"} flexDirection={"column"}>
                  <a href="Attest_Steven.pdf" download>
                    <StyledIconButton>
                      <StyledGetAppIcon />
                    </StyledIconButton>
                  </a>
                  <StyledSpan fontSize={isNotDesktop ? "2vw" : "1vw"}>
                    Last ned attest
                  </StyledSpan>
                </StyledBox>
              ) : null}
            </StyledBox>

            <StyledBox flex={1} color={"white"} pl={"auto"} mb={"5vw"}>
              <StyledTextFieldMediaPhone
                type="input"
                // label="Description"
                variant="filled"
                multiline
                fullWidth
                rows={10}
                // InputProps={{ style: { fontSize: "2vw"} }}
                disabled
                value={experienceList[selectedExpe].description}
              ></StyledTextFieldMediaPhone>
            </StyledBox>
            <StyledMediaBoxPhone
              flex={2}
              flexDirection={"column"}
              style={{
                alignItems: "center",
                alignSelf: "center",
                color: "white",
              }}
            >
              {experienceList[selectedExpe].techUsed.map((item, key) => (
                <StyledPara fontSize={"4vw"} key={key}>
                  {item}
                </StyledPara>
              ))}
            </StyledMediaBoxPhone>
          </StyledBox>
          <StyledMediaBoxDesktop
            flex={2}
            flexDirection={"column"}
            style={{
              alignItems: "center",
              alignSelf: "center",
              color: "white",
            }}
          >
            {experienceList[selectedExpe].techUsed.map((item, key) => (
              <StyledPara fontSize={"2.5vw"} key={key}>
                {item}
              </StyledPara>
            ))}
          </StyledMediaBoxDesktop>
        </SkillsCard>
        <StyledIconButtonForward
          onClick={handleOnArrowForward}
          className={"ButtonForward"}
        >
          <Tooltip title={<StyledPara fontSize={"large"}>Next</StyledPara>}>
            <StyledArrowForward />
          </Tooltip>
        </StyledIconButtonForward>
      </ContentWrapper>
    </Wrapper>
  );
});
const Wrapper = styled.div`
  ${spacing}
  ${palette}
  background: url("/images/Skills_expe_lightCoral.png") no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  /* width: 100vw; */
`;

const StyledMediaBoxDesktop = styled(Box)`
${spacing}
  ${palette}
  ${typography}
  /* flex-wrap: wrap; */
    display:none;
    flex-direction: 'row';
  ${media.greaterThan("large")`
  /* screen width is greater than 1170px (large) */
    display: flex;
  `}
    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    height: 20%;
    display:none;
    `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    height: 40%;
    display:none;
    /* width: 40%; */
    `}
`;
const StyledMediaBoxPhone = styled(Box)`
${spacing}
  ${palette}
  ${typography}
  /* flex-wrap: wrap; */
  display:none;
  /* display: flex; */
  flex-direction: 'row';
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    height: 20%;
    display:flex;
    `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    height: 40%;
    display:flex;
    /* width: 40%; */
    `}
    ${media.greaterThan("large")`
  /* screen width is greater than 1170px (large) */
    display: none;
  `}
 
`;
const StyledMediaDescriptionBoxPhone = styled(Box)`
${spacing}
  ${palette}
  ${typography}
  /* flex-wrap: wrap; */
  display:none;
  /* display: flex; */
  flex-direction: 'row';
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    height: 20%;
    display:flex;
    `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    height: 40%;
    display:flex;
    /* width: 40%; */
    `}
    ${media.greaterThan("large")`
  /* screen width is greater than 1170px (large) */
    display: none;
  `}
 
`;

const ContentWrapper = styled.div`
  ${spacing}
  ${palette}
  ${typography}
  display: flex;
  flex-direction: row;
  flex: 1 ;
`;
const SkillsCard = styled.div`
  ${spacing}
  ${palette}
  ${typography}
  display: flex;
  flex-direction: row;
  justify-content:center;
  flex: 2;
`;
const StyledText = styled.h1`
  ${spacing}
  ${palette}
  ${typography}
  font-weight: 500;
  font-family: "Fira Sans";
`;

const StyledIconButtonBack = styled(IconButton)`
  ${spacing}
  ${palette}
  ${typography}
  position: absolute;
  left:0;
  float: left;
  .MuiSvgIcon-root {
    font-size: 5vw;
    &:hover {
      color: ${themes.standard.palette.primary};
    }
  }
  .MuiSvgIcon-fontSizeLarge {
  }
`;
const StyledIconButtonForward = styled(IconButton)`
  ${spacing}
  ${palette}
  ${typography}
  float: right;
  position: absolute;
  right:0;
  .MuiSvgIcon-root {
    font-size: 5vw;
    &:hover {
      color: ${themes.standard.palette.primary};
    }
  }
  .MuiSvgIcon-fontSizeLarge {
    &:hover {
      color: ${themes.standard.palette.primary};
    }
  }
`;
const StyledArrowBack = styled(NavigateBefore)`
  ${spacing}
  ${palette}
  ${typography}
  color:white;
`;
const StyledArrowForward = styled(NavigateNext)`
  ${spacing}
  ${palette}
  ${typography}
  color:white;

`;
export default Experiences;
