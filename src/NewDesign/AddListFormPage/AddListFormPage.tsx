import CircularProgress from "@mui/material/CircularProgress";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GeneralWave from "../../assets/generalWave.svg";
import "./AddListFormPage.scss";

const handleSubmit = async () => {
  return null;
};

export default function AddListFormPage() {
  const navigate = useNavigate();
  const initialValues = {
    listName: "",
  };
  const [loading, setLoading] = useState(false);

  const navigateBackToLists = () => {
    navigate("/");
  };

  return (
    <div>
      <img src={GeneralWave}></img>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        //validationSchema={validationSchema}
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

          <div>
            <button type="submit" disabled={loading}>
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
