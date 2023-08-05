import { useState, useEffect } from "react";
import ShoppingListItem from "./ShoppingListItem";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

export default function ShoppingListPage() {

  const [checkboxStatus, setCheckboxStatus] = useState({});
  const [percentageChecked, setPercentageChecked] = useState<number>(0);

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    width: "100%",
    flexShrink: 0,
    padding: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "green" : "#308fe8",
    },
  }));
  

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
     console.log(checkboxStatus);
  }

  return (
    <div>
       <BorderLinearProgress variant="determinate" value={percentageChecked? percentageChecked : 0}/>
      <ShoppingListItem childId="child1" isChecked={checkboxStatus['child1']} onCheckboxChange={handleCheckboxChange} itemName={"Brood"}/>
      <ShoppingListItem childId="child2" isChecked={checkboxStatus['child2']} onCheckboxChange={handleCheckboxChange} itemName={"Coca-cola"}/>
      <ShoppingListItem childId="child3" isChecked={checkboxStatus['child3']} onCheckboxChange={handleCheckboxChange} itemName={"Eieren"}/>
      <p>Checkboxes are {percentageChecked} percent checked</p>
    </div>
  );
}
