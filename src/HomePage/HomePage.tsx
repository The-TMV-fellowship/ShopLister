import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import "./HomePage.scss";
import fetchShoppingLists from "./HomepageLogic";
import ShoppingListCard from "./ShoppingListCard";

export default function HomePage() {
  const [lists, setLists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedLists = await fetchShoppingLists();
        setLists(fetchedLists);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="homepageHeader">
        <HamburgerMenu />
        <span className="homepageHeader__pageDescription">
          Your shoppinglists
        </span>
      </div>
      {lists !== null ? (
        lists.map((list) => (
          <ShoppingListCard
            key={list.id} // Assuming each list has a unique identifier
            listId={list.id}
            listName={list.name}
            isGroup={true}
            checkedOffAmount={5}
            listSize={5}
          />
        ))
      ) : (
        <span>You currently don't have any shoppinglists</span>
      )}
      <a className="button" href="/addlist">
        Add shoppinglist +
      </a>
    </>
  );
}
