import "./WelcomePage.scss";

export default function AnimatedOrb() {
  const repetitions = 300;

  const elements = Array.from({ length: repetitions }, (_, index) => index);
  return (
    <div className="wrap-container">
      <div className="wrap">
        {elements.map((index) => (
          <div key={index} className="c"></div>
        ))}
      </div>
    </div>
  );
}
