import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import {
  ImageWrapper,
  StyledBox,
  StyledTextField,
} from "../../shared/ContentWrapper";
import { IconButton, Tooltip } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import NavigateNext from "@material-ui/icons/NavigateNext";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import { StyledPara, StyledSpan } from "../../shared/StyledTypography";
import { StyledIconButton, StyledGetAppIcon } from "../../shared/icons";
import themes from "../../shared/theme";
const Skills = forwardRef((props, ref) => {
  const skillsList = [
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
      downloadAttest: "",
      index: 1,
    },
  ];

  const handleOnArrowBack = () => {
    if (selectedSkills > 0) setSelectedSkills(selectedSkills - 1);
    if (selectedSkills - 1 === -1) setSelectedSkills(skillsList.length - 1);
  };
  const handleOnArrowForward = () => {
    if (selectedSkills < skillsList.length - 1)
      setSelectedSkills(selectedSkills + 1);
    else if (selectedSkills + 1 === skillsList.length) {
      setSelectedSkills(0);
    }
  };
  const [selectedSkills, setSelectedSkills] = useState(0);

  const styles = (theme) => ({
    multilineColor: {
      color: "white",
    },
  });
  return (
    <Wrapper ref={ref} className={"SkillsRoot"}>
      <StyledBox pt={5} pl={8}>
        <StyledText color={"white"} pt={10} fontSize={60}>
          Skills {"&"} Experience
        </StyledText>
      </StyledBox>
      <ContentWrapper id={"cardContentWrapper"} p={10} pt={1}>
        <StyledIconButtonBack onClick={handleOnArrowBack}>
          <Tooltip title={<StyledPara fontSize={"large"}>Previous</StyledPara>}>
            <StyledArrowBack fontSize={"large"} />
          </Tooltip>
        </StyledIconButtonBack>

        <SkillsCard pl={20}>
          <StyledBox alignItems={"center"} flexWrap={"wrap"} flex={1} mb={0}>
            <ImageWrapper
              src={skillsList[selectedSkills].imgLogo}
              alt={"logo"}
            ></ImageWrapper>
            <StyledBox flexDirection={"column"} ml={2} justifyItems={"center"}>
              <StyledText
                color={skillsList[selectedSkills].nameColor}
                fontSize={60}
                mt={1}
                mb={1}
              >
                {skillsList[selectedSkills].name}
              </StyledText>
              <StyledSpan
                fontSize={20}
                color={"white"}
                mb={3}
                ml={1}
                style={{ float: "left" }}
              >
                {skillsList[selectedSkills].date}
              </StyledSpan>
            </StyledBox>
            <StyledBox alignItems={"center"} mb={4}>
              <Tooltip
                title={<StyledSpan fontSize={15}>Last ned attest</StyledSpan>}
              >
                <StyledIconButton>
                  <StyledGetAppIcon fontSize={"large"}></StyledGetAppIcon>
                </StyledIconButton>
              </Tooltip>
            </StyledBox>
          </StyledBox>

          <StyledBox flexDirection={"row"} flex={2} color={"white"}>
            <StyledBox flex={2} color={"white"} pr={4}>
              <StyledTextField
                type="input"
                label="Description"
                variant="standard"
                multiline
                fullWidth
                InputProps={{ style: { fontSize: 25 } }}
                disabled
                value={skillsList[selectedSkills].description}
              ></StyledTextField>
            </StyledBox>
            <StyledBox
              flex={2}
              flexDirection={"column"}
              style={{ alignItems: "center" }}
            >
              {skillsList[selectedSkills].techUsed.map((item, key) => (
                <StyledPara fontSize={30} mb={5} mt={5} key={key}>
                  {item}
                </StyledPara>
              ))}
            </StyledBox>
          </StyledBox>
        </SkillsCard>
        <StyledIconButtonForward onClick={handleOnArrowForward} flex={1}>
          <Tooltip title={<StyledPara fontSize={"large"}>Next</StyledPara>}>
            <StyledArrowForward fontSize={"large"} />
          </Tooltip>
        </StyledIconButtonForward>
      </ContentWrapper>
    </Wrapper>
  );
});
const Wrapper = styled.div`
  ${spacing}
  ${palette}
  background: url("/images/Skills_expe.png") no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  object-fit: cover;
  /* width: 100vw; */
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
  flex-direction: column;
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
  .MuiSvgIcon-fontSizeLarge {
    font-size: 6rem;
    &:hover {
      color: ${themes.standard.palette.primary};
    }
  }
`;
const StyledIconButtonForward = styled(IconButton)`
  ${spacing}
  ${palette}
  ${typography}
  float: right;
  position: absolute;
  right:0;
  .MuiSvgIcon-fontSizeLarge {
    font-size: 6rem;
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
export default Skills;
