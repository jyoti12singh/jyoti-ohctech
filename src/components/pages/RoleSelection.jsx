import { Stack } from "@mui/material";
import { Box, Container } from "@mui/material";
// import ohcimg from "../../../public/ohc.jpg";
import ohcimg from "../../assets/images/ohc.jpg";
// import RoleCard from "./RoleCard";
import chiefmedoff from "../../assets/images/ChiefMedicalOfficer.png";
import reception from "../../assets/images/Reception.png";
import applicationadmin from "../../assets/images/Application Admin.png";
import medicalExamination from "../../assets/images/Medical Examination.png";
import employee from "../../assets/images/Employee.jpg";
import pharmacy from "../../assets/images/Pharmacy.png";
import useAxiosPrivate from "../../utils/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSessionStorage } from "../../utils/useSessionStorage";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";

const RoleSelection = () => {
  // const [icons] = useState([
  //   { image: medicalExamination, name: "Medical Examination" },
  //   { image: reception, name: "Reception" },
  //   { image: applicationadmin, name: "Application Admin" },
  //   { image: chiefmedoff, name: "Chief Medical Officer" },
  //   { image: employee, name: "Employee" },
  //   { image: pharmacy, name: "Pharmacy" },
  // ]);


  

  // from old starting

  const axiosClientPrivate = useAxiosPrivate();
  const [roles, setRoles] = useState([]);
  // const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card
  const { sessionData, updateSessionData } = useSessionStorage("sessionData");
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

  //  Ending

  const RoleImage = {
    AA: applicationadmin,
    ME: medicalExamination,
    REC : reception,
    CMO: chiefmedoff,
    EMP : employee,
    PHY :  pharmacy
};

  return (
    <Stack spacing={0} direction="row">
      <Box
        sx={{
          width: "50vw",
          height: "100vh",
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
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            //  marginRight:'1rem'
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
              flexWrap: "wrap",
              justifyContent: "center",
              justifyItems: "center",
              //  marginLeft:'2rem',
              marginRight: "1.5rem",
              marginTop: "1rem",
            }}
          >
            {roles.map((item) => (
              // <RoleCard key={index} icon={item.iconText} name={item.roleName} />
              <Card
                key={item.id}
                sx={{
                  width: 120,
                  display: "flex",
                  justifyContent: "center",
                  height: 120,
                  marginLeft: 4,
                  marginBottom: "1rem",
                }}
                onClick={() => handleRoleClick(item.id)}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={RoleImage[item.iconText]}
                    alt="image"
                    sx={{
                      width: 60,
                      height: 60,
                      objectFit: "contain",
                      marginBottom: 2,
                    }}
                  />
                  <Typography variant="body2">{item.roleName}</Typography>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Stack>
  );
};

export default RoleSelection;
