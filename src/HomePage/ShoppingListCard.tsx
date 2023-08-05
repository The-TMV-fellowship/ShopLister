import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import "./ShoppingListCard.scss";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  width: "80%",
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

function ShoppingListCard({
  isGroup,
  checkedOffAmount,
  listSize,
}: {
  isGroup: boolean;
  checkedOffAmount: number;
  listSize: number;
}) {
  const percentageCheckedOff: number = Math.trunc(
    (checkedOffAmount / listSize) * 100
  );

  return (
    <a href="/shoppinglist" className="ShoppingListCard">
      <div className="ShoppingListCard__TopRow">
        <span className="ShoppingListCard__Title">
          Shoppinglist voor de vrijdag
        </span>
        {isGroup === true ? <GroupsIcon /> : <PersonIcon />}
      </div>
      <div className="ShoppingListCard__BottomRow">
        <BorderLinearProgress
          variant="determinate"
          value={percentageCheckedOff}
        />
        <span>
          {checkedOffAmount}/{listSize}
        </span>
      </div>
    </a>
  );
}

export default ShoppingListCard;
