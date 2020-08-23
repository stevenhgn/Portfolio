import React, { forwardRef, useState } from "react";

import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import media from "styled-media-query";
import Launch from "@material-ui/icons/Launch";
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
        maxWidth={"sm"}
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
                    title={<StyledPara fontSize={"13px"}>Send mail</StyledPara>}
                  >
                    <a href="mailto:steven.hgng@gmail.com" target="_blank">
                      <IconButton>
                        <Launch />
                      </IconButton>
                    </a>
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
                      <StyledPara fontSize={"13px"}>
                        Open LinkedIn in new tab
                      </StyledPara>
                    }
                  >
                    <a
                      href="https://www.linkedin.com/in/steven-nguyen-895487144/"
                      target="_blank"
                    >
                      <IconButton>
                        <Launch />
                      </IconButton>
                    </a>
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
                      <StyledPara fontSize={"13px"}>
                        Open Github in new tab
                      </StyledPara>
                    }
                  >
                    <a href="https://github.com/stevenhgn" target="_blank">
                      <IconButton>
                        <Launch />
                      </IconButton>
                    </a>
                  </Tooltip>
                </StyledBox>
              </DialogContentWrapper>
            </StyledBox>
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

const DialogMedia = styled(Dialog)``;
export default ContactDialog;
