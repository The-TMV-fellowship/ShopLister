import axios from "axios";

export function ShoppingListPageLogic(listId: number) {
  //const API_BASE_URL = import.meta.env.VITE_API_URL as string;
  const bearerToken = sessionStorage.getItem("token");

  // Return the axios.get promise
  return axios.get(`http://127.0.0.1:8000/api/ShopLists/` + listId, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching shopping list data:", error);
      throw error; // rethrow the error to propagate it further if needed
    });
}