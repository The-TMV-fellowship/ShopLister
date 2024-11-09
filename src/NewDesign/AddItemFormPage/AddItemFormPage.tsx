import { useNavigate } from "react-router-dom";
import GeneralWave from "../../assets/generalWave.svg";

export default function AddItemFormPage() {
const navigate = useNavigate();

const navigateBackToList = () =>{
  navigate("/shoppinglist")
}


  return (
    <div>
      <img src={GeneralWave}></img>
      <h1>New Item</h1>
      <span>Itemname input field placeholder</span>
      <button>+ Add item</button>
      <a onClick={() => navigateBackToList()}>Cancel</a>
    </div>
  );
}
