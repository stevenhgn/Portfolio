import React from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { Icon, SvgIcon } from "@material-ui/core";
import { StyledSpan, StyledH1 } from "../../shared/StyledTypography";
import School from "@material-ui/icons/School";

const AboutCard = () => {
  return (
    <CardWrapper>
      <IconWrapper component={School} fontSize={"large"}></IconWrapper>
      <StyledSpan style={{ fontSize: "3vw" }}> |</StyledSpan>
      <StyledSpan style={{ fontSize: "3vw" }}>Master student</StyledSpan>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
    ${palette}
    ${spacing}
    ${typography}
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items:center;
    /* flex: 5; */
`;
const IconWrapper = styled(Icon)`
  ${palette}
  ${spacing}
  ${typography}
  .MuiIcon-fontSizeLarge{
    font-size: 5rem;
  }
`;
export default AboutCard;
