import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../_variables.scss";
import WelcomePageWave from "../../assets/WelcomePageWave.svg";
import "./WelcomePage.scss";

export default function WelcomePage() {
  return (
    <div>
      <img src={WelcomePageWave}></img>
      <div className="subContainer">
        <h1>Welcome</h1>
        <p>
          Using shoplister you can save out on paper and instead make your
          shoppinglists digitally.
        </p>
        <a className="button" href="/login">
          Next <ArrowForwardIcon className="arrow" />
        </a>
      </div>
    </div>
  );
}
