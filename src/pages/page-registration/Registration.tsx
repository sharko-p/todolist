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
  StyledTypographyValidPass,
} from "./registration.style";
import Box from "@mui/material/Box";
import { Form as FinalForm, Field } from "react-final-form";
import { useNavigate, Link } from "react-router-dom";
import FormLabel from "@mui/material/FormLabel";
import { validationSchema } from "../../component/validation-component/Validation";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { LoginFormValues } from "../../tupes";
import { FormProps as FinalFormProps } from "react-final-form";
import { BaseSchema } from "yup";
import { setIn, ValidationErrors } from "final-form";

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

  function validator(
    schema: BaseSchema
  ):
    | ((
        values: FinalFormProps["values"]
      ) => ValidationErrors | Promise<ValidationErrors>)
    | undefined {
    return async (values): Promise<ValidationErrors> => {
      try {
        await schema.validate(values, { abortEarly: false });
      } catch (e) {
        const catchError = e as { inner: { path: string; message: unknown }[] };

        return catchError.inner.reduce((errors, error): object => {
          return setIn(errors, error.path, error.message);
        }, {});
      }
    };
  }

  const validate = validator(validationSchema);

  return (
    <FinalForm
      initialValues={{ gender: "male" }}
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
              <Field name="userName">
                {({ input, meta: { error, touched } }) => (
                  <TextField
                    {...input}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    error={touched && error}
                    helperText={touched && error}
                  />
                )}
              </Field>

              <Field name="email">
                {({ input, meta: { error, touched } }) => (
                  <TextField
                    {...input}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    error={touched && error}
                    helperText={touched && error}
                  />
                )}
              </Field>

              <Field name="password">
                {({ input, meta: { error, touched } }) => (
                  <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      {...input}
                      id="outlined-adornment-password"
                      error={touched && error}
                      type={showPassword ? "text" : "password"}
                      label="Password"
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
                    />

                    {touched && error && (
                      <StyledTypographyValidPass>
                        <span> {error}</span>{" "}
                      </StyledTypographyValidPass>
                    )}
                  </FormControl>
                )}
              </Field>

              <Field name="gender">
                {({ input, meta: { error, touched } }) => (
                  <StyledGenderWrapper>
                    <StyledGenderFormLabel>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                    </StyledGenderFormLabel>

                    <ToggleButtonGroup
                      {...input}
                      exclusive
                      aria-label="text alignment"
                    >
                      <ToggleButton value="male">Male</ToggleButton>
                      <ToggleButton value="female">Female</ToggleButton>
                    </ToggleButtonGroup>
                  </StyledGenderWrapper>
                )}
              </Field>

              <Field name="age">
                {({ input, meta: { error, touched } }) => {
                  return (
                    <TextField
                      {...input}
                      id="outlined-basic"
                      label="Age"
                      variant="outlined"
                      error={touched && error}
                      helperText={touched && error}
                    />
                  );
                }}
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
        );
      }}
    />
  );
};

export default Form;
