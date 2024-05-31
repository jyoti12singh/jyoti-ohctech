import ohcimg from "../../assets/welcome.jpg";
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
import { useAuth } from "../security/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = ()=> {

  const authContext = useAuth();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);

    const isLoggedIn = await authContext.login(loginData);

    if (isLoggedIn) {
      setIsLoading(false);
      navigate("/ohcSelection");
    } else {
      setIsLoading(false);
    }
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
                fontWeight:'bold',
                 marginLeft:"-7.5rem"
               }}
              display={"flex"}
              flexDirection={"row"}
              variant="h5"
              gutterBottom
            >
              Welcome To{" "}
              <img
                src="/logo.svg"
                alt="logo"
                style={{ width: "155px", height: "35px" }}
              />
            </Typography>

            <Typography variant="h10" gutterBottom>
              <Box 
              sx={
                 { marginLeft:"-15rem" }
                }
                >
              Sign into Your Account
            </Box>           
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                label="username"
                variant="standard"
                margin="normal"
                required
                fullWidth
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
                  marginTop:'1rem',
                  marginBottom:'1rem'
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
                style={{backgroundColor:"blue"}}
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1, bgcolor: "cornflowerblue" }}
                onClick={handleSubmit}
              > 
                Sign In
              </Button>
              <Typography variant="h10" gutterBottom >
                {" "}
                Don&apost have an account?{" "}
                <Link href="" style={{ textDecoration: "none" }}>
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
   </Stack>
);}


export default Login;