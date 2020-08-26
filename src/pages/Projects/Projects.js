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
import { IconButton, Tooltip, Box, Button } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import NavigateNext from "@material-ui/icons/NavigateNext";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import { StyledPara, StyledSpan } from "../../shared/StyledTypography";
import { StyledIconButton, StyledGetAppIcon } from "../../shared/icons";
import themes from "../../shared/theme";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectCardV2 from "../../components/ProjectCardV2/ProjectCardV2";
const Projects = forwardRef((props, ref) => {
  const projectList = [
    {
      label: "VISMA",
      title: "VISMA SYNTH",
      description:"Prosjektet for Visma Consulting AS gikk ut på å lage et system for syntetisering av testdata. " + 
        "Målet var å lage en løsning som tillater brukere å enkelt generere testdata som ikke gjør noen kompromisser på personvern og gjør at man får testet løsninger uten å måtte forholde seg til data som inneholder person-sensitiv informasjon. " + 
        "Løsningen består av tre deler, en generator for identiteter, en backend for en generisk håndtering av generering av data, og en frontend - applikasjon lar brukere se og opprette personer for bruk i testmiljøer. " 
        + " Med tidligere erfaring innen Frontend har jeg gjennom prosjektet fått rollen som frontend-leder med ansvaret på å passe på at oppgavene innenfor frontend blir gjort i henhold til planen, hjelpe andre i teamet med tips og løsningsforslag, og sist men ikke minst bidra til som utvikler.",
      titleColor: "contentRed",
      techUsed: [
        "#react",
        "#.net",
        "#azure-devops",
        "#scrum",
        "#figma",
        "#restapi",
        "#postman",
      ],
      imgLogo: "/logo/Visma-logo.png",
      alterImageExpand: "/alterLogo/Visma_expand.png",
      alterImageSmall: "/alterLogo/Visma_small.png",
      date: "Summer 2020",
      downloadAttest: "",
      index: 4,
    },
    {
      label: "INTERKODEX",
      title: "NRF",
      fullTitle: "Norske Rørgrossisters Forening",
      description:
        "NRF Databasen gir rørleggeren mulighet for å finne relevante produkter til jobben, søke produktdata, dokumenter, fotografere og notere underveis for deretter sender dokumentasjon direkte til sin kunde når oppdrager er utført. Prosjektet har gårt ut på å lage en helt ny løsning, samt å jobbe med Git i Azure. ",
      titleColor: "#4D96C5",
      techUsed: [
        "#angular",
        "#typescript",
        "#.net-core",
        "#ASP.NET-MVC",
        "#azure-devops",
        "#bootstrap",
        "#microsoft-sql-server",
        "#entity-framework-core",
        "#teams",
      ],
      imgLogo: "/logo/NRF-small-logo.png",
      alterImageExpand: "/alterLogo/NRF_expand.png",
      alterImageSmall: "/alterLogo/NRF_small.png",
      date: "Mars 2019 - present",
      downloadAttest: null,
      index: 0,
    },
    {
      label: "INTERKODEX",
      title: "EFO",
      fullTitle: "Elektroforeningen",
      description:
        "Løsningen er en felles database hvor produsenter og importører kan legge inn og ajourføre produktdata, og grossistene har en produktdatabase for å hente ut produktdata.",
      titleColor: "contentRed",
      techUsed: [
        "#angular",
        "#typescript",
        "#.net-core",
        "#ASP.NET-MVC",
        "#azure-devops",
        "#bootstrap",
        "#microsoft-sql-server",
        "#entity-framework-core",
        "#teams",
      ],
      imgLogo: "/logo/EFO-small-logo.png",
      alterImageExpand: "/alterLogo/EFO_expand.png",
      alterImageSmall: "/alterLogo/EFO_small.png",
      date: "Mars 2019 - present",
      downloadAttest: "",
      index: 1,
    },
    {
      label: "INTERKODEX",
      title: "RENAS",
      underTitle: "Avfallsdb",
      description:
        "RENAS er Norges ledende EE-returselskap. Løsningen er en avfallsdatabase hvor kunden kan håndtere leveranser, eksport og håndtering av avfall. Den har eksistert i over en 5-6 årsperiode. Kunden har blant annet hatt et ønske om å modernisere løsningen, og en del av jobben var å hjelpe dem med dette ved å blant annet skrive om gammel jQuery code over til Angular.",
      titleColor: "contentRed",
      techUsed: [
        "#angular",
        "#typescript",
        "#.net-framework",
        "#azure-devops",
        "#bootstrap",
        "#microsoft-sql-server",
        "#entity-framework-core",
        "#teams",
      ],
      imgLogo: "/logo/RENAS-logo.png",
      alterImageExpand: "/alterLogo/RENAS_expand.png",
      alterImageSmall: "/alterLogo/RENAS_small.png",
      date: "Jan 2019 - present",
      downloadAttest: "",
      index: 2,
    },
    {
      label: "INTERKODEX",
      title: "RENAS",
      underTitle: "Minside",
      description:
        "RENAS minside er administrasjonsside for ansatte og medlemmene. Løsningen inneholder blant annet statistikk, email og faktureringsmuligheter. Kunden hadde også det samme problemet om å få modernisert løsning. Min rolle og ansvar som utvikler her er samme som i RENAS-avfallsdb, og det var å skrive om gammel jQuery kode til Angular.",
      titleColor: "contentRed",
      techUsed: [
        "#angular",
        "#typescript",
        "#.net-framework",
        "#azure-devops",
        "#bootstrap",
        "#microsoft-sql-server",
        "#entity-framework-core",
        "#jquery",
        "#ASP.NET-MVC",
        "#teams",
      ],
      imgLogo: "/logo/RENAS-logo.png",
      alterImageExpand: "/alterLogo/RENAS_expand.png",
      alterImageSmall: "/alterLogo/RENAS_small.png",

      date: "Jan 2019 - present",
      downloadAttest: "",
      index: 3,
    },

    {
      label: "PERSONAL PROJECT",
      title: "MUNCHIES",
      description: "My first project with react as frontend......",
      titleColor: "contentRed",
      techUsed: [
        "#reactjs",
        "#mongodb",
        "#heroku",
        "#figma",
        "#javascript",
        "#nodejs",
        "#restapi",
      ],
      imgLogo: "/logo/Munchies-small-logo.png",
      alterImageExpand: "/alterLogo/MUNCHIES_expand.png",
      alterImageSmall: "/alterLogo/MUNCHIES_small.png",
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
      techUsed: [
        "#reactjs",
        "#zeitnow",
        "#vercel",
        "#figma",
        "#javascript",
        "#nodejs",
        "#restapi",
      ],
      imgLogo: "/logo/Portfolio-small-logo.png",
      alterImageExpand: "/alterLogo/PORTFOLIO_expand.png",
      alterImageSmall: "/alterLogo/PORTFOLIO_small.png",
      date: "July 2020 - present",
      downloadAttest: "",
      index: 6,
    },
  ];
  // TODO decide which mode to use normal cards or projectCardV2.
  const isNotDesktop = window.innerWidth < 768;
  const [page, setPage] = useState(0);

  const [cardPerPage, setCardPerPage] = useState(3);
  const sum_page = Math.ceil(projectList.length / cardPerPage);
  const handleOnArrowBack = () => {
    if (page > 0) setPage(page - 1);
    if (page - 1 === -1) setPage(sum_page - 1);
  };
  const handleOnChangeCard = () => {
    if (isNotDesktop) setCardPerPage(3);
    // on toggle show 3 card perpage if on phone
    else setCardPerPage(cardPerPage === 3 ? 4 : 3); // if not on phone toggle between 3 and 4
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
            marginBottom: isNotDesktop ? "auto" : null,
          }}
        >
          {projectList
            .slice(page * cardPerPage, page * cardPerPage + cardPerPage)
            .map((item, key) => (
              <ProjectCardV2 item={item} key={key} />
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
  /* background: url("/images/Project_v2.png") no-repeat; */
  background-color:#252525;

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
