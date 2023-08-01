import ShoppingListCard from "./ShoppingListCard";
import './HomePage.scss';

export default function HomePage() {
  return (
    <>
      <ShoppingListCard isGroup={true} checkedOffAmount={5} listSize={5} />
      <ShoppingListCard isGroup={false} checkedOffAmount={2} listSize={4} />
      <ShoppingListCard isGroup={true} checkedOffAmount={7} listSize={10} />
      <ShoppingListCard isGroup={true} checkedOffAmount={1} listSize={5} />
      <ShoppingListCard isGroup={false} checkedOffAmount={11} listSize={20} />
    </>
  );
}
