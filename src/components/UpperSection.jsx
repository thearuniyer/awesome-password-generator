export default function UpperSection(props) {
  return (
    <>
      <div className="upper-section">
        <h1 className="title">
          Generate an
          <br />
          <span className="title-green">awesome password</span>
        </h1>
        <h2 className="sub-title">Never use an insecure password again.</h2>
        <span id="pwd-slider">
          Length:{" "}
          <label htmlFor="slider" id="slider-number">
            {props.strength}
          </label>
        </span>
        <input
          type="range"
          name="slider"
          id="slider"
          min="8"
          max="20"
          defaultValue={props.strength}
          onChange={props.handleSliderChange}
          className="slider"
        />
        <br />
        <button className="btn" onClick={props.handleClick}>
          Generate passwords
        </button>
      </div>
    </>
  );
}
