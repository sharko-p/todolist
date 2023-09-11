import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography, styled } from "@mui/material";

const StyledIconButton = styled(Typography)({
  fontSize: "1px",
  padding: "8px",
  margin: "0",
});

const StyledBoxIsEdit = styled(Box)({
  width: "100%",
});
const StyledBox = styled(Box)({
  width: "100%",
  marginTop: "10px",
  marginBottom: "10px",
});
const StyledBoxWrapper = styled(Box)({
  color: "white",
  backgroundColor: "darkorchid",
  border: "0",

  display: "flex",
  justifyContent: "space-between",
});

const StyledBoxButton = styled(Box)({
  display: "inline",
  color: "white",
});
const StyledTypography = styled(Button)({
  backgroundColor: "darkorchid",
  width: "77%",
  border: "none",
  justifyContent: "start",
  textTransform: "none",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "darkorchid",
  },
});

export {
  StyledIconButton,
  StyledBoxIsEdit,
  StyledBox,
  StyledBoxWrapper,
  StyledTypography,
  StyledBoxButton,
};
