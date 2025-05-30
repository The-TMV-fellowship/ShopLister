import axios from "axios";
import { useNavigate } from "react-router-dom";

export async function fetchShoppingListData() {
  //const API_BASE_URL = import.meta.env.VITE_API_URL as string;
  const bearerToken = sessionStorage.getItem("token");
  let listId = sessionStorage.getItem("shoppingListId");
  let fetchedListData;

  await axios
    .get(`http://127.0.0.1:8000/api/ShopLists/` + listId, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      fetchedListData = response.data;
    })
    .catch((error) => {
      console.error("Error fetching shopping list data:", error);
      throw error;
    });
  return fetchedListData;
}

export async function addItemToList(
  ownerId: number,
  listName: string,
  itemName: string
) {
  //const API_BASE_URL = import.meta.env.VITE_API_URL as string;
  const bearerToken = sessionStorage.getItem("token");
  let listId = sessionStorage.getItem("shoppingListId");
  let fetchedListData;
  let itemData = {
    name: listName,
    content: [itemName],
    ownerID: ownerId,
  };

  await axios
    .put(`http://127.0.0.1:8000/api/ShopLists/` + listId, itemData, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      fetchedListData = response.data;
    })
    .catch((error) => {
      console.error("Error fetching shopping list data:", error);
      throw error;
    });
  return fetchedListData;
}
