import MoreVertIcon from "@mui/icons-material/MoreVert";
import GeneralWave from "../../assets/generalWave.svg";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div>
      <img src={GeneralWave} alt="" />
      <div className="subContainer">
        <h1>My Lists</h1>
        <div>
          <div className="shoppingListCard">
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
        <button>+ New list</button>
      </div>
    </div>
  );
}
