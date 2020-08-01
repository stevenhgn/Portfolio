import { Link } from "react-router-dom";
import styled from "styled-components";

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
const StyledFragment = styled(Fragment)`
${spacing}
${palette}
${typography}
`;

const ImageWrapper = styled.img`
  object-fit: cover;
  height: 40%;
`;
const LinkWrapper = styled(Link)`
  ${spacing}
  ${palette}
  ${typography}
`;
export {
  StyledBox,
  LinkWrapper,
  ImageWrapper,
  StyledTextField,
  StyledFragment,
};
