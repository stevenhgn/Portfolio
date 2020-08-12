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
  const isNotDesktop = window.innerHeight < 900;
  const cardwrapper = document.getElementById("CardWrapper");
  return (
    <CardWrapper id="CardWrapper" m={"2vw"}>
      <StyledBox
        id="TitleComponent"
        flexDirection={"column"}
        pl={"1vw"}
        pt={"1vw"}
      >
        <StyledSpan
          style={{
            fontSize: isNotDesktop ? "1.5vw" : "1vw",
            fontWeight: "200",
          }}
        >
          {props.item.label}
        </StyledSpan>
        <StyledSpan style={{ fontSize: isNotDesktop ? "5vw" : "2.5vw" }}>
          {props.item.title}
          {props.item.underTitle ? (
            <StyledSpan
              pl={"0.5vw"}
              style={{
                fontSize: isNotDesktop ? "1.5vw" : "1vw",
              }}
            >
              - {props.item.underTitle}
            </StyledSpan>
          ) : null}
        </StyledSpan>
        <StyledSpan
          color={"purple"}
          style={{
            fontSize: isNotDesktop ? "1vw" : "0.8vw",
          }}
        >
          {props.item.date}
        </StyledSpan>
        <StyledBox id={"Body content"}>
          <StyledTextFieldMedia
            variant="standard"
            disabled
            multiline
            fullWidth
            InputProps={{ style: { fontSize: isNotDesktop ? "2vw" : "0.8vw" } }}
            rows={isNotDesktop ? 10 : 5}
            value={props.item.description}
          ></StyledTextFieldMedia>
        </StyledBox>
        <StyledBox
          id={"footer-content"}
          color={"fontblue"}
          fontSize={isNotDesktop ? "1.5vw" : "1vw"}
          marginTop={"auto"}
          mb={"1.5vw"}
        >
          {props.item.techUsed.map((tech, key) => (
            <StyledSpan key={key} pr={2}>
              {tech}
            </StyledSpan>
          ))}
        </StyledBox>
      </StyledBox>
      <StyledBox>
        <StyledImage src={props.item.imgLogo}></StyledImage>
      </StyledBox>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
    ${palette}
    ${spacing}
    ${typography}
    display:flex; 
    align-self: flex-start;
    flex-direction: row;
    justify-content:space-between;
    border: 2px solid black;
    border-radius: 5px;
    
    /* align-items:center; */
    /* margin-left:auto; */
    background-color: white;
    ${media.greaterThan("large")`
        /* screen width is greater than 1170px (large) */
        min-width:500px;
        /* max-width:500px; */
        min-height:300px;
        max-height:300px;
        
  `};
    ${media.between("medium", "large")`
        /* screen width is between 768px (medium) and 1170px (large) */
        min-width:500px;
        /* max-width:500px; */
        min-height:215px;
        max-height:300px;
        /* width: 40%; */
    `};
    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        min-width:225px;
        max-width:300px;
        min-height:50px;
        max-height:200px;
        border-radius: 3px;
        justify-content:space-evenly;
        margin-bottom:10vw;

    `};
`;
const StyledImage = styled.img`
    /* object-fit:; */
    ${palette}
    ${spacing}
    ${typography}
    ${media.greaterThan("large")`
        /* screen width is greater than 1170px (large) */
        min-width:150px;
        max-width:150px;
        min-height:100px;
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
        max-width:300px;
        /* min-height:150px; */
        max-height:150px;
        
  `};
    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        min-width:100px;
        max-width:180px;
        min-height:100px;
        max-height:150px;
        
        
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
