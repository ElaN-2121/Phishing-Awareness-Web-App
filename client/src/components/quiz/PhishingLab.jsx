import { useEffect, useState } from "react";
import { labData } from "../../services/labData";

const QuizLab = ({goBack}) => {
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [vibrate, setVibrate] = useState(true);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVibrate(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const hideNotification = setTimeout(() => {
      setShowNotification(false);
    }, 2500);

    return () => clearTimeout(hideNotification);
  }, []);

  const scenario = labData[index];

  const handleChoice = (choice) => {
    if (choice === scenario.correctAction) {
      setResult("correct");
    } else {
      setResult("wrong");
    }
  };

  const nextScenario = () => {
    setResult(null);
    setIndex((prev) => (prev + 1) % labData.length);
  };

  return (
    <section className="quiz-lab">
      <h2>📱 Real‑Life Scam Practice</h2>
      <p>What would you do if you received this message?</p>
      {showNotification && (
        <div className="notification-preview">
          <strong>{scenario.sender}</strong>
          <p>{scenario.message.slice(0, 45)}...</p>
        </div>
      )}

      <div className="lab-progress">
        <div
          className="lab-progress-bar"
          style={{ width: `${((index + 1) / labData.length) * 100}%` }}
        ></div>
      </div>
      <p>
        {index + 1} of {labData.length} messages
      </p>

      <div className={`phone-frame ${vibrate ? "vibrate" : ""}`}>
        <div className="status-bar">
          <span className="signal">📶</span>
          <span className="time">12:41</span>
          <span className="battery">🔋 78%</span>
        </div>

        <div className="phone-header">{scenario.app}</div>

        <div className="message incoming">
          <strong>{scenario.sender}</strong>
          <p>{scenario.message}</p>
          <span className="timestamp">Just now</span>
        </div>

        <div className="phone-actions">
          <button onClick={() => handleChoice("link")}>Open Link</button>
          <button onClick={() => handleChoice("ignore")}>Ignore</button>
          <button className="report" onClick={() => handleChoice("report")}>
            Report Scam
          </button>
        </div>
      </div>

      {result && (
        <div className={`lab-result ${result}`}>
          {result === "correct" ? "✅ Good choice!" : "❌ Unsafe action."}
          <p>{scenario.explanation}</p>
          <button onClick={nextScenario}>Next Message</button>
        </div>
      )}
      <button className="back-quiz" onClick={goBack}>
          ← Back to Quiz
        </button>
    </section>
  );
};

export default QuizLab;
