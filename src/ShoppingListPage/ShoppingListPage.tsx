import ShoppingListItem from "./ShoppingListItem"
import { useState } from "react";

export default function ShoppingListPage() {

  const [checkboxStatus, setCheckboxStatus] = useState({});

  const handleCheckboxChange = (childId, isChecked) => {
    setCheckboxStatus((prevStatus) => ({
      ...prevStatus,
      [childId]: isChecked,
    }));
  };

  return (
    <div>
      <ShoppingListItem childId="child1" isChecked={checkboxStatus['child1']} onCheckboxChange={handleCheckboxChange} itemName={"Brood"}/>
      <ShoppingListItem childId="child2" isChecked={checkboxStatus['child2']} onCheckboxChange={handleCheckboxChange} itemName={"Coca-cola"}/>
      <ShoppingListItem childId="child3" isChecked={checkboxStatus['child3']} onCheckboxChange={handleCheckboxChange} itemName={"Eieren"}/>
      <p>Checkbox is {checkboxStatus["child1"]  ? 'checked' : 'unchecked'}</p>
    </div>
  );
}
