import CircularProgress from "@mui/material/CircularProgress";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GeneralWave from "../../assets/generalWave.svg";
import "./AddListFormPage.scss";
import { AddListData } from "../../interfaces/types";
import addShoppingList, {
  validateForm,
  validationSchema,
} from "./AddListLogic";

export default function AddListFormPage() {
  const initialValue: AddListData = {
    listname: "",
  };
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const navigateBackToLists = () => {
    navigate("/");
  };

  const handleSubmit = async (values: AddListData) => {
    setLoading(true);
    const validationErrors = await validateForm(values);
    if (Object.keys(validationErrors).length === 0) {
      try {
        addShoppingList(values.listname);
        navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      console.log("Form validation errors:", validationErrors);
    }
  };

  return (
    <div>
      <img src={GeneralWave}></img>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form className="subContainer">
          <div>
            <h1>Create new list</h1>
            <div className="formInput">
              <div className="inputFieldContainer">
                <ListAltIcon className="inputIconAccent" />
                <div className="seperatorLine"></div>
                <Field
                  name="listname"
                  placeholder="name your list"
                  className="inputField"
                />
              </div>
              <ErrorMessage
                name="listname"
                component="div"
                className="error-message"
              />
            </div>
          </div>

          <div className="bottomPart">
            <button type="submit" disabled={loading} className="buttonBottom">
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Create list"
              )}
            </button>
            <a onClick={() => navigateBackToLists()}>Cancel</a>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
