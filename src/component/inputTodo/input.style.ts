import Box from "@mui/material/Box";
import { Button, styled } from "@mui/material";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "10px",
  marginBottom: "30px",
});

const StyledButton = styled(Button)({
  backgroundColor: "darkorchid",

  padding: "16px 14px",
  textAlign: "center",
  textDecoration: "none",
  border: "none",
  width: "140px",

  cursor: "pointer",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#3e8e41",
  },
});

export { StyledBox, StyledButton };
