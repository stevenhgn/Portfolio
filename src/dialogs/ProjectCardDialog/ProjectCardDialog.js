import React, { forwardRef, useState } from "react";

import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import media from "styled-media-query";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Typography,
} from "@material-ui/core";
import {
  StyledBox,
  ImageWrapper,
  StyledFragment,
} from "../../shared/ContentWrapper";
import themes from "../../shared/theme";
import { StyledSpan } from "../../shared/StyledTypography";

const ProjectCardDialog = (props) => {
  const isNotDesktop = window.innerWidth < 768;
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    props.handleCloseDialog();
  };
  return (
    <Wrapper>
      <DialogMedia fullWidth={true} open={open} onClose={handleClose}>
        <StyledBox>
          <DialogCardWrapper>
            <DialogContentWrapper>
              <StyledSpan
                style={{
                  fontSize: isNotDesktop ? "2vw" : "1vw",
                  fontWeight: "200",
                }}
                color={"contentRed"}
              >
                {props.item.label}
              </StyledSpan>
              <StyledSpan fontSize={isNotDesktop ? "5vw" : "2vw"}>
                {props.item.title}
                {props.item.underTitle ? "-" + props.item.underTitle : null}
                <StyledSpan fontSize={isNotDesktop ? "3vw" : "1vw"}>
                  {props.item.fullTitle
                    ? "(" + props.item.fullTitle + ")"
                    : null}
                </StyledSpan>
              </StyledSpan>

              <StyledSpan
                fontSize={isNotDesktop ? "3vw" : "0.8vw"}
                color={"purple"}
              >
                {props.item.date}
              </StyledSpan>
            </DialogContentWrapper>

            <DialogContent>
              <DialogContentTextMedia mb={"1vw"}>
                {props.item.description}
              </DialogContentTextMedia>
            </DialogContent>
            <DialogContent>
              <StyledBox
                id={"footer-content"}
                color={"fontblue"}
                fontSize={isNotDesktop ? "3vw" : "1vw"}
                flexWrap={"wrap"}
                mb={"1.5vw"}
              >
                {props.item.techUsed.map((tech, key) => (
                  <StyledSpan key={key} pr={2}>
                    {tech}
                  </StyledSpan>
                ))}
              </StyledBox>
            </DialogContent>
          </DialogCardWrapper>
          <ImageWrapper src={props.item.imgLogo}></ImageWrapper>
        </StyledBox>
      </DialogMedia>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: white;
`;
const DialogCardWrapper = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  background-color: ${themes.standard.palette.lightnRose};
  border-right: 3px solid ${themes.standard.palette.lightCoral};
`;

const DialogContentWrapper = styled(DialogContent)`
  ${spacing}
  ${palette}
  ${typography}
  display:flex;
  flex-direction:column;
`;

const DialogContentTextMedia = styled(DialogContentText)`
  ${media.greaterThan("large")`
        /* screen width is greater than 1170px (large) */
    
  `};
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        /* min-width:100px;
        max-width:180px;
        min-height:100px;*/
        font-size:0.8rem;
        max-height:400px; 
        
        
    `};
  ${media.between("medium", "large")`
        /* screen width is between 768px (medium) and 1170px (large) */
        /* min-width:50px;
        max-width:100px;
        min-height:10px;
        max-height:100px; */
        /* width: 40%; */
    `};
`;
const DialogMedia = styled(Dialog)`
  ${media.greaterThan("large")`
        /* screen width is greater than 1170px (large) */
    min-width: ${window.innerWidth} / 2;
    max-width: ${window.innerWidth} / 1.5;
    /* min-height:150px; */
    max-height: ${window.innerHeight} / 1.5;      
  `};
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
        /* min-width:100px;
        max-width:180px;
        min-height:100px;*/
        max-height:${window.innerHeight / 2}; 
        
        
    `};
  ${media.between("medium", "large")`
        /* screen width is between 768px (medium) and 1170px (large) */
        /* min-width:50px;
        max-width:100px;
        min-height:10px;
        max-height:100px; */
        /* width: 40%; */
    `};
`;
export default ProjectCardDialog;
