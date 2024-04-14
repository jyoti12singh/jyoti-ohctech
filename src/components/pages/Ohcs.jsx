import { useEffect, useState } from "react";
import LocalPharmacyRoundedIcon from "@mui/icons-material/LocalPharmacyRounded";
import useAxiosPrivate from "../../utils/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../utils/useSessionStorage";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  CardMedia,
} from "@mui/material";
import animationData from "../../assets/direction.json";
import Lottie from "lottie-react";

const Ohcs = () => {
  const axiosClientPrivate = useAxiosPrivate();
  const [ohc, setOhc] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
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
          minWidth: "50%",
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
            Select your ohc
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {ohc.map((ohcItem) => (
              <Grid item key={ohcItem.id} xs={12} sm={6} md={4}>
                <Card
                  onClick={() => handleOhcClick(ohcItem.id)}
                  onMouseEnter={() => setHoveredCard(ohcItem.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    cursor: "pointer",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    backgroundColor:
                      hoveredCard === ohcItem.id ? "#bbdefb" : "cornflowerblue", // Change background color on hover
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia>
                    <LocalPharmacyRoundedIcon sx={{ fontSize: "50px" }} />
                  </CardMedia>
                  <CardContent style={{ textAlign: "center" }}>
                    {ohcItem.ohcName}
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

export default Ohcs;
