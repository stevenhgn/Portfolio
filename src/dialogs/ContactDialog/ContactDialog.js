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
  Button,
} from "@material-ui/core";
import {
  StyledBox,
  ImageWrapper,
  StyledFragment,
  StyledTextField,
} from "../../shared/ContentWrapper";
import themes from "../../shared/theme";
import {
  StyledSpan,
  StyledPara,
  StyledH1,
} from "../../shared/StyledTypography";
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
                  fontSize: isNotDesktop ? "5vw" : "2vw",
                  borderBottom: "2px solid #007ACA",
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
                  <StyledSpan mb={1}> Write me a mail</StyledSpan>
                  <StyledBox mb={1}>
                    <StyledTextFieldMedia
                      fullWidth
                      label={"Name"}
                      autoFocus
                      variant={"filled"}
                    >
                      Name
                    </StyledTextFieldMedia>
                  </StyledBox>
                  <StyledBox>
                    <StyledTextFieldMedia
                      label={"Description"}
                      variant={"filled"}
                      fullWidth
                      rows={5}
                      multiline
                    >
                      Description
                    </StyledTextFieldMedia>
                  </StyledBox>
                  <StyledBox mt={1}>
                    <Button>SUBMIT</Button>
                  </StyledBox>
                </DialogContentWrapper>
              ) : null}
            </StyledBox>
            {isNotDesktop ? (
              <DialogContentWrapper style={{ alignItems: "center" }}>
                <StyledSpan mb={1}> Write me a mail</StyledSpan>
                <StyledBox mb={1}>
                  <StyledTextFieldMedia
                    label={"Name"}
                    fullWidth
                    autoFocus
                    variant={"filled"}
                  >
                    Name
                  </StyledTextFieldMedia>
                </StyledBox>
                <StyledBox mb={2}>
                  <StyledTextFieldMedia
                    label={"Description"}
                    fullWidth
                    variant={"filled"}
                    multiline
                    rows={5}
                  >
                    Description
                  </StyledTextFieldMedia>
                </StyledBox>
                <StyledBox mt={1}>
                  <Button>SUBMIT</Button>
                </StyledBox>
              </DialogContentWrapper>
            ) : null}
          </DialogCardWrapper>
          <StyledSpan style={{ flex: 2 }}></StyledSpan>
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
  ${media.lessThan("medium")`
/* screen width is less than 768px (medium) */
    min-height:150px;
    max-height:250px;
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
        /* min-width:50px;
        max-width:150px;
        min-height:10px;
        max-height:150px; */
        /* width: 40%; */
    `};
`;

const DialogMedia = styled(Dialog)``;
export default ContactDialog;
