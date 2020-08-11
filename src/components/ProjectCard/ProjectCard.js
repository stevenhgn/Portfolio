import React from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { Icon, SvgIcon } from "@material-ui/core";
import { StyledSpan, StyledH1 } from "../../shared/StyledTypography";
import {
  StyledBox,
  ImageWrapper,
  StyledTextField,
} from "../../shared/ContentWrapper";
import media from "styled-media-query";

const ProjectCard = (props) => {
  return (
    <CardWrapper m={"2vw"}>
      <StyledBox
        id="TitleComponent"
        flexDirection={"column"}
        flex={4}
        pl={"1vw"}
        pt={"1vw"}
      >
        <StyledSpan style={{ fontSize: "1vw", fontWeight: "200" }}>
          {props.item.label}
        </StyledSpan>
        <StyledSpan style={{ fontSize: "2.5vw" }}>
          {props.item.title}
        </StyledSpan>
        <StyledBox
          id={"Body content"}
          style={{ minWidth: "100px", maxWidth: "200px" }}
        >
          <StyledText
            variant="filled"
            multiline
            fullWidth
            rows={10}
            fontSize={"1vw"}
          >
            {props.item.description}
          </StyledText>
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
    border: 2px solid black;
    
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
        min-height:125px;
        max-height:125px;
    `};
    ${media.between("medium", "large")`
        /* screen width is between 768px (medium) and 1170px (large) */
        min-width:200px;
        max-width:250px;
        min-height:125px;
        max-height:125px;
        /* width: 40%; */
    `};
`;
const StyledImage = styled.img`
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
        max-width:100px;
        min-height:50px;
        max-height:100px;
    `};
    ${media.between("medium", "large")`
        /* screen width is between 768px (medium) and 1170px (large) */
        min-width:50px;
        max-width:100px;
        min-height:100px;
        max-height:100px;
    `};
`;
const StyledText = styled.p`
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
        max-width:100px;
        min-height:50px;
        max-height:100px;
    `};
    ${media.between("medium", "large")`
        /* screen width is between 768px (medium) and 1170px (large) */
        min-width:50px;
        max-width:100px;
        min-height:50px;
        max-height:100px;
        /* width: 40%; */
    `};
`;

export default ProjectCard;
