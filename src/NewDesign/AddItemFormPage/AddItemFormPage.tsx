import { useNavigate } from "react-router-dom";
import GeneralWave from "../../assets/generalWave.svg";
import ListAltIcon from "@mui/icons-material/ListAlt";
import "./AddItemFormPage.scss";

export default function AddItemFormPage() {
  const navigate = useNavigate();

  const navigateBackToList = () => {
    navigate("/shoppinglist");
  };

  return (
    <div>
      <img src={GeneralWave}></img>
      <div className="subcontainer">
        <h1>New Item</h1>
        <div className="formInput">
          <div className="inputFieldContainer">
            <ListAltIcon className="inputIconAccent" />
            <div className="seperatorLine"></div>
            <input
              type="text"
              name="listname"
              placeholder="name your item"
              className="inputField"
            />
          </div>
        </div>
        <button>+ Add item</button>
        <a onClick={() => navigateBackToList()}>Cancel</a>
      </div>
    </div>
  );
}
