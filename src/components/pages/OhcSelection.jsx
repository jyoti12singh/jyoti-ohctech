import { Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/material";
// import ohcimg from "../../../public/ohc.jpg";
import ohcimg from "../../assets/images/ohc.jpg";
// import RoleCard from "./RoleCard";
// import OhcCard from "./OhcCard";
import chiefmedoff from "../../assets/images/ChiefMedicalOfficer.png";
import reception from "../../assets/images/Reception.png";
import applicationadmin from "../../assets/images/Application Admin.png";
import medicalExamination from "../../assets/images/Medical Examination.png";
import employee from "../../assets/images/Employee.jpg";
import pharmacy from "../../assets/images/Pharmacy.png";
import { useEffect, useState } from "react";
// import LocalPharmacyRoundedIcon from "@mui/icons-material/LocalPharmacyRounded";
import useAxiosPrivate from "../../utils/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../utils/useSessionStorage";
import { Card, CardActionArea, CardMedia } from "@mui/material";



const  OhcSelection = ()=> {

  // const [icons] = useState([
  //   { image: medicalExamination, name: "Dwarka" },
  //   { image: reception, name: "Dispensary" },
  //   { image: applicationadmin, name: "Plant OHC" },
  //   { image: chiefmedoff, name: "OHC 4" },
  //   { image: employee, name: "OHC 5" },
  //   { image: pharmacy, name: "OHC 6" },
  // ]);

  const OhcImage = {
    AA: applicationadmin,
    ME: medicalExamination,
    REC : reception,
    CMO: chiefmedoff,
    EMP : employee,
    PHY :  pharmacy
};
  const axiosClientPrivate = useAxiosPrivate();
  const [ohc, setOhc] = useState([]);
  // const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card
  const { sessionData,updateSessionData } = useSessionStorage("sessionData");
  const user = sessionData?.userId;
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const getOhc = async () => {
      try {
        const response = await axiosClientPrivate.get(`/users/ohcs/${user}`, {
          signal: controller.signal,
        });
        console.log(response.data);
        setOhc(response.data);
      } catch (err) {
        setOhc([]);
      }
    };

    getOhc();

    return () => {
      controller.abort();
    };
  }, [axiosClientPrivate, user]);

  const handleOhcClick = (id) => {
    if (id === null || id === "" || id === undefined) {
      return;
    }

    updateSessionData({ ohcId: id });
    navigate("/roleSelection");
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
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            //  marginRight:'1rem'
          }}
        >
         { /*<Typography variant="h5" style={{ fontWeight: "bold" }}>
            Ohc Selection
        </Typography>*/}
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
            {ohc.map((item) => (
              // <OhcCard key={item} icon={item.image} name={item.name} />
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
              
                onClick={() => handleOhcClick(item.id)}
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
                    image={OhcImage[item.iconText]}
                    alt="image"
                    sx={{
                      width: 60,
                      height: 60,
                      objectFit: "contain",
                      marginBottom: 2,
                    }}
                  />
                  <Typography variant="body2">{item.ohcName}</Typography>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Stack>
  );
}

export default OhcSelection;