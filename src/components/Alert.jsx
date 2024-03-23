import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Alert() {
  const alert = useContext(ThemeContext);

  const capitalize = (word) => {
    const lower = (word).toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }

  return (
    alert.alertText && <div className={`alert alert-${alert.alertText.type} d-flex justify-content-center position-absolute`} role="alert">
      <strong>{capitalize(alert.alertText.type)}</strong>: {alert.alertText.message}
      </div>
    
  );
}
