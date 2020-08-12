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
import ProjectCard from "../../components/ProjectCard/ProjectCard";
const Projects = forwardRef((props, ref) => {
  const projectList = [
    {
      label: "INTERKODEX",
      title: "NRF",
      description:
        "Hos Interkodex har jeg jobbet med flere prosjekter (RENAS, EFO, NRF) hvor jeg har utviklet og forvaltet web løsninger med fokus på .Net, C#, HTML, Angular, JQuery, Typescript, Javascript, Microsoft SQL Server, Microsoft Team Foundation Server og Azure Dev Ops Server.",
      titleColor: "#4D96C5",
      techUsed: ["#angular", "#.net", "#azure-devops", "#kanban"],
      imgLogo: "/logo/NRF-small-logo.png",
      date: "Mars 2019 - present",
      downloadAttest: null,
      index: 0,
    },
    {
      label: "INTERKODEX",
      title: "EFO",
      description:
        "Prosjektet for Visma Consulting AS gikk ut på å lage et system for syntetisering av testdata.Målet var å lage en løsning som tillater brukere å enkelt generere testdata som ikke gjør noen kompromisser på personvern og gjør at man får testet løsninger uten å måtte forholde seg til data som inneholder personsensitiv informasjon.Løsningen består av tre deler, en generator for identiteter, en backend for en generisk håndtering av generering av data, og en frontend - applikasjon lar brukere se og opprette personer for bruk i testmiljøer.",
      titleColor: "contentRed",
      techUsed: ["#react", "#.net", "#azure-devops", "#scrum"],
      imgLogo: "/logo/EFO-small-logo.png",
      date: "Mars 2019 - present",
      downloadAttest: "",
      index: 1,
    },
    {
      label: "INTERKODEX",
      title: "RENAS",
      underTitle: "Avfallsdb",
      description: "Prosjektet for Interkodex Consulting AS gikk ut på........",
      titleColor: "contentRed",
      techUsed: ["#react", "#.net", "#azure-devops", "#scrum"],
      imgLogo: "/logo/RENAS-logo.png",
      date: "Jan 2019 - present",
      downloadAttest: "",
      index: 2,
    },
    {
      label: "INTERKODEX",
      title: "RENAS",
      underTitle: "Minside",
      description: "Prosjektet for Interkodex Consulting AS gikk ut på........",
      titleColor: "contentRed",
      techUsed: ["#react", "#.net", "#azure-devops", "#scrum"],
      imgLogo: "/logo/RENAS-logo.png",
      date: "Jan 2019 - present",
      downloadAttest: "",
      index: 3,
    },
    {
      label: "VISMA",
      title: "VISMA SYNTH",
      description: "Prosjektet for Interkodex Consulting AS gikk ut på........",
      titleColor: "contentRed",
      techUsed: ["#react", "#.net", "#azure-devops", "#scrum"],
      imgLogo: "/logo/Visma-logo.png",
      date: "Summer 2020",
      downloadAttest: "",
      index: 4,
    },
    {
      label: "PERSONAL PROJECT",
      title: "MUNCHIES",
      description: "My first project with react as frontend......",
      titleColor: "contentRed",
      techUsed: ["#react", "#mongodb", "#heroku"],
      imgLogo: "/logo/Munchies-small-logo.png",
      date: "April 2020 - present",
      downloadAttest: "",
      index: 5,
    },
    {
      label: "PERSONAL PROJECT",
      title: "PORTFOLIO",
      description:
        "Personal project to create a interactive and creative portfolio....",
      titleColor: "contentRed",
      techUsed: ["#react", "#zeitnow", "vercel"],
      imgLogo: "/logo/Portfolio-small-logo.png",
      date: "July 2020 - present",
      downloadAttest: "",
      index: 6,
    },
  ];
  const isNotDesktop = window.innerWidth < 768;
  const [page, setPage] = useState(1);
  const cardPerPage = isNotDesktop ? 3 : 4;
  const sum_page = Math.ceil(projectList.length / cardPerPage);
  const handleOnArrowBack = () => {
    if (page > 0) setPage(page - 1);
    if (page - 1 === -1) setPage(sum_page - 1);
  };
  const handleOnArrowForward = () => {
    if (page < sum_page - 1) setPage(page + 1);
    else if (page + 1 === sum_page) setPage(0);
  };

  return (
    <Wrapper ref={ref} className={"ProjectsRoot"}>
      <StyledBox pt={isNotDesktop ? 8 : 15} justifyContent={"center"}>
        <StyledText color={"greyBlueTint"}>PROJECTS</StyledText>
      </StyledBox>
      <ContentWrapper id={"cardContentWrapper"} pt={1}>
        <StyledIconButtonBack onClick={handleOnArrowBack}>
          <Tooltip title={<StyledPara fontSize={"large"}>Previous</StyledPara>}>
            <StyledArrowBack />
          </Tooltip>
        </StyledIconButtonBack>
        <StyledBox
          style={{
            width: "100vw",
            flexWrap: "wrap",
            // flexDirection: isNotDesktop ? "row" : "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {projectList
            .slice(page * cardPerPage, page * cardPerPage + cardPerPage)
            .map((item, key) => (
              <ProjectCard item={item} key={key} />
            ))}
        </StyledBox>

        <StyledIconButtonForward
          onClick={handleOnArrowForward}
          className={"ButtonForward"}
        >
          <Tooltip title={<StyledPara fontSize={"large"}>Next</StyledPara>}>
            <StyledArrowForward />
          </Tooltip>
        </StyledIconButtonForward>
      </ContentWrapper>
      {/* <ImageWrapper src={"/images/Aboutme.png"} alt="About me"></ImageWrapper> */}
    </Wrapper>
  );
});
const Wrapper = styled.div`
  ${spacing}
  ${palette}
  background: url("/images/Projects.png") no-repeat;
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
`;
const StyledText = styled.h1`
  ${spacing}
  ${palette}
  ${typography}
  font-family: "Fira Sans";
`;

const ContentWrapper = styled.div`
  ${spacing}
  ${palette}
  ${typography}
  display: flex;
  flex-direction: row;
  flex: 1 ;
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
export default Projects;
