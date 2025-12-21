import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import { Audio } from 'expo-av';

import ResultScreen from './ResultScreen';
import styles from './QuizScreen.styles';

export default function QuizScreen({ questions, goBack }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(questions.length * 15);

  const currentQuestion = questions[current];

  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    if (showResult) return;

    if (timeLeft === 0) {
      setShowResult(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showResult]);

  /* ---------------- SOUND ---------------- */
  const playCorrectSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sounds/correct.mp3')
    );
    await sound.playAsync();
  };

  const playWrongSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sounds/wrong.mp3')
    );
    await sound.playAsync();
  };

  /* ---------------- OPTION PRESS ---------------- */
  const handleOptionPress = (option) => {
    setSelected(option);
    setShowAnswer(true);

    if (option === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
      playCorrectSound();
    } else {
      playWrongSound();
    }
  };

  /* ---------------- NEXT ---------------- */
  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  /* ---------------- CANCEL EXAM ---------------- */
  const handleCancelExam = () => {
    Alert.alert(
      "Cancel Exam?",
      "Are you sure you want to cancel this exam?",
      [
        { text: "No", style: "cancel" },
        { text: "Yes, Cancel", style: "destructive", onPress: goBack }
      ]
    );
  };

  /* ---------------- RESULT ---------------- */
  if (showResult) {
    return (
      <ResultScreen
        score={score}
        restartQuiz={goBack}
      />
    );
  }

  return (
    <ScrollView style={styles.container}>

            <Text style={styles.QuestionTitle}>Quiz Test App</Text>
            <Text style={styles.QuestionSubtitle}>Select your question for exam </Text>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.progress}>
          Question {current + 1} / {questions.length}
        </Text>

        <Text style={styles.timer}>⏱ {timeLeft}s</Text>

        <TouchableOpacity onPress={handleCancelExam}>
          <Text style={styles.cancelText}>✖ Cancel</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.question}>
        {current + 1}. {currentQuestion.question}
      </Text>

      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            showAnswer && option === currentQuestion.correctAnswer && styles.correct,
            selected === option && option !== currentQuestion.correctAnswer && styles.wrong
          ]}
          onPress={() => handleOptionPress(option)}
          disabled={showAnswer}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      {showAnswer && (
        <Text style={styles.answerText}>
          Correct Answer: {currentQuestion.correctAnswer}
        </Text>
      )}

      {showAnswer && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>
            {current === questions.length - 1 ? "Finish Exam" : "Next Question"}
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}
