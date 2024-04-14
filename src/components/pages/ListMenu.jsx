import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";
import useAxiosPrivate from "../../utils/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../utils/useSessionStorage";
import { useEffect, useState } from "react";

const ListMenu = ({ handleClick, openItem }) => {
  //  cosnt [data,setData] = useState([]);
  const axiosClientPrivate = useAxiosPrivate();
  const [data, setData] = useState([]);
  // const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card
  const { sessionData, updateSessionData } = useSessionStorage("sessionData");
  const roleId = sessionData?.roleId;

  const [expandedItems, setExpandedItems] = useState([]);
  const handleItemClick = (index) => {
    // Toggle the expansion state of the clicked list item
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };
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
           // console.log(response.data);
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

  // alert(data);

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menu List
        </ListSubheader>
      }
    >
      <List>
        {data.map((menu, index) => (
          <ListItem key={index} disablePadding
          sx={{display:'flex',flexDirection:'column',justifyContent:'left',alignItems:'flex-start'}}
          >
            <ListItemButton  onClick={() => handleItemClick(index)}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={menu.menuName} />
             { /*{openItem === 0 ? <ExpandLess /> : <ExpandMore />}*/}
              {expandedItems[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse sx={{marginLeft:'56px'}}  in={expandedItems[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menu.childMenus.map((childmenu, childIndex) => (
                  <ListItemButton  key={childIndex}>
                    {/*<ListItemIcon>
                          <StarBorder />
                         </ListItemIcon>*/}
                    <Link to="/ohcList">
                      <ListItemText primary={childmenu.name} />
                    </Link>
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </ListItem>
        ))}
      </List>
    </List>
  );
};

export default ListMenu;
