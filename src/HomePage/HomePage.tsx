import ShoppingListCard from "./ShoppingListCard";
import './HomePage.scss';
import MenuIcon from '@mui/icons-material/Menu';

export default function HomePage() {
  return (
    <>
        <div className="homepageheader">
          <MenuIcon/> <span className="homepageheader__pagedescription">Your shoppinglists</span>
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
