import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import { AddItemFormData } from "../interfaces/types";
import "./ExtraOptionsMenu.scss";

type Anchor = "bottom";

export default function AddItemsMenu() {
  const initialValues: AddItemFormData = {
    itemName: "",
  };

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

  const handleSubmit = async (values: AddItemFormData) => {
    console.log("Button is clicked");
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="popupMenu">
        <p className="popupMenu__popupTitle">Add an item to the list</p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          <Form className="form">
            <div className="itemFormField">
              <label htmlFor="username" className="itemFormField__label">
                Item name
              </label>
              <Field
                type="itemName"
                name="itemName"
                className="itemFormField__field"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
            </div>

            <button type="submit" className="itemFormField__submit">
              Add item
            </button>
          </Form>
        </Formik>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(["bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)}>Add item +</button>
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
