import React from "react";
import ohcimg from "../../../public/ohc.jpg";
import google from "../../../public/google.png";
import { InputAdornment, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";
import {
  Box,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "@mui/material";
import { useState } from "react";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    signedin: false,
  });
  const togglePasswordVisibility = () => {
    setShowPassword((prevShow) => !prevShow);
  };
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const EndAdorment = ({ showPassword, setShowPassword }) => {
    return (
      <InputAdornment position="end">
        <IconButton
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
        </IconButton>
      </InputAdornment>
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <Stack spacing={0} direction="row">
      <Box
        sx={{
          width: "50vw",
          height: "100vh",
          // overflow: "hidden",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Box>
          <img style={{ height: "100vh", width: "50vw" }} src={ohcimg} alt="" />
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100vw", sm: "50vw" },
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            height: "100%",
            display: "flex",

            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
             
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                '@media (min-width:600px)': {
                     marginLeft:'-8.5rem'
                   },
              }}
              display={"flex"}
              flexDirection={"row"}
              variant="h5"
              
              justifyContent={'center'}
              gutterBottom
            >
              Welcome To{""}
              <img
                src="/logo.svg"
                alt="logo"
                style={{ width: "155px", height: "35px" }}
              />
            </Typography>

            <Typography variant="h6" gutterBottom>
              <Box sx={{ '@media (min-width:600px)': {
                marginLeft:'-13.5rem'
              }}}
             
               >Sign into Your Account</Box>
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <TextField
                label="Username"
                variant="standard"
                margin="normal"
                required
                fullWidth
                style={{ marginTop: "2" }}
                value={loginData.username}
                onChange={handleFieldChange}
                id="username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                variant="standard"
                onChange={handleFieldChange}
                value={loginData.password}
                margin="normal"
                required
                style={{ marginTop: "3" }}
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <EndAdorment
                      onClick={togglePasswordVisibility}
                      showPassword={showPassword}
                      setShowPassword={setShowPassword}
                    />
                  ),
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={() => {
                          setLoginData((prevData) => ({
                            ...prevData,
                            signedin: !loginData.signedin,
                          }));
                        }}
                      />
                    }
                    label="Keep me signed in"
                    name="signedin"
                  />
                </FormGroup>
                <Link href="" style={{ textDecoration: "none" }}>
                  Forget Email or Password
                </Link>
              </div>
              <Button
                type="submit"
                style={{ backgroundColor: "#42a7f5" ,textTransform:'unset' }}
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 5, bgcolor: "cornflowerblue" }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Typography variant="h10" gutterBottom>
                {" "}
                Don&apost have an account?{" "}
                <Link href="" style={{ textDecoration: "none" }}>
                  Sign Up
                </Link>
              </Typography>
              <Typography
                margin={"1rem"}
                position={"relative"}
                textAlign={"center"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <div
                  style={{
                    width: "30vw",
                    marginTop: "1rem",
                    height: "1px",
                    backgroundColor: "#dadde0",
                  }}
                ></div>
                <p
                  style={{
                    alignItems: "center",
                    paddingTop: "1rem",
                    textAlign: "center",
                    font: "black",
                    position: "absolute",
                  }}
                >
                  Or
                </p>
              </Typography>
              <Typography
                margin={"1rem"}
                position={"relative"}
                textAlign={"center"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <div
                 
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      textAlign: "center",
                      width: "8%",
                      height: "8%",
                      marginTop:'1.5rem',
                      // marginLeft: "15vw",
                      cursor:'pointer'
                
                  }}
                >
                  <Link >
                  <img src={google} alt="" />
                  </Link>
                    
                </div>
                {/* <p
                  style={{
                    alignItems: "center",
                    paddingTop: "1rem",
                    textAlign: "center",
                    font: "black/80",
                    position: "absolute",
                  }}
                >
                  Or
                </p> */}
              </Typography>
              
              
              
            </Box>
          </Box>
        </Container>
      </Box>
       
    </Stack>
  );
}
