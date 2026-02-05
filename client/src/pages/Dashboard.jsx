import React from "react";

export default function Dashboard() {
  // Mock data
  const username = "Elman";
  const stats = [
    { title: "Quizzes Taken", value: 12 },
    { title: "Average Score", value: "85%" },
    { title: "Lab Challenges", value: 5 },
  ];

  const recentActivities = [
    { type: "MCQ Quiz", score: "90%", date: "Feb 5, 2026" },
    { type: "Lab Challenge", score: "✔", date: "Feb 4, 2026" },
    { type: "MCQ Quiz", score: "75%", date: "Feb 3, 2026" },
  ];

  const badges = [
    { name: "First Quiz", icon: "🏆" },
    { name: "Lab Novice", icon: "🛡️" },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      {/* Greeting */}
      <div>
        <h1>Hello, {username}!</h1>
        <p>Welcome back to your phishing awareness dashboard.</p>
      </div>

      {/* Stats & Progress */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
        {/* Stats Cards */}
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 150px",
              background: "#f5f5ff",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
          </div>
        ))}

        {/* Progress Chart Placeholder */}
        <div
          style={{
            flex: "2 1 300px",
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Progress Over Time</h3>
          <p>Chart placeholder (use Recharts or Chart.js)</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ background: "#f0f0ff", padding: "20px", borderRadius: "10px", marginTop: "40px" }}>
        <h3>Recent Activity</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {recentActivities.map((act, i) => (
            <li key={i} style={{ marginBottom: "10px" }}>
              <strong>{act.type}</strong> - {act.score} ({act.date})
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions & Badges */}
      <div style={{ display: "flex", gap: "20px", marginTop: "40px", flexWrap: "wrap" }}>
        {/* Quick Actions */}
        <div
          style={{
            flex: "1 1 200px",
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Quick Actions</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button style={{ padding: "10px" }}>Take a Quiz</button>
            <button style={{ padding: "10px" }}>Start Lab Challenge</button>
            <button style={{ padding: "10px" }}>View Learning Material</button>
          </div>
        </div>

        {/* Badges */}
        <div
          style={{
            flex: "1 1 200px",
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Badges</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
            {badges.map((badge, i) => (
              <div
                key={i}
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  background: "#e5e5ff",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "24px" }}>{badge.icon}</span>
                <p>{badge.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
