import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import GeneralWave from "../../assets/generalWave.svg";
import "./ListDetailPage.scss";
import { fetchShoppingListData } from "./ListDetailPageLogic";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
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
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(144, 201, 243, 1)"
        : "rgba(144, 201, 243, 1)",
  },
}));

export default function ListDetailPage() {
  const navigate = useNavigate();
  const [checkboxStatus, setCheckboxStatus] = useState({});
  const [listData, setListData] = useState(null);
  const [percentageChecked, setPercentageChecked] = useState<number>(0);
  const [userID, setUserID] = useState(null);

  const navigateAddlistItem = () => {
    navigate("/addlistitem");
  };

  const navigateBackToLists = () => {
    navigate("/");
  };

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
    <div>
      <img src={GeneralWave} />
      <div className="testContainer">
        <h1>List name</h1>
        <div>
          <div>
            <div className="shoppingListItemCard">
              <input type="checkbox" className="inputCheckbox" />
              <span>Item name</span>
              <MoreVertIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="bottomPart">
        <BorderLinearProgress
          variant="determinate"
          value={50}
          className="progressBarBottom"
        />
        <button onClick={() => navigateAddlistItem()} className="buttonBottom">
          + Add item
        </button>
        <a onClick={() => navigateBackToLists()}>Return home</a>
      </div>
    </div>
  );
}
