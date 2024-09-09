import CircularProgress from "@mui/material/CircularProgress";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import GeneralWave from "../../assets/generalWave.svg";
import "./AddListFormPage.scss";

const handleSubmit = async () => {
  return null;
};

export default function AddListFormPage() {
  const initialValues = {
    listName: "",
  };
  const [loading, setLoading] = useState(false);

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
            <div>
              <Field name="listname" />
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
            <a>Cancel</a>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
