import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import "./ShoppingListCard.scss";

function ShoppingListCard({ isGroup }: { isGroup: boolean }) {
  return (
    <div className="ShoppingListCard">
      <div className="ShoppingListCard__TopRow">
        <span className="ShoppingListCard__Title">
          Shoppinglist voor de vrijdag
        </span>
        {isGroup === true ? <GroupsIcon /> : <PersonIcon />}
      </div>
      <div className="ShoppingListCard__BottomRow">
        <span>Progressbar placeholder</span>
        <span>0/0</span>
      </div>
    </div>
  );
}

export default ShoppingListCard;
