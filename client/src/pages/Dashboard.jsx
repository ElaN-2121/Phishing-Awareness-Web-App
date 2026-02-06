import React, { useState } from "react";
import Certificate from "../components/Certificate";
import "../styles/dashboard.css";

// Mock data (replace with real user data later)
const mockStats = {
  quizzesCompleted: 12,
  labsCompleted: 5,
  averageScore: 100, // set to 100 to enable certificate
  level: "Intermediate",
};

const totalQuizzes = 12;
const totalLabs = 5;

const mockProgress = [
  { type: "Knowledge Quiz", progress: 100 },
  { type: "Real-World Quiz", progress: 100 },
  { type: "Phishing Lab", progress: 100 },
];

const mockRecentLabs = [
  { id: 1, scenario: "Telebirr SMS", result: "Correct" },
  { id: 2, scenario: "CBE WhatsApp", result: "Correct" },
  { id: 3, scenario: "Ethio Telecom SMS", result: "Correct" },
];

const DashboardMain = () => {
  const [stats, setStats] = useState(mockStats);
  const [progress, setProgress] = useState(mockProgress);
  const [recentLabs, setRecentLabs] = useState(mockRecentLabs);

  const [showCertificate, setShowCertificate] = useState(false);

  // Check if all questions are correct
  const allCorrect =
    stats.quizzesCompleted === totalQuizzes &&
    stats.labsCompleted === totalLabs &&
    stats.averageScore === 100;

  return (
    <main className="dashboard-main">
      <h1>Welcome to Your Dashboard</h1>

      {/* Overview Cards */}
      <div className="overview-cards">
        <div className="card">
          <h3>Quizzes Completed</h3>
          <p>{stats.quizzesCompleted}</p>
        </div>
        <div className="card">
          <h3>Labs Completed</h3>
          <p>{stats.labsCompleted}</p>
        </div>
        <div className="card">
          <h3>Average Score</h3>
          <p>{stats.averageScore}%</p>
        </div>
        <div className="card">
          <h3>Phishing Level</h3>
          <p>{stats.level}</p>
        </div>
      </div>

      {/* Progress Section */}
      <section className="progress-section">
        <h2>Your Progress</h2>
        {progress.map((item, idx) => (
          <div key={idx} className="progress-bar-container">
            <span>{item.type}</span>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
            <span>{item.progress}%</span>
          </div>
        ))}
      </section>

      {/* Recent Labs */}
      <section className="recent-labs">
        <h2>Recent Lab Attempts</h2>
        <ul>
          {recentLabs.map((lab) => (
            <li
              key={lab.id}
              className={`lab-result ${lab.result.toLowerCase()}`}
            >
              <span>{lab.scenario}</span>
              <span className="result-badge">{lab.result}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <button>🧠 Start Knowledge Quiz</button>
        <button>🌍 Start Real-World Quiz</button>
        <button>🧪 Open Phishing Lab</button>

        {allCorrect ? (
          <button onClick={() => setShowCertificate(true)}>
            🎓 Generate Certificate
          </button>
        ) : (
          <button
            disabled
            title="Answer all questions correctly to unlock certificate"
          >
            🎓 Generate Certificate
          </button>
        )}
      </section>

      {/* Certificate Modal */}
      {showCertificate && (
        <div
          className="certificate-modal"
          onClick={(e) => {
            // Close modal only if clicking the background, not the certificate itself
            if (e.target.className === "certificate-modal")
              setShowCertificate(false);
          }}
        >
          <Certificate level={stats.level} />
        </div>
      )}
    </main>
  );
};

export default DashboardMain;
