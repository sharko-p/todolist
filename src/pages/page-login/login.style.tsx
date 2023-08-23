import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography, styled } from "@mui/material";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "gainsboro",
});

const StyledTypography = styled(Typography)({
  textAlign: "center",
  fontWeight: "bold",
});

const StyledButton = styled(Button)({
  bgColor: "#4CAF50",
  color: "white",
  padding: "10px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  width: "140px",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#3e8e41",
  },
});
const StyledTypographyForLink = styled(Typography)({
  textAlign: "center",
});

export { StyledBox, StyledTypography, StyledButton, StyledTypographyForLink };
