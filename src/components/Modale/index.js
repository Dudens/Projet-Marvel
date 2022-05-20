import "./index.css";
import { useState } from "react";

const Modale = () => {
  const [showing, setShowing] = useState(false);

  return (
    <>
      <div className="modaleContainer">
        <button
          onClick={() => {
            setShowing(true);
          }}
        >
          click
        </button>
      </div>

      {showing === true ? (
        <div
          className="containerModale"
          onClick={() => {
            setShowing(false);
          }}
        >
          info
        </div>
      ) : null}
    </>
  );
};

export default Modale;