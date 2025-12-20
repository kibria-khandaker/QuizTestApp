import React, { useState } from 'react';
import QuizScreen from './src/screens/QuizScreen';
import ResultScreen from './src/screens/ResultScreen';

export default function App() {
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const restartQuiz = () => {
    setScore(0);
    setQuizFinished(false);
  };

  return quizFinished ? (
    <ResultScreen
      score={score}
      restartQuiz={restartQuiz}
    />
  ) : (
    <QuizScreen
      setScore={setScore}
      finishQuiz={setQuizFinished}
    />
  );
}
