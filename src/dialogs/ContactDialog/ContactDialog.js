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
  TextField,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import {
  StyledBox,
  ImageWrapper,
  StyledFragment,
  StyledTextField,
} from "../../shared/ContentWrapper";
import themes from "../../shared/theme";
import { StyledSpan, StyledPara } from "../../shared/StyledTypography";
import {
  StyledIconButton,
  StyledCopy,
  StyledMail,
  StyledGitHub,
} from "../../shared/icons";
import LinkedIn from "@material-ui/icons/LinkedIn";

const ContactDialog = (props) => {
  const isNotDesktop = window.innerWidth < 768;
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    props.handleCloseDialog();
  };
  return (
    <Wrapper>
      <DialogMedia
        fullWidth={true}
        open={open}
        maxWidth={"md"}
        onClose={handleClose}
      >
        <StyledBox>
          <DialogCardWrapper p={"2vw"}>
            <DialogContent>
              <StyledSpan
                style={{
                  fontSize: isNotDesktop ? "3vw" : "2vw",
                }}
              >
                Contact me
              </StyledSpan>
            </DialogContent>
            <StyledBox>
              <DialogContentWrapper>
                <StyledBox alignItems={"center"}>
                  <StyledSpan mr={1}>
                    <StyledMail />
                  </StyledSpan>
                  <StyledSpan>Steven.hgng@gmail.com</StyledSpan>
                  <Tooltip
                    style={{ marginLeft: "auto" }}
                    title={
                      <StyledPara fontSize={"13px"}>Kopier mailen</StyledPara>
                    }
                  >
                    <IconButton>
                      <StyledCopy />
                    </IconButton>
                  </Tooltip>
                </StyledBox>
                <StyledBox alignItems={"center"}>
                  <StyledSpan mr={1}>
                    <LinkedIn></LinkedIn>
                  </StyledSpan>
                  <StyledSpan>Steven Nguyen</StyledSpan>
                  <Tooltip
                    style={{ marginLeft: "auto" }}
                    title={
                      <StyledPara fontSize={"13px"}>Kopier linken</StyledPara>
                    }
                  >
                    <IconButton>
                      <StyledCopy />
                    </IconButton>
                  </Tooltip>
                </StyledBox>
                <StyledBox alignItems={"center"}>
                  <StyledSpan mr={1}>
                    <StyledGitHub />
                  </StyledSpan>
                  <StyledSpan>Stevenhgn</StyledSpan>
                  <Tooltip
                    style={{ marginLeft: "auto" }}
                    title={
                      <StyledPara fontSize={"13px"}>Kopier teksten</StyledPara>
                    }
                  >
                    <IconButton>
                      <StyledCopy />
                    </IconButton>
                  </Tooltip>
                </StyledBox>
              </DialogContentWrapper>
              {!isNotDesktop ? (
                <DialogContentWrapper>
                  Write me a mail
                  <StyledTextFieldMedia
                    label={"Name"}
                    autoFocus
                    variant={"filled"}
                  >
                    Name
                  </StyledTextFieldMedia>
                  <StyledTextFieldMedia
                    label={"Description"}
                    variant={"filled"}
                    multiline
                    rows={5}
                  >
                    Description
                  </StyledTextFieldMedia>
                </DialogContentWrapper>
              ) : null}
            </StyledBox>
            {isNotDesktop ? (
              <DialogContentWrapper>
                Write me a mail
                <StyledTextFieldMedia
                  label={"Name"}
                  fullWidth
                  autoFocus
                  variant={"filled"}
                >
                  Name
                </StyledTextFieldMedia>
                <StyledTextFieldMedia
                  label={"Description"}
                  fullWidth
                  variant={"filled"}
                  multiline
                  rows={5}
                >
                  Description
                </StyledTextFieldMedia>
              </DialogContentWrapper>
            ) : null}
          </DialogCardWrapper>
          <ImageWrapper style={{ flex: 2 }}></ImageWrapper>
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
  flex: 8;
`;

const DialogContentWrapper = styled(DialogContent)`
  ${spacing}
  ${palette}
  ${typography}
  display:flex;
  flex-direction:column;
  ${media.greaterThan("large")`
    min-height: 300px;
  `};
  /* min-width:300px; */
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
        min-height:60px;
        max-height:100px;
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

const DialogMedia = styled(Dialog)``;
export default ContactDialog;
