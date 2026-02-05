import {React, useState} from "react";
import "../styles/Learn.css";
import { mockLessons } from '../services/lessonData.js';

const LearnPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const lesson = mockLessons[currentStep];

  const handleAction = (action) => {
    if (action === lesson.correctAction) {
      setFeedback({ type: 'success', text: "Correct! You spotted the scam." });
    } else {
      setFeedback({ type: 'error', text: "Oh no! That's exactly what the scammer wants." });
    }
  };

  return (
    <div className="learn-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {/* 1. Header & Progress */}
      <header>
        <h2>{lesson.title}</h2>
        <div className="progress-bar" style={{ width: '100%', background: '#eee' }}>
          <div style={{ width: '50%', background: '#4CAF50', height: '10px' }}></div>
        </div>
      </header>

      {/* 2. The Lab (The Phone Simulator) */}
      <section className="phone-mockup" style={{ border: '12px solid #333', borderRadius: '30px', padding: '20px', margin: '20px', width: '300px', background: '#fff' }}>
        <div className="status-bar" style={{ fontSize: '12px', marginBottom: '10px' }}>12:30 PM 📶</div>
        <div className="sms-bubble" style={{ background: '#e5e5ea', padding: '10px', borderRadius: '10px' }}>
          <strong>From: {lesson.simulator.sender}</strong>
          <p>{lesson.simulator.content}</p>
        </div>
      </section>

      {/* 3. User Actions */}
      <div className="action-buttons">
        <button onClick={() => handleAction('CLICK')} style={{ backgroundColor: '#ff4444' }}>Click Link</button>
        <button onClick={() => handleAction('BLOCK')} style={{ backgroundColor: '#44bb44' }}>Block Sender</button>
        <button onClick={() => handleAction('IGNORE')}>Ignore</button>
      </div>

      {/* 4. Feedback Modal */}
      {feedback && (
        <div className={`feedback-area ${feedback.type}`} style={{ marginTop: '20px', textAlign: 'center' }}>
          <h3>{feedback.type === 'success' ? "✅ Well Done!" : "❌ Be Careful!"}</h3>
          <p>{lesson.explanation}</p>
          <button onClick={() => setFeedback(null)}>Try Next Lesson</button>
        </div>
      )}
    </div>
  );
};

export default LearnPage;