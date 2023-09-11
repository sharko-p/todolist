import Box from "@mui/material/Box";
import { Typography, styled } from "@mui/material";

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

export { StyledBox, StyledTypography };
