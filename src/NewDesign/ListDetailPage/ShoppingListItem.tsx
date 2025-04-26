import { useState } from "react";
import "./ListDetailPage.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteItem } from "./ShoppingListItemLogic";

export default function ShoppingListItem({
  itemId,
  isChecked,
  onCheckboxChange,
  itemName,
}) {
  const [showDeleteButton, setShowDeleteButton] = useState<boolean>(false);

  const listId: number = parseInt(sessionStorage.getItem("shoppingListId"), 10);

  const handleChange = (event) => {
    const newCheckedValue = event.target.checked;
    onCheckboxChange(itemId, newCheckedValue);
  };

  const toggleDeleteMenu = () => {
    showDeleteButton == false
      ? setShowDeleteButton(true)
      : setShowDeleteButton(false);
  };

  return (
    <div className="shoppingListItemCard">
      <input
        type="checkbox"
        className="inputCheckbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span>{itemName}</span>

      {showDeleteButton == true ? (
        <div className="deleteItemButtonsContainer">
          <span>Delete item?</span>
          <HighlightOffIcon onClick={() => toggleDeleteMenu()} />
          <CheckCircleOutlinedIcon onClick={() => deleteItem(listId, itemId)} />
        </div>
      ) : (
        <DeleteIcon onClick={() => toggleDeleteMenu()} />
      )}
    </div>
  );
}
