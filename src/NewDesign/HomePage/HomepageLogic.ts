import axios from "axios";

export default async function fetchShoppingLists() {
  //const API_BASE_URL = import.meta.env.VITE_API_URL as string;
  const bearerToken = sessionStorage.getItem("token");
  let fetchedLists;

  await axios
    .get(`http://127.0.0.1:8000/api/ShopLists`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      fetchedLists = response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  return fetchedLists;
}

export async function deleteList(listId: number) {
  //const API_BASE_URL = import.meta.env.VITE_API_URL as string;
  const bearerToken = sessionStorage.getItem("token");
  let deletionResponse;

  await axios
    .delete(`http://127.0.0.1:8000/api/ShopLists/` + listId, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      deletionResponse = response.data;
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error fetching shopping list data:", error);
      throw error;
    });
  return deletionResponse;
}
