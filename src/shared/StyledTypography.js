import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";

const StyledPara = styled.p`
  ${spacing}
  ${palette}
  ${typography}
  `;
const StyledH1 = styled.h1`
  ${spacing}
  ${palette}
  ${typography}
  `;

const StyledSpan = styled.span`
${spacing}
${palette}
${typography}
`;

export { StyledPara, StyledH1, StyledSpan };
