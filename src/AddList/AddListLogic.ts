import axios from "axios";
import * as Yup from "yup";
import { AddListData } from "../interfaces/types";

export default async function addShoppingList(listname:string) {
  //const API_BASE_URL = import.meta.env.VITE_API_URL as string;
  const bearerToken = sessionStorage.getItem("token");
  const ownerID = parseInt(sessionStorage.getItem("userID"));
  let listData = {
	"name": listname,
	"content": [],
  "ownerID": ownerID
};

  await axios
    .post(`http://127.0.0.1:8000/api/createShopList`, listData , {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json", // Set the content type if needed
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

export const validationSchema = Yup.object({
  listname: Yup.string().required("A shoppinglist name is required"),
});

export const validateForm = async (values: AddListData) => {
  try {
    await validationSchema.validate(values, { abortEarly: false });
    return {};
  } catch (error) {
    const validationErrors: { [key: string]: string } = {};
    if (error instanceof Yup.ValidationError) {
      error.inner.forEach((err) => {
        if (err.path && err.message) {
          validationErrors[err.path] = err.message;
        }
      });
    }
    return validationErrors;
  }
};
