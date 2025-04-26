import axios from "axios";

export async function deleteItem(id: number, itemId: number) {
  //const API_BASE_URL = import.meta.env.VITE_API_URL as string;
  const bearerToken = sessionStorage.getItem("token");
  let deletionResponse;

  await axios
    .delete(`http://127.0.0.1:8000/api/ShopLists/` + id + `/item/` + itemId, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      deletionResponse = response.data;
    })
    .catch((error) => {
      console.error("Error fetching shopping list data:", error);
      throw error;
    });
  return deletionResponse;
}
