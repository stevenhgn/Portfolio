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
import themes from "../../shared/theme";

const ProjectCardV2 = (props) => {
  const isNotDesktop = window.innerHeight < 768;
  const cardwrapper = document.getElementById("CardWrapper");
  return (
    <CardWrapper id="CardWrapper" m={"2vw"}>
      <StyledBox flexDirection={"column"}>
        <StyledImage
          src={props.item.alterImageSmall}
          onMouseOver={(e) =>
            //   (e.currentTarget.src = require("../../../public/pattern/RENAS_Pattern_small.png"))
            (e.currentTarget.src = props.item.alterImageExpand)
          }
          onMouseOut={(e) => (e.currentTarget.src = props.item.alterImageSmall)}
        ></StyledImage>
        <StyledSpan
          color={"white"}
          style={{
            fontSize: isNotDesktop ? "5vw" : "2.5vw",
            alignSelf: "center",
          }}
        >
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
   

`;
const StyledImage = styled.img`
    /* object-fit:; */
    ${palette}
    ${spacing}
    ${typography}
    width:350px;
    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        min-width:100px;
        max-width:180px;
        min-height:100px;
        max-height:180px;
        
        
    `};
    /* &:hover {
      background: "/pattern/RENAS_Patter_small.png"
    } */
    
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

export default ProjectCardV2;
