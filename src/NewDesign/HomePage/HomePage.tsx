import GeneralWave from "../../assets/generalWave.svg";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";
import ShoppingListCard from "./ShoppingListCard";

export default function () {
  const navigate = useNavigate();

  const navigateAddlist = () => {
    navigate("/addlist");
  };

  return (
    <div>
      <img src={GeneralWave} alt="" />
      <div className="subContainer">
        <h1>My Lists</h1>
        <div>
          <ShoppingListCard />
        </div>
        <button onClick={() => navigateAddlist()} className="buttonBottom">
          + New list
        </button>
      </div>
    </div>
  );
}
