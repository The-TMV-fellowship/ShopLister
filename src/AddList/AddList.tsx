import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./AddList.scss";

export default function AddList() {
  return (
    <div className="addListContainer">
      <a href="/">
        <ArrowBackIcon />
      </a>
      <input
        type="text"
        placeholder="New list"
        className="addListContainer__nameInput"
      ></input>
      <button>create</button>
    </div>
  );
}
