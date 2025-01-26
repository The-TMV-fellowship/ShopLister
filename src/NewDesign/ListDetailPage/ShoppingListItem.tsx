import "./ListDetailPage.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function ShoppingListItem({
  childId,
  isChecked,
  onCheckboxChange,
  itemName,
}) {
  const handleChange = (event) => {
    const newCheckedValue = event.target.checked;
    onCheckboxChange(childId, newCheckedValue);
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
      <MoreVertIcon />
    </div>
  );
}
