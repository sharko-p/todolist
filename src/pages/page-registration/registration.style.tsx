import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography, styled, RadioGroup, FormLabel } from "@mui/material";

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
const StyledGenderWrapper = styled(RadioGroup)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const StyledGenderFormLabel = styled(FormLabel)({
  width: "20%",
  padding: "11px",
});

const StyledTypographyValidPass = styled(Typography)({
  textAlign: "start",
  color: " #d32f2f",
  fontWeight: "400",
  fontSize: "0.75rem",
  lineHeight: "1.66",
  letterSpacing: " 0.03333em",
  margin: "2px 14px 0 14px",
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
  cursor: "pointer",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#3e8e41",
  },
});

const StyledTypographyForLink = styled(Typography)({
  textAlign: "start",
});

export {
  StyledBox,
  StyledTypography,
  StyledButton,
  StyledGenderWrapper,
  StyledTypographyForLink,
  StyledGenderFormLabel,
  StyledTypographyValidPass,
};
