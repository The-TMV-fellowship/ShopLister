import "./ShoppingListPage.scss";

export default function ShoppingListPage({
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
    <div
      className={
        isChecked
          ? "shoppingListItem shoppingListItem__lineThrough"
          : "shoppingListItem"
      }
    >
      <div className="shoppingListItem__leftHalf">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        ></input>
        <p>{itemName}</p>
      </div>

      <p>Category Icon</p>
    </div>
  );
}
