import MenuIcon from "@mui/icons-material/Menu";
import "./HomePage.scss";
import ShoppingListCard from "./ShoppingListCard";

export default function HomePage() {
  return (
    <>
      <div className="homepageHeader">
        <MenuIcon />{" "}
        <span className="homepageHeader__pageDescription">
          Your shoppinglists
        </span>
      </div>

      <ShoppingListCard isGroup={true} checkedOffAmount={5} listSize={5} />
      <ShoppingListCard isGroup={false} checkedOffAmount={2} listSize={4} />
      <ShoppingListCard isGroup={true} checkedOffAmount={7} listSize={10} />
      <ShoppingListCard isGroup={true} checkedOffAmount={1} listSize={5} />
      <ShoppingListCard isGroup={false} checkedOffAmount={11} listSize={20} />
      <button>Add shoppinglist +</button>
    </>
  );
}
