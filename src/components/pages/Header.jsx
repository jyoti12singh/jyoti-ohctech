import {
  AppBar,
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Drawer,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import MedicationIcon from "@mui/icons-material/Medication";
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";
import ListMenu from "./ListMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import axios from "axios";
// import { json } from "react-router-dom";
import { useSessionStorage } from "../../utils/useSessionStorage";
import useAxiosPrivate from "../../utils/useAxiosPrivate";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 5px",
  borderRadius: theme.shape.borderRadius,
  width: "30%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
];

const Header = () => {
  // const { sessionData,updateSessionData } = useSessionStorage("sessionData");
  // const roleId = sessionData?.roleId;

  // const [options, setOptions] = useState([]);
  // const [loading, setLoading] = useState(false);
 
  const axiosClientPrivate = useAxiosPrivate();
  const [data,setData] = useState([]);
  // const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card
  const { sessionData,updateSessionData } = useSessionStorage("sessionData");
  const roleId = sessionData?.roleId;

  // const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const getRoles = async () => {
      try {
        const response = await axiosClientPrivate.get(
          `/menu-access/${roleId}`,
          {
            signal: controller.signal,
          }
        );
        console.log(response.data);
      //   setData(JSON.stringify(response.data)); string
        setData(response.data);
      } catch (err) {
        console.error(err);
        setData([]);
      }
    };

    getRoles();

    return () => {
      controller.abort();
    };
  }, [axiosClientPrivate, roleId]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(`/menu-access/${roleId}`); // Replace '/api/data' with your API endpoint
  //       if (Array.isArray(response.data)) {
  //         // Map over each item and combine menuName and childMenus into a single string
  //         const options = response.data.map(item => ({
  //           label: `${item.menuName} ${item.childMenus.map(child => child.name).join(' ')}`,
  //           data: item // Optionally, you can store the full item data for later use
  //         }));
  //         console.log(response.data);
  //         setOptions(options);
  //       } else {
  //         console.error('Invalid response data format: expected array');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, [roleId]);

  // alert(JSON.stringify(options));

  const [open, setOpen] = useState(false);

  const [openItem, setOpenItem] = useState(false);

  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleClick = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const handleDrawerOpen = () => {
    setToggleDrawer(true);
  };

  const handleDrawerClose = () => {
    setToggleDrawer(false);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "cornflowerblue" }}>
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={toggleDrawer} onClose={handleDrawerClose}>
            <ListMenu handleClick={handleClick} openItem={openItem} />
          </Drawer>
          OHCTECH
        </Typography>
        <MedicationIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <Autocomplete
            options={top100Films}
            id="auto-complete"
            autoComplete
            includeInputInList
            renderInput={(params) => (
              <TextField {...params} label="Search..." variant="standard" />
            )}
          />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src=""
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src=""
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="subtitle2">John</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default Header;
