import GeneralWave from "../../assets/generalWave.svg";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";
import ShoppingListCard from "./ShoppingListCard";
import fetchShoppingLists from "./HomepageLogic";
import { useEffect, useState } from "react";

export default function () {
  const navigate = useNavigate();
  const [lists, setLists] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const fetchedLists = await fetchShoppingLists();
      setLists(fetchedLists);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const navigateAddlist = () => {
    navigate("/addlist");
  };

  return (
    <div>
      <img src={GeneralWave} alt="" />
      <div className="subContainer">
        <h1>My Lists</h1>
        <div>
          {lists !== null ? (
            lists.map((list) => (
              <ShoppingListCard
                key={list.id}
                listId={list.id}
                listName={list.name}
                isGroup={true}
                checkedOffAmount={0}
                listSize={list.content.length}
              />
            ))
          ) : (
            <span>You currently don't have any shoppinglists</span>
          )}
        </div>
        <button onClick={() => navigateAddlist()} className="buttonBottom">
          + New list
        </button>
      </div>
    </div>
  );
}
