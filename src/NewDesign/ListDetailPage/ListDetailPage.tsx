import { useNavigate } from "react-router-dom";
import GeneralWave from "../../assets/generalWave.svg";

export default function ListDetailPage() {
  const navigate = useNavigate();

  const navigateAddlistItem = () => {
    navigate("/addlistitem");
  }

  const navigateBackToLists = () => {
    navigate("/");
  }

  return (
    <div>
      <img src={GeneralWave}></img>
      <h1>List name</h1>
      <div>
        <div>
          <span>Checkbox placeholder</span>
          <span>Item name</span>
          <span>Options placeholder</span>
        </div>
      </div>
      <span>Progress bar plaeholder</span>
      <button onClick={() => navigateAddlistItem()}>+ Add item</button>
      <a onClick={() => navigateBackToLists()}>Cancel</a>
    </div>
  );
}
