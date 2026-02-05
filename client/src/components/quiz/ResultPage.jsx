import React from "react";

export default function ResultPage({ score, total, onRetry }) {
  const percentage = Math.round((score / total) * 100);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {total} ({percentage}%)</p>
      <button onClick={onRetry} style={{ padding: "10px 20px", marginTop: "20px" }}>Retry Quiz</button>
    </div>
  );
}
