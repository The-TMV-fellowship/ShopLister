import axios from "axios";

export default async function fetchShoppingListData(listId: number) {
  //const API_BASE_URL = import.meta.env.VITE_API_URL as string;
  const bearerToken = sessionStorage.getItem("token");
  let fetchedListData;

  await axios.get(`http://127.0.0.1:8000/api/ShopLists/` + listId, {
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
    return(fetchedListData);
}