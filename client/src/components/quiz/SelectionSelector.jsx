import React from "react";

export default function SectionSelector({ onSelect }) {
  return (
    <div className="section-selector" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Choose your quiz type:</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <button onClick={() => onSelect("mcq")} style={{ padding: "10px 20px" }}>Multiple Choice Questions</button>
        <button onClick={() => onSelect("lab")} style={{ padding: "10px 20px" }}>Lab Simulator</button>
      </div>
    </div>
  );
}
