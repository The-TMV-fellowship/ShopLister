import ShoppingListItem from "./ShoppingListItem"
import { useState, useEffect } from "react";

export default function ShoppingListPage() {

  const [checkboxStatus, setCheckboxStatus] = useState({});
  const [percentageChecked, setPercentageChecked] = useState<number>(0);

  useEffect(() => {
    calculateCheckedBoxAmount();
  }, [checkboxStatus]);

  const handleCheckboxChange = (childId, isChecked) => {
    setCheckboxStatus((prevStatus) => ({
      ...prevStatus,
      [childId]: isChecked,
    }));
  };

  const calculateCheckedBoxAmount = () => {
    let amountChecked:number = 0;
    for (const [key, value] of Object.entries(checkboxStatus)) {
      if(value === true){
        amountChecked++;
      }
    }
     setPercentageChecked(Math.round((amountChecked/ Object.keys(checkboxStatus).length) * 100));
  }

  return (
    <div>
      <ShoppingListItem childId="child1" isChecked={checkboxStatus['child1']} onCheckboxChange={handleCheckboxChange} itemName={"Brood"}/>
      <ShoppingListItem childId="child2" isChecked={checkboxStatus['child2']} onCheckboxChange={handleCheckboxChange} itemName={"Coca-cola"}/>
      <ShoppingListItem childId="child3" isChecked={checkboxStatus['child3']} onCheckboxChange={handleCheckboxChange} itemName={"Eieren"}/>
      <p>Checkboxes are {percentageChecked} percent checked</p>
    </div>
  );
}
