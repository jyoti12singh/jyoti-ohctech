import useAxiosPrivate from "../../utils/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSessionStorage } from "../../utils/useSessionStorage";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Lottie from "lottie-react";
import Person4RoundedIcon from "@mui/icons-material/Person4Rounded";
import animationData from "../../assets/direction.json";

const Roles = () => {
  const axiosClientPrivate = useAxiosPrivate();
  const [roles, setRoles] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card
  const { sessionData,updateSessionData } = useSessionStorage("sessionData");
  const user = sessionData?.userId;

  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const getRoles = async () => {
      try {
        const response = await axiosClientPrivate.get(
          `/users/roles/${user}`,
          `/menu-access/${user}`,
          {
            signal: controller.signal,
          }
        );
        // console.log(response.data);
        setRoles(response.data);
      } catch (err) {
        console.error(err);
        setRoles([]);
      }
    };

    getRoles();

    return () => {
      controller.abort();
    };
  }, [axiosClientPrivate, user]);

  // console.log(roles);

  const handleRoleClick = (id) => {
    if (id === null || id === "" || id === undefined) {
      return;
    }

    updateSessionData({ roleId: id });
    navigate("/adminHome");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Set height to full viewport height
      }}
    >
      <Card
        variant="outlined"
        sx={{
          borderTopColor: "primary.main",
          borderBottomColor: "primary.main",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderTopRightRadius: "40px",
          borderBottomLeftRadius: "40px",
          minWidth:'50%'
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            align="center"
            sx={{ display: "flex", direction: "row", justifyContent: "center" }}
          >
            <Lottie
              loop={false}
              animationData={animationData}
              style={{
                display: "block",
                marginBottom: "20px",
                width: "80px",
                height: "50px",
              }}
            />
            Select your role
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {roles.map((roleItem) => (
              <Grid item key={roleItem.id} xs={12} sm={6} md={4}>
                <Card
                  onClick={() => handleRoleClick(roleItem.id)}
                  onMouseEnter={() => setHoveredCard(roleItem.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    cursor: "pointer",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    backgroundColor:
                      hoveredCard === roleItem.id ? "#bbdefb" : "cornflowerblue", // Change background color on hover
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia>
                    <Person4RoundedIcon sx={{ fontSize: "50px" }} />
                  </CardMedia>
                  <CardContent style={{ textAlign: "center" }}>
                    {roleItem.roleName}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Roles;
