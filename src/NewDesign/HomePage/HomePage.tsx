import MoreVertIcon from "@mui/icons-material/MoreVert";
import GeneralWave from "../../assets/generalWave.svg";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";

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

export default function () {
  const navigate = useNavigate();

  const navigateAddlist = () => {
    navigate("/addlist");
  };

  const navigateListDetailPage = () => {
    navigate("/shoppinglist");
  };

  return (
    <div>
      <img src={GeneralWave} alt="" />
      <div className="subContainer">
        <h1>My Lists</h1>
        <div>
          <div
            className="shoppingListCard"
            onClick={() => navigateListDetailPage()}
          >
            <div className="shoppinglistCardSubPart">
              <span>Listname</span>
              <MoreVertIcon />
            </div>
            <div className="shoppinglistCardSubPart">
              <BorderLinearProgress variant="determinate" value={50} />
              <span>0/0</span>
            </div>
          </div>
        </div>
        <button onClick={() => navigateAddlist()}>+ New list</button>
      </div>
    </div>
  );
}
