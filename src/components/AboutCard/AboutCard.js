import React from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { Icon, SvgIcon } from "@material-ui/core";
import { StyledSpan, StyledH1 } from "../../shared/StyledTypography";
import { continueStatement } from "@babel/types";

const AboutCard = (props) => {
  return (
    <CardWrapper>
      <IconWrapper component={props.component} fontSize={"large"}></IconWrapper>
      <StyledSpan color={props.color} style={{ fontSize: "3vw" }}>
        |
      </StyledSpan>
      <StyledSpan style={{ fontSize: "3vw" }}>{props.title}</StyledSpan>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
    ${palette}
    ${spacing}
    ${typography}
    /* display:flex; */
    /* flex-direction: row; */
    flex-wrap:wrap;
    /* align-items:center; */
    /* margin-left:auto; */
    margin-right:auto;
`;
const IconWrapper = styled(Icon)`
  ${palette}
  ${spacing}
  ${typography}
`;
export default AboutCard;
