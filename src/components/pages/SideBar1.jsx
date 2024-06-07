import React, { useState } from "react";
import {
  Box,
  Typography,
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
import Drawer from "@mui/material/Drawer";
import LogoutIcon from "@mui/icons-material/Logout";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Toolbar from "@mui/material/Toolbar";

import DutyRooster from '../../assets/images/DutyRooster.png';
import Inventory from '../../assets/images/Inventory.png'
import OPSSetupMaster from '../../assets/images/OPS Setup Master.png'
import StoreIssue from '../../assets/images/Store Issue.png'
import PatientManagement from '../../assets/images/Patient Management.png'
import Reporting from '../../assets/images/Reporting.png'
import DataSetup from '../../assets/images/Data Setup.png'
import BioWaste from '../../assets/images/Bio-Waste.png'
import ChronicIllnessMaster from '../../assets/images/Chronic Illness Master.png'
import Logout from '../../assets/images/Logout.png'




const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
}));

const SideBar1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [isCollapse, setIsCollapse] = React.useState(false);
  const [isopen,setIsOpen]=useState(false);
  const handleCollapse = (index) => {
    setIsCollapse((prevOpen) => (prevOpen === index ? null : index));
  };
  const handleopen = (index) => {
    setIsOpen((prevOpen) => (prevOpen === index ? null : index));
  };
  const sidebararr = [
    {
      images: DutyRooster,
      title: "Duty Roster",
      children: [
        { 
          title: "Duty Roster 1", 
          subchild: ['Child 1', 'Child 2'] 
        }
      ],
    },
      {
        images: PatientManagement,
        title: "Patient Management",
        children: [
          {
            title:'Patient Management 1',
            subchild:[ 'Child 2', 'Child 3']
          }
        ]
      },
      {
        images: DataSetup,
        title: "Data Setup",
        children: [
          {
            title:'Data Setup 1',
            subchild:[ 'Child 2', 'Child 3']
          }
        ]
      },
      {
        images: OPSSetupMaster,
        title: "OPS Setup Master",
        children: [
          { 
           title:'Master',
           subchild:[ 'Child 2', 'Child 3']
          }
        ]
      },
      {
        images: ChronicIllnessMaster,
        title: "Chronic illness Master",
        children: [
        {
          title:'Chronic illness Master 1',
          subchild:[ 'Child 2', 'Child 3']
        }
        ]
      },
      {
          images: StoreIssue,
          title: "Store Issue",
          children: [
            {
              title:'Store Issue 1',
              subchild:[ 'Child 2', 'Child 3']
            }
            ]
      },
      {
          images: Inventory,
          title: "Inventory",
          children: [
            {
              title:'Inventory 1',
              subchild:[ 'Child 2', 'Child 3']
            }
            ]
      },
      {
          images: BioWaste,
          title: "Bio-Waste",
          children: [
            {
              title:'Bio-Waste 1',
              subchild:[ 'Child 2', 'Child 3']
            }
            ]
        },
        {
          images: Reporting,
          title: "Reporting",
          children: [
            {
              title:'Reporting 1',
              subchild:[ 'Child 2', 'Child 3']
            }
            ]
        },
  ];

  return (
    <Box  
      sx={{
        width: isMobile ? "100%" : 250,
        height: "100%",
        backgroundColor: "white",
        color: "#45474B",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "width 0.2s ease-in-out",
        border: "10px",
      }}
    >
      <Divider />
      <List>
        {sidebararr.map((met, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding onClick={() => handleCollapse(index)}>
              <ListItemButton>
                <ListItemIcon>
                  <img src={met.images} width="20"/>
                </ListItemIcon>
                <ListItemText>{met.title}</ListItemText>
                {met.children && (isCollapse === index ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </ListItem>
            {met.children && (
              <Collapse in={isCollapse === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {met.children.map((child, childIndex) => (
                    <React.Fragment key={childIndex}>
                      <ListItem disablePadding onClick={() => handleopen(childIndex)}>
                        <ListItemButton>
                          <ListItemIcon>
                          <img src={met.images} width="20"/>
                            {/* {met.images} */}
                          </ListItemIcon>
                          <ListItemText>{child.title}</ListItemText>
                          {child.subchild && (isopen === childIndex ? <ExpandLess /> : <ExpandMore />)}
                        </ListItemButton>
                      </ListItem>
                      {child.subchild && (
                        <Collapse in={isopen === childIndex} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding sx={{paddingLeft: '56px'}}>
                            {child.subchild.map((grandchild, grandchildIndex) => (
                              <ListItem key={grandchildIndex} disablePadding>
                                <ListItemButton>
                                  {/* <ListItemIcon>
                                    {met.images}
                                  </ListItemIcon> */}
                                  <ListItemText>{grandchild}</ListItemText>
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
        <IconButton onClick={() => setIsOpen(isopen)} edge="start">
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(0)}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open !== null && { display: "none" }),
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
    </Box>
  );
};

export default SideBar1;
