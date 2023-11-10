import axios from "axios";

export async function fetchShoppingLists() {
  const API_BASE_URL = import.meta.env.VITE_API_URL as string;

  await axios.get(`http://127.0.0.1:8000/api/ShopLists`);
}
