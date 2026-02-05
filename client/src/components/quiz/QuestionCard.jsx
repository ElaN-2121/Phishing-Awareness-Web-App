import React, { useState } from "react";

export default function QuestionCard({ questionData, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
    const isCorrect = index === questionData.correct;
    onAnswer(isCorrect, questionData.explanation);
  };

  return (
    <div className="question-card" style={{ maxWidth: "600px", margin: "40px auto", textAlign: "center" }}>
      <h3>{questionData.question}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
        {questionData.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            disabled={selected !== null}
            style={{
              padding: "10px",
              border: selected === i ? "2px solid #4CAF50" : "1px solid #ccc",
              backgroundColor: selected === i ? "#e0ffe0" : "#fff",
              cursor: selected !== null ? "default" : "pointer"
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {selected !== null && <p style={{ marginTop: "20px" }}>{questionData.explanation}</p>}
    </div>
  );
}
