import GetAppIcon from "@material-ui/icons/GetApp";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { IconButton } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import themes from "./theme";

const StyledGetAppIcon = styled(GetAppIcon)`
  ${spacing}
  ${palette}
  ${typography}
  color:white;
  .MuiSvgIcon-root {
    font-size: 5vw;
  }
`;
const StyledIconButton = styled(IconButton)`
  ${spacing}
  ${palette}
  ${typography}
  .MuiSvgIcon-root {
    font-size:5vw;
    &:hover {
      color: lightgreen;
      opacity:100%;
    }
  }
  .MuiSvgIcon-fontSizeLarge {
    /* font-size: 4rem; */
    &:hover {
      color: ${themes.standard.palette.primary};
      opacity:100%;
    }
  }
`;
const StyledArrowUp = styled(ExpandLess)`
  ${spacing}
  ${palette}
  ${typography}
  opacity:40%;
  color:white;
  `;
const StyledArrowDown = styled(ExpandMore)`
  ${spacing}
  ${palette}
  ${typography}
  color:white;
  opacity:40%
`;
export { StyledIconButton, StyledGetAppIcon, StyledArrowUp, StyledArrowDown };
