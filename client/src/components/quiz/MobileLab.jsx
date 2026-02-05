import React, { useState } from "react";

export default function MobileLab({ questionData, onAnswer }) {
  const [selectedAction, setSelectedAction] = useState(null);

  const handleAction = (action) => {
    setSelectedAction(action);
    const isCorrect = action === questionData.correctAction;
    onAnswer(isCorrect, questionData.explanation);
  };

  return (
    <div className="lab-question-card" style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}>
      <h3>{questionData.title}</h3>

      {/* Phone Simulator */}
      <div style={{
        border: "12px solid #333",
        borderRadius: "30px",
        padding: "20px",
        margin: "20px 0",
        background: "#fff"
      }}>
        <div style={{ fontSize: "12px", marginBottom: "10px" }}>12:30 PM 📶</div>
        <div style={{
          background: "#e5e5ea",
          padding: "10px",
          borderRadius: "10px",
          textAlign: "left"
        }}>
          <strong>From: {questionData.simulator.sender}</strong>
          <p>{questionData.simulator.content}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {["CLICK", "BLOCK", "IGNORE"].map((action) => (
          <button
            key={action}
            onClick={() => handleAction(action)}
            disabled={selectedAction !== null}
            style={{
              padding: "10px",
              backgroundColor: action === "BLOCK" ? "#44bb44" : action === "CLICK" ? "#ff4444" : "#ccc",
              cursor: selectedAction !== null ? "default" : "pointer"
            }}
          >
            {action === "CLICK" ? "Click Link" : action === "BLOCK" ? "Block Sender" : "Ignore"}
          </button>
        ))}
      </div>

      {selectedAction && <p style={{ marginTop: "20px" }}>{questionData.explanation}</p>}
    </div>
  );
}
