import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography, styled, RadioGroup,FormLabel,ButtonGroup } from "@mui/material";

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
  flexDirection: 'row',
  justifyContent: 'space-between',
});


const StyledGenderFormLabel= styled(FormLabel)({
  width:'20%',
  padding: '11px'
})

const StyledButtonGroup= styled(ButtonGroup)({

})


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
  textAlign: "center",
});




export {
  StyledBox,
  StyledTypography,
  StyledButton,
  StyledGenderWrapper,
  StyledTypographyForLink,
  StyledGenderFormLabel,
  StyledButtonGroup
};
