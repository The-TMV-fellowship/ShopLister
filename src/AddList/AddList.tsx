import "./AddList.scss";

export default function AddList() {
  return (
    <div className="addListContainer">
      <span>Back button placeholder</span>
      <input
        type="text"
        placeholder="New list"
        className="addListContainer__nameInput"
      ></input>
      <button>create</button>
    </div>
  );
}
