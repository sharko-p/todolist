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
  StyledTypographyForLink,
} from "./login.style";
import Box from "@mui/material/Box";
import { Form as FinalForm, Field } from "react-final-form";
import { useNavigate, Link } from "react-router-dom";
import {LoginFormValues} from '../../types'

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
    navigate("/home");
  };

  return (
    <FinalForm
      onSubmit={handleSubmit}
      render={({
        handleSubmit: formHandleSubmit,
        form,
        submitting,
        pristine,
        values,
        invalid,
      }) => (
        <StyledBox>
          <Box
            sx={{
              "& > :not(style)": { margin: "20px", width: "auto" },
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              backgroundColor: "whitesmoke",
              width: "325px",
            }}
            onSubmit={formHandleSubmit}
            component="form"
          >
            <StyledTypography variant="h6">Login</StyledTypography>
            <Field name="login">
              {({ input: { value, onChange } }) => (
                <TextField
                  id="outlined-basic"
                  label="Login"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                />
              )}
            </Field>

            <Field name="password">
              {({ input: { value, onChange } }) => (
                <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
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

            <Stack spacing={1} direction="row" justifyContent="space-around">
              <StyledButton
                variant="contained"
                disabled={pristine || submitting || invalid}
                type="submit"
              >
                Sign in
              </StyledButton>
            </Stack>
            <StyledTypographyForLink>
              Don't have an Account? <Link to="/registration">Sign Up!</Link>
            </StyledTypographyForLink>
          </Box>
        </StyledBox>
      )}
    />
  );
};

export default Form;
