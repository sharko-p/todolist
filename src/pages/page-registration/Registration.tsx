//@ts-nocheck
import { useState, FC } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  StyledBox,
  StyledTypography,
  StyledButton,
  StyledGenderWrapper,
  StyledTypographyForLink,
  StyledGenderFormLabel,
  StyledButtonGroup,
} from "./registration.style";
import Box from "@mui/material/Box";
import { Form as FinalForm, Field } from "react-final-form";
import { useNavigate, Link } from "react-router-dom";
import FormLabel from "@mui/material/FormLabel";
import { validationSchema } from "../../component/validation-component/Validation";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { FormProps as FinalFormProps } from 'react-final-form';

import { setIn, ValidationErrors } from 'final-form';


interface LoginFormValues {
  userName: string;
  password: string;
  gender: string;
  age: number;
}

const Form: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (): void =>
    setShowPassword((preValue) => !preValue);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleSubmit = (values: LoginFormValues): void => {
    console.log("userName:", values.userName);
    console.log("password:", values.password);
    console.log("gender:", values.gender);
    console.log("age:", values.age);
    navigate("/home");
  };
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const validateFormValues = (schema) => async (values) => {
    console.log(values);
    
    if (typeof schema === 'function') {
     schema = schema();
    }
    try {
     await schema.validate(values, { abortEarly: false });
      console.log(1);
     
    }  catch (err) {
       console.log(2, err.inner);
    
     const errors = err.inner.reduce((formError, innerError) => {
      console.log('formError', formError);
      console.log('inerError', inerError);
      return setIn(formError, innerError.path, innerError.message);
     }, {});
   
     return errors;
    }
   };

  const validate = validateFormValues(validationSchema);

  return (
    <FinalForm
      validate={validate}
      onSubmit={handleSubmit}
      render={({
        handleSubmit: formHandleSubmit,
        form,
        submitting,
        pristine,
        values,
        invalid,
      }) => {
        console.log(values);
        
      return (
        
        <StyledBox>
          <Box
            sx={{
              "& > :not(style)": {
                margin: "8px 30px 20px 30px",
                width: "325px",
              },
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              backgroundColor: "whitesmoke",
            }}
            onSubmit={formHandleSubmit}
            component="form"
          >
            <StyledTypography variant="h6">Registration</StyledTypography>
            <Field name="username">
              {({ input: { value,error, onChange } }) => (
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={error}
                />
              )}
            </Field>

            <Field name="email">
              {({ input: { value,error, onChange } }) => (
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={error}
                />
              )}
            </Field>

            <Field name="password">
              {({ input: { value, error, onChange } }) => (
                <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    error={error}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    value={value}
                    onChange={onChange}
                  />
                </FormControl>
              )}
            </Field>

            <StyledGenderWrapper>
              <StyledGenderFormLabel>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
              </StyledGenderFormLabel>

              <StyledButtonGroup>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton value="male">Male</ToggleButton>
                  <ToggleButton value="female">Female</ToggleButton>
                </ToggleButtonGroup>
              </StyledButtonGroup>
            </StyledGenderWrapper>
            <Field name="age">
              {({ input: { value, error, onChange } }) => {
              console.log(error);
              
              return  (
                <TextField
                  id="outlined-basic"
                  label="Age"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={error}
                />
              )}}
            </Field>

            <Stack spacing={1} direction="row" justifyContent="space-around">
              <StyledButton
                variant="contained"
                disabled={pristine || submitting || invalid}
                type="submit"
              >
                Sign Up
              </StyledButton>
            </Stack>
            <StyledTypographyForLink>
              Alreddy have an Account? <Link to="/account">Log In!</Link>
            </StyledTypographyForLink>
          </Box>
        </StyledBox>
      )}}
    />
  );
};

export default Form;
