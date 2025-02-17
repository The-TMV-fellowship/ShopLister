import { useNavigate } from "react-router-dom";
import GeneralWave from "../../assets/generalWave.svg";
import ListAltIcon from "@mui/icons-material/ListAlt";
import "./AddItemFormPage.scss";
import { AddItemFormData, AddItemToForm } from "../../interfaces/types";
import { addItemToList } from "./AddItemFormPageLogic";
import { Field, Form, Formik } from "formik";

export default function AddItemFormPage(values: AddItemToForm) {
  const navigate = useNavigate();

  const initialValues: AddItemFormData = {
    itemName: "",
  };

  const handleSubmit = async (itemToAdd: AddItemFormData) => {
    addItemToList(values.userID, values.ShoppingListName, itemToAdd.itemName);
  };

  const navigateBackToList = () => {
    navigate("/shoppinglist");
  };

  return (
    <div>
      <img src={GeneralWave}></img>
      <div className="subcontainer">
        <h1>New Item</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          <Form>
            <div className="formInput">
              <div className="inputFieldContainer">
                <ListAltIcon className="inputIconAccent" />
                <div className="seperatorLine"></div>
                <Field
                  type="text"
                  name="itemName"
                  placeholder="name your item"
                  className="inputField"
                />
              </div>
            </div>
            <div className="bottomPart">
              <button className="buttonBottom" type="submit">
                + Add item
              </button>
              <a onClick={() => navigateBackToList()}>Cancel</a>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
