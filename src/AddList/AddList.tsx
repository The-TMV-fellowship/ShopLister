import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddListData } from "../interfaces/types";
import "./AddList.scss";
import addShoppingList, {
  validateForm,
  validationSchema,
} from "./AddListLogic";

export default function AddList() {
  const initialValue: AddListData = {
    listname: "",
  };
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form className="addListContainer">
        <a href="/" className="backArrow">
          <ArrowBackIcon />
        </a>
        <label htmlFor="listname">shoppinglist name</label>
        <Field type="text" name="listname" placeholder="New list" />

        <ErrorMessage
          name="listname"
          component="div"
          className="error-message"
        />
        <button
          type="submit"
          className="loginFormField__submit"
          disabled={loading}
        >
          create new shoppinglist
        </button>
      </Form>
    </Formik>
  );
}
