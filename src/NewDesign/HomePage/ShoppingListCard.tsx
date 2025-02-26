import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteList } from "./HomepageLogic";

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
  const [showDeleteButton, setShowDeleteButton] = useState<boolean>(false);

  const toggleDeleteMenu = () => {
    showDeleteButton == false
      ? setShowDeleteButton(true)
      : setShowDeleteButton(false);
  };

  const setListId = (Id: number) => {
    sessionStorage.setItem("shoppingListId", Id);
    navigate("/shoppinglist");
  };

  const percentageCheckedOff: number = Math.trunc(
    (checkedOffAmount / listSize) * 100
  );

  return (
    <div className="shoppingListCard">
      <div className="shoppinglistCardSubPart">
        <span className="listName" onClick={() => setListId(listId)}>
          {listName}
        </span>
        {showDeleteButton == true ? (
          <div className="deleteItemButtonsContainer">
            <span>Delete item?</span>
            <HighlightOffIcon onClick={() => toggleDeleteMenu()} />
            <CheckCircleOutlinedIcon onClick={() => deleteList(listId)} />
          </div>
        ) : (
          <DeleteIcon onClick={() => toggleDeleteMenu()} />
        )}
      </div>
      <div
        className="shoppinglistCardSubPart"
        onClick={() => setListId(listId)}
      >
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
