import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import QuizScreen from './src/screens/QuizScreen';
import ResultScreen from './src/screens/ResultScreen';

export default function App() {
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const finishQuiz = () => setQuizFinished(true);
  const restartQuiz = () => {
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        {!quizFinished ? (
          <QuizScreen setScore={setScore} finishQuiz={finishQuiz} />
        ) : (
          <ResultScreen score={score} restartQuiz={restartQuiz} />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
