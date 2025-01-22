import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

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
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(144, 201, 243, 1)"
        : "rgba(144, 201, 243, 1)",
  },
}));

export default function ({
  listId,
  isGroup,
  checkedOffAmount,
  listSize,
  listName,
}: {
  listId: number;
  isGroup: boolean;
  checkedOffAmount: number;
  listSize: number;
  listName: string;
}) {
  const navigate = useNavigate();

  const setListId = (Id: number) => {
    sessionStorage.setItem("shoppingListId", Id);
    navigate("/shoppinglist");
  };

  const percentageCheckedOff: number = Math.trunc(
    (checkedOffAmount / listSize) * 100
  );

  return (
    <div className="shoppingListCard" onClick={() => setListId(listId)}>
      <div className="shoppinglistCardSubPart">
        <span className="listName">{listName}</span>
        <MoreVertIcon />
      </div>
      <div className="shoppinglistCardSubPart">
        <BorderLinearProgress
          variant="determinate"
          value={percentageCheckedOff}
        />
        <span>
          {" "}
          {checkedOffAmount}/{listSize}
        </span>
      </div>
    </div>
  );
}
