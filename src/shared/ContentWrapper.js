import { Link } from "react-router-dom";
import styled from "styled-components";

import { Box } from "@material-ui/core";
import { spacing, palette, typography } from "@material-ui/system";
const StyledBox = styled(Box)`
  ${spacing}
  ${palette}
  ${typography}
  
  /* flex-wrap: wrap; */
  display: flex;
  flex-direction: 'row';
  `;

const ImageWrapper = styled.img`
  position: relative;
  object-fit: cover;
  height: 100%;
`;
const LinkWrapper = styled(Link)`
  ${spacing}
  ${palette}
  ${typography}
`;
export { StyledBox, LinkWrapper, ImageWrapper };
