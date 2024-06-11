import React, { useState } from "react";
import {
  Box,
  // Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
  styled,
} from "@mui/material";
// import {
//   AssignmentInd,
//   Assignment,
//   Settings,
//   Info,
//   People,
//   LocalOffer,
//   HealthAndSafety,
//   ManageAccounts,
//   LocalHospital,
//   MenuBook,
// } from "@mui/icons-material";
// import Drawer from "@mui/material/Drawer";
// import LogoutIcon from "@mui/icons-material/Logout";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

// import DutyRooster from '../../assets/images/DutyRooster.png';
// import Inventory from '../../assets/images/Inventory.png'
import OPDSetupMaster from '../../assets/images/OPS Setup Master.png'
// import StoreIssue from '../../assets/images/Store Issue.png'
import PatientManagement from '../../assets/images/Patient Management.png'
// import Reporting from '../../assets/images/Reporting.png'
import DataSetup from '../../assets/images/Data Setup.png'
// import BioWaste from '../../assets/images/Bio-Waste.png'
// import ChronicIllnessMaster from '../../assets/images/Chronic Illness Master.png'
import Logout from '../../assets/images/Logout.png'


import useAxiosPrivate from "../../utils/useAxiosPrivate";
// import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../utils/useSessionStorage";
import { useEffect } from "react";
import MuiDrawer from '@mui/material/Drawer';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
// }));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    // flexShrink: 0,
    // whiteSpace: 'nowrap',
    // boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SideBar1 = () => {


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [isCollapse, setIsCollapse] = React.useState(false);
  const [isopen,setIsOpen]=useState(false);
  
  const handleCollapse = (index) => {
    setIsCollapse((prevOpen) => (prevOpen === index ? null : index));
  };
  const handleOpen = (index) => {
    setIsOpen((prevOpen) => (prevOpen === index ? null : index));
  };

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const sidebararr = [
  //   {
  //     images: DutyRooster,
  //     title: "Duty Roster",
  //     children: [
  //       { 
  //         title: "Duty Roster 1", 
  //         subchild: ['Child 1', 'Child 2'] 
  //       }
  //     ],
  //   },
  //     {
  //       images: PatientManagement,
  //       title: "Patient Management",
  //       children: [
  //         {
  //           title:'Patient Management 1',
  //           subchild:[ 'Child 2', 'Child 3']
  //         }
  //       ]
  //     },
  //     {
  //       images: DataSetup,
  //       title: "Data Setup",
  //       children: [
  //         {
  //           title:'Data Setup 1',
  //           subchild:[ 'Child 2', 'Child 3']
  //         }
  //       ]
  //     },
  //     {
  //       images: OPSSetupMaster,
  //       title: "OPS Setup Master",
  //       children: [
  //         { 
  //          title:'Master',
  //          subchild:[ 'Child 2', 'Child 3']
  //         }
  //       ]
  //     },
  //     {
  //       images: ChronicIllnessMaster,
  //       title: "Chronic illness Master",
  //       children: [
  //       {
  //         title:'Chronic illness Master 1',
  //         subchild:[ 'Child 2', 'Child 3']
  //       }
  //       ]
  //     },
  //     {
  //         images: StoreIssue,
  //         title: "Store Issue",
  //         children: [
  //           {
  //             title:'Store Issue 1',
  //             subchild:[ 'Child 2', 'Child 3']
  //           }
  //           ]
  //     },
  //     {
  //         images: Inventory,
  //         title: "Inventory",
  //         children: [
  //           {
  //             title:'Inventory 1',
  //             subchild:[ 'Child 2', 'Child 3']
  //           }
  //           ]
  //     },
  //     {
  //         images: BioWaste,
  //         title: "Bio-Waste",
  //         children: [
  //           {
  //             title:'Bio-Waste 1',
  //             subchild:[ 'Child 2', 'Child 3']
  //           }
  //           ]
  //       },
  //       {
  //         images: Reporting,
  //         title: "Reporting",
  //         children: [
  //           {
  //             title:'Reporting 1',
  //             subchild:[ 'Child 2', 'Child 3']
  //           }
  //           ]
  //       },
  // ];



  // vikas
   //  cosnt [data,setData] = useState([]);
   const axiosClientPrivate = useAxiosPrivate();
   const [data, setData] = useState([]);
  //  const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card
   const { sessionData, updateSessionData } = useSessionStorage("sessionData");
   const roleId = sessionData?.roleId;
 
  //  const [expandedItems, setExpandedItems] = useState([]);
  //  const handleItemClick = (index) => {
  //    // Toggle the expansion state of the clicked list item
  //    const newExpandedItems = [...expandedItems];
  //    newExpandedItems[index] = !newExpandedItems[index];
  //    setExpandedItems(newExpandedItems);
  //  };
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
            console.log("side bar menu: ",response.data),
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


// new 
  
const SidebarMap = {
  DataSetup: DataSetup,
  OPDSetupMaster: OPDSetupMaster,
  PatientManagement : PatientManagement,
//   CMO: chiefmedoff,
//   EMP : employee,
//   PHY :  pharmacy
};


  return (
    <Box  
      sx={{
        width: isMobile ? "100%" : 250,
        height: "100vh",
        backgroundColor: "white",
        color: "#45474B",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "width 0.2s ease-in-out",
        border: "10px",
      }}
    >
    <Drawer variant="permanent" open={open}>
      <Divider />
      <List>
      {data.map((item, index) => (
        <React.Fragment key={item.Id}>
          <ListItem disablePadding onClick={() => handleCollapse(index)}>
            <ListItemButton>
              <ListItemIcon>
               <img src={SidebarMap[item.iconText]} width="20"/>
              </ListItemIcon>
              <ListItemText  primary={item.menuName} />
              {item.childMenus && (isCollapse === index ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </ListItem>
          {item.childMenus && (
            <Collapse in={isCollapse === index} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.childMenus.map((secondItem, childIndex) => (
                  <React.Fragment key={secondItem.Id}>
                    <ListItem disablePadding onClick={() => handleOpen(childIndex)}>
                      <ListItemButton to={`${secondItem.menuUrl}`}>
                       {/* <ListItemIcon>
                          <img src={met.images} width="20"/>
                        </ListItemIcon>*/}

                        {/*<ListItemText primary={secondItem.name} />*/}
                        
                        <ListItemText primary={secondItem.name} />
                      
                        {secondItem.childMenus.length>0 ? secondItem.childMenus && (isopen === childIndex ? <ExpandLess /> : <ExpandMore />) : ''}
                      </ListItemButton>
                    </ListItem>
                    {secondItem.childMenus && (
                      <Collapse in={isopen === childIndex} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ paddingLeft: '56px' }}>
                          {secondItem.childMenus.map((thirdItem) => (
                            <ListItem key={thirdItem.Id} disablePadding>
                              <ListItemButton to={`${secondItem.menuUrl}`}>
                                {/* <ListItemIcon>
                                  {met.images}
                                </ListItemIcon> 

                                <ListItemText primary={thirdItem.name} />*/}
                                
                                  <ListItemText primary={thirdItem.name} />
                            
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
     </List>

        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img src={Logout} width="20"/>
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
    </Box>
  );
};

export default SideBar1;
