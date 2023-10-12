import Box from "@mui/material/Box";
import { Typography, styled, Link } from "@mui/material";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  paddingTop: "80px",
  height: "100vh",
  backgroundColor: "darkorchid",
});

const StyledTypography = styled(Typography)({
  textAlign: "center",
  fontWeight: "bold",
});

const StyledTypographyForLink = styled(Link)({
  textAlign: "center",
});

export { StyledBox, StyledTypography, StyledTypographyForLink };
