import { useState } from "react";

const PhishingLab = ({ goBack }) => {
  const messages = [
    {
      id: 1,
      sender: "Telebirr",
      preview: "Your account has been suspended...",
      content:
        "Telebirr Alert:\n\nYour account is temporarily suspended due to unusual activity.\n\nClick the link below to restore access:\ntelebirr-secure-et.com",
      correctAction: "report",
      explanation:
        "Telebirr does NOT send recovery links via SMS. Reporting this message prevents account compromise."
    },
    {
      id: 2,
      sender: "Ethio Telecom",
      preview: "Monthly data update",
      content:
        "Ethio Telecom:\n\nYour monthly data bundle has been successfully renewed.\n\nThank you for using Ethio Telecom.",
      correctAction: "ignore",
      explanation:
        "This is a legitimate informational message. No action is required."
    }
  ];

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [result, setResult] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState([]);

  const handleAction = (action) => {
    if (!selectedMessage) return;

    const isCorrect = action === selectedMessage.correctAction;

    setResult(isCorrect ? "correct" : "wrong");
    setFeedback(selectedMessage.explanation);

    if (isCorrect && !completed.includes(selectedMessage.id)) {
      setScore((prev) => prev + 1);
    }

    if (!completed.includes(selectedMessage.id)) {
      setCompleted((prev) => [...prev, selectedMessage.id]);
    }
  };

  const resetLab = () => {
    setSelectedMessage(null);
    setResult(null);
    setFeedback("");
    setScore(0);
    setCompleted([]);
  };

  return (
    <div className="quiz-card">
      <button className="back-btn" onClick={goBack}>
        ← Back
      </button>

      <h2>Phishing Simulation Lab</h2>
      <p>Interact with the phone below and decide what to do.</p>

      <div className="phone-frame">
        {!selectedMessage ? (
          <div className="message-list">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="message-item"
                onClick={() => {
                  setSelectedMessage(msg);
                  setResult(null);
                  setFeedback("");
                }}
              >
                <strong>{msg.sender}</strong>
                <p>{msg.preview}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="message-view">
            <button
              className="back-message"
              onClick={() => {
                setSelectedMessage(null);
                setResult(null);
                setFeedback("");
              }}
            >
              ← Messages
            </button>

            <pre>{selectedMessage.content}</pre>

            <div className="sim-actions">
              <button onClick={() => handleAction("click")}>
                🔗 Click Link
              </button>
              <button onClick={() => handleAction("ignore")}>
                ❌ Ignore
              </button>
              <button onClick={() => handleAction("report")}>
                🚩 Report
              </button>
            </div>

            {result && (
              <div className="feedback">
                <p>
                  {result === "correct"
                    ? "✅ Correct decision."
                    : "❌ Risky decision."}
                </p>
                <p>{feedback}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {completed.length === messages.length && (
        <div className="quiz-result">
          <h3>Lab Completed 🧪</h3>
          <p>
            You made the correct decision in <strong>{score}</strong> out of{" "}
            <strong>{messages.length}</strong> simulations.
          </p>
          <button onClick={resetLab}>Retry Lab</button>
        </div>
      )}
    </div>
  );
};

export default PhishingLab;
