import { useState } from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import ListMenu from "./ListMenu";
import MenuIcon from "@mui/icons-material/Menu";

const LeftBar = () => {
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
    <>
      {/* <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
                <ListMenu handleClick={handleClick} openItem={openItem} />
            </Box> */}

      <Box flex={0.2} p={2}>
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
      </Box>
    </>
  );
};

export default LeftBar;
