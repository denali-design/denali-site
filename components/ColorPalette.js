import { useState } from "react";
import data from "../data/color-palette";

export default function ColorPalette(props) {
  const [showAlert, setShowAlert] = useState(false);
  async function copyColor(colorValue) {
    const result =
      (await navigator) && navigator.clipboard.writeText(colorValue);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  console.log("data", data.brand);
  return (
    <>
      <input className="hide" type="text" id="color" />

      {Object.keys(data).map((key) => {
        return (
          <div class="color-palette">
            <div className="color-group">
              <h4 className="color-shade-header">
                {capitalizeFirstLetter(key)}
              </h4>
              {data[key].map((item) => (
                <div
                  className="color"
                  key={item.value}
                  onClick={() => copyColor(item.value)}
                >
                  <div
                    className="color-chip"
                    style={{ backgroundColor: item.value }}
                  ></div>
                  <div className="color-value">
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div id="alert" className={showAlert ? "animate" : ""}>
        <p>Color copied to clipboard</p>
      </div>
    </>
  );
}
