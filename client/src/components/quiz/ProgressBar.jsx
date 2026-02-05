import React from "react";

export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;
  return (
    <div style={{ width: "100%", background: "#eee", height: "10px", marginTop: "20px" }}>
      <div style={{ width: `${percentage}%`, height: "100%", background: "#4CAF50" }}></div>
    </div>
  );
}
