import { useNavigate } from "react-router-dom";

export default function ListDetailPage() {
  const navigate = useNavigate();

  const navigateBackToLists = () => {
    navigate("/");
  }

  return (
    <div>
      <h1>List name</h1>
      <div>
        <div>
          <span>Checkbox placeholder</span>
          <span>Item name</span>
          <span>Options placeholder</span>
        </div>
      </div>
      <span>Progress bar plaeholder</span>
      <button>+ Add item</button>
      <a onClick={() => navigateBackToLists()}>Cancel</a>
    </div>
  );
}
