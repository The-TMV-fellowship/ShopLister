import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import "./ExtraOptionsMenu.scss";

type Anchor = "bottom";

export default function AddMembersMenu() {
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
        <p className="popupMenu__popupTitle">Share this list</p>
        <p>When you share the list you can edit it together with everyone!</p>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(["bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <a onClick={toggleDrawer(anchor, true)}>
            <PersonAddIcon />
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
