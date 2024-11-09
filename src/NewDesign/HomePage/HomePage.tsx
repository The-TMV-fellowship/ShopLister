import MoreVertIcon from "@mui/icons-material/MoreVert";
import GeneralWave from "../../assets/generalWave.svg";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";

export default function () {
  const navigate = useNavigate();

  const navigateAddlist = () => {
    navigate("/addlist");
  }

  const navigateListDetailPage = () => {
    navigate("/shoppinglist");
  }

  return (
    <div>
      <img src={GeneralWave} alt="" />
      <div className="subContainer">
        <h1>My Lists</h1>
        <div>
          <div className="shoppingListCard" onClick={() => navigateListDetailPage()}>
            <div className="shoppinglistCardSubPart">
              <span>Listname</span>
              <MoreVertIcon />
            </div>
            <div className="shoppinglistCardSubPart">
              <span>Progress bar placeholder</span>
              <span>0/0</span>
            </div>
          </div>
        </div>
        <button onClick={() => navigateAddlist()}>+ New list</button>
      </div>
    </div>
  );
}
