import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "styled-media-query";

import { Box, TextField, IconButton } from "@material-ui/core";
import { spacing, palette, typography } from "@material-ui/system";
import { Fragment } from "react";
const StyledBox = styled(Box)`
  ${spacing}
  ${palette}
  ${typography}
  /* flex-wrap: wrap; */
  display: flex;
  flex-direction: 'row';
  `;

const StyledTextField = styled(TextField)`
  ${spacing}
  ${palette}
  ${typography};
  .MuiInputBase-input{
    color: white;

  }
  .MuiFormLabel-root.Mui-disabled{
    color: white;
  }
  .MuiFilledInput-underline:after {
    border-color: white;
  }
`;
const StyledTextFieldMediaPhone = styled(TextField)`
  ${spacing}
  ${palette}
  ${typography};
  
  .MuiInputBase-input{
    color: white;
    
  }
  .MuiFormLabel-root.Mui-disabled{
    color: white;
  }
  .MuiFilledInput-underline:after {
    border-color: white;
  }
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    /* height: 100px; */
    font-size:5vw;
  `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    font-size:3vw;
    /* width: 40%; */
    `}
  ${media.greaterThan("large")`
    font-size:3vw;
    /* screen width is greater than 1170px (large) */
    /* height: 100%; */
    /* background: red; */
  `}
`;
const StyledFragment = styled(Fragment)`
${spacing}
${palette}
${typography}
`;

const ImageWrapper = styled.img`
  object-fit: cover;
  /* height: 40%; */
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    height: 100px;
    `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    height: 40%;
    /* width: 40%; */
    `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    height: 100%;
    /* background: red; */
  `}
`;
const LinkWrapper = styled(Link)`
  ${spacing}
  ${palette}
  ${typography}
  text-decoration: none;
`;
const LinkWrapperPhone = styled(Link)`
  ${spacing}
  ${palette}
  ${typography}
  text-decoration: none;
  
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    font-size:13px;
    `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    display:none;
    /* width: 40%; */
    `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    display:none;
    /* background: red; */
  `}
`;
const LinkWrapperDesktop = styled(Link)`
  ${spacing}
  ${palette}
  ${typography}
  text-decoration: none;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    display:none;
    `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;
export {
  StyledBox,
  LinkWrapper,
  ImageWrapper,
  StyledTextField,
  StyledFragment,
  StyledTextFieldMediaPhone,
  LinkWrapperPhone,
  LinkWrapperDesktop,
};
