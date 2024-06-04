import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import AddItemsMenu from "./AddItemsMenu";
import AddMembersMenu from "./AddMembersMenu";
import ExtraOptionsMenu from "./ExtraOptionsMenu";
import ShoppingListItem from "./ShoppingListItem";
import { fetchShoppingListData } from "./ShoppingListPageLogic";

export default function ShoppingListPage() {
  const [checkboxStatus, setCheckboxStatus] = useState({});
  const [listData, setListData] = useState(null);
  const [percentageChecked, setPercentageChecked] = useState<number>(0);
  const [userID, setUserID] = useState(null);

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
    const listId: number = parseInt(
      sessionStorage.getItem("shoppingListId"),
      10
    );
    fetchData(listId);
    setUserID(sessionStorage.getItem("userID"));
  }, [checkboxStatus]);

  const fetchData = (listId: number) => {
    fetchShoppingListData(listId)
      .then((data) => setListData(data))
      .catch((error) =>
        console.error("Error fetching shopping list data:", error)
      );
  };

  const handleCheckboxChange = (childId, isChecked) => {
    setCheckboxStatus((prevStatus) => ({
      ...prevStatus,
      [childId]: isChecked,
    }));
  };

  const calculateCheckedBoxAmount = () => {
    let amountChecked: number = 0;
    for (const [key, value] of Object.entries(checkboxStatus)) {
      if (value === true) {
        amountChecked++;
      }
    }
    setPercentageChecked(
      Math.round((amountChecked / Object.keys(checkboxStatus).length) * 100)
    );
  };

  return (
    <div className="shoppingListPage">
      <div className="shoppingListHeader">
        <div className="shoppingListHeader__subPart">
          <a href="/">
            <ArrowBackIcon />
          </a>{" "}
          <span className="shoppingListHeader__listName">
            {listData ? listData.name : "List name"}
          </span>
        </div>
        <div className="shoppingListHeader__subPart">
          <AddMembersMenu />
          <ExtraOptionsMenu />
        </div>
      </div>
      <div>
        <BorderLinearProgress
          variant="determinate"
          value={percentageChecked ? percentageChecked : 0}
        />
        {listData && listData.content.length !== 0 ? (
          listData.content.map((item) => (
            <ShoppingListItem
              key={item}
              childId="child1"
              isChecked={checkboxStatus["child1"]}
              onCheckboxChange={handleCheckboxChange}
              itemName={item}
            />
          ))
        ) : (
          <span>You currently don't have any items in this list.</span>
        )}
      </div>
      {listData ? (
        <AddItemsMenu
          userID={userID}
          shoppingListId={listData.id}
          ShoppingListName={listData.name}
          currentListData={listData.content}
        />
      ) : null}
    </div>
  );
}
