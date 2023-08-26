import CategoryIcon from "@mui/icons-material/Category";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import UndoIcon from "@mui/icons-material/Undo";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import "./ExtraOptionsMenu.scss";

type Anchor = "bottom";

export default function ExtraOptionsMenu() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="popupMenu">
        <div className="popupMenu__popupTitle">Manage list</div>
        <ListItem key={"Share list"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary={"Share list"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={"Sort by"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary={"Sort by"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={"show prices"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText primary={"show prices"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={"Uncheck all items"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <UndoIcon />
            </ListItemIcon>
            <ListItemText primary={"Uncheck all items"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={"Delete purchased items"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DeleteForeverIcon />
            </ListItemIcon>
            <ListItemText primary={"Delete purchased items"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(["bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <a onClick={toggleDrawer(anchor, true)}>
            <MoreVertIcon />
          </a>
          <SwipeableDrawer
            PaperProps={{
              sx: {
                borderRadius: "1rem 1rem 0 0",
              },
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
