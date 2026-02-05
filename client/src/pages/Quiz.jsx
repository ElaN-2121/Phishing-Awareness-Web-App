import React, { useState } from "react";
import SectionSelector from "../components/quiz/SelectionSelector";
import QuestionCard from "../components/quiz/QuestionCard";
import MobileLab from "../components/quiz/MobileLab";
import ProgressBar from "../components/quiz/ProgressBar";
import ResultPage from "../components/quiz/ResultPage";
import { section1Data } from "../services/McqData";
import {mockLessons} from "../services/lessonData";

export default function QuizPage() {
  const [sectionType, setSectionType] = useState(null); // 'mcq' or 'lab'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!sectionType) {
    return <SectionSelector onSelect={setSectionType} />;
  }

  const questions = sectionType === "mcq" ? section1Data.mcqQuestions : mockLessons;
  const CurrentQuestion = sectionType === "mcq" ? QuestionCard : MobileLab;

  const handleAnswer = (isCorrect, explanation) => {
    if (isCorrect) setScore(score + 1);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setSectionType(null);
  };

  if (showResult) {
    return <ResultPage score={score} total={questions.length} onRetry={handleRetry} />;
  }

  return (
    <div className="quiz-page" style={{ padding: "20px" }}>
      <CurrentQuestion questionData={questions[currentIndex]} onAnswer={handleAnswer} />
      <ProgressBar current={currentIndex + 1} total={questions.length} />
    </div>
  );
}
