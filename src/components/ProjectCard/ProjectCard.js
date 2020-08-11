import React, { Fragment } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { Icon, SvgIcon, TextField } from "@material-ui/core";
import { StyledSpan, StyledH1 } from "../../shared/StyledTypography";
import {
  StyledBox,
  ImageWrapper,
  StyledTextField,
} from "../../shared/ContentWrapper";
import media from "styled-media-query";

const ProjectCard = (props) => {
  const isNotDesktop = window.innerHeight < 1080;
  const cardwrapper = document.getElementById("CardWrapper");
  return (
    <CardWrapper id="CardWrapper" m={"2vw"}>
      <StyledBox
        id="TitleComponent"
        flexDirection={"column"}
        pl={"1vw"}
        pt={"1vw"}
      >
        <StyledSpan style={{ fontSize: "1vw", fontWeight: "200" }}>
          {props.item.label}
        </StyledSpan>
        <StyledSpan style={{ fontSize: "2.5vw" }}>
          {props.item.title}
        </StyledSpan>
        <StyledBox id={"Body content"}>
          <StyledTextFieldMedia
            variant="standard"
            disabled
            multiline
            fullWidth
            InputProps={{ style: { fontSize: "1vw" } }}
            rows={5}
            value={props.item.description}
          ></StyledTextFieldMedia>
        </StyledBox>
        <StyledBox id={"footer-content"} color={"fontblue"} fontSize={"1vw"}>
          {props.item.techUsed.map((tech, key) => (
            <StyledSpan key={key} pl={2}>
              {tech}
            </StyledSpan>
          ))}
        </StyledBox>
      </StyledBox>
      <StyledBox>
        <StyledImage flex={2} src={props.item.imgLogo}></StyledImage>
      </StyledBox>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
    ${palette}
    ${spacing}
    ${typography}
    display:flex; 
    flex-direction: row;
    justify-content:space-evenly;
    border: 2px solid black;
    border-radius: 5px;
    
    /* align-items:center; */
    /* margin-left:auto; */
    background-color: white;
    ${media.greaterThan("large")`
        /* screen width is greater than 1170px (large) */
        min-width:500px;
        min-height:300px;
        max-height:300px;
        
  `};
    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        min-width:200px;
        max-width:250px;
        min-height:115px;
        max-height:115px;
        border-radius: 3px;
    `};
    ${media.between("medium", "large")`
        /* screen width is between 768px (medium) and 1170px (large) */
        min-width:250px;
        max-width:350px;
        min-height:125px;
        max-height:225px;
        /* width: 40%; */
    `};
`;
const StyledImage = styled.img`
    object-fit:cover;
    ${palette}
    ${spacing}
    ${typography}
    ${media.greaterThan("large")`
        /* screen width is greater than 1170px (large) */
        min-width:150px;
        min-height:150px;
        max-height:150px;
        
    `};
    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        min-width:50px;
        max-width:50px;
        min-height:50px;
        max-height:50px;
    `};
    ${media.between("medium", "large")`
        /* screen width is between 768px (medium) and 1170px (large) */
        min-width:50px;
        max-width:100px;
        min-height:100px;
        max-height:100px;
    `};
`;
const StyledTextFieldMedia = styled(TextField)`
  ${palette}
  ${spacing}
  ${typography}
    
  .MuiInputBase-input{
    font-size:"1vw";
    color: black;
  }
  .MuiFormLabel-root.Mui-disabled{
    color: black;
  }
  .MuiFilledInput-underline:after {
    border-color: white;
  }

  ${media.greaterThan("large")`
        /* screen width is greater than 1170px (large) */
        min-width:150px;
        min-height:150px;
        max-height:150px;
        
  `};
    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        min-width:100px;
        min-height:50px;
        
        
    `};
    ${media.between("medium", "large")`
        /* screen width is between 768px (medium) and 1170px (large) */
        min-width:50px;
        max-width:100px;
        min-height:10px;
        max-height:100px;
        /* width: 40%; */
    `};
`;

export default ProjectCard;
