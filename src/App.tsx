import "./App.css";
import Header from "./Header/Header";
import ShoppingListCard from "./HomePage/ShoppingListCard";

function App() {
  return (
    <>
      <Header></Header>
      <ShoppingListCard isGroup={true} />
      <ShoppingListCard isGroup={false} />
      <ShoppingListCard isGroup={true} />
      <ShoppingListCard isGroup={true} />
      <ShoppingListCard isGroup={false} />
    </>
  );
}

export default App;
