import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import { Audio } from 'expo-av';

import ResultScreen from './ResultScreen';

export default function QuizScreen({ questions, goBack }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // ⏱ Timer (per exam)
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
      // require('../assets/sounds/correct.mp3')
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

            // ✅ Correct always green after answer
            showAnswer &&
              option === currentQuestion.correctAnswer &&
              styles.correct,

            // ❌ Wrong selected red
            selected === option &&
              option !== currentQuestion.correctAnswer &&
              styles.wrong
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
            {current === questions.length - 1
              ? "Finish Exam"
              : "Next Question"}
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },

  progress: { fontSize: 14, color: '#555' },

  timer: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E91E63'
  },

  cancelText: {
    color: '#F44336',
    fontWeight: 'bold'
  },

  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },

  option: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 8
  },

  optionText: { fontSize: 16 },

  correct: { backgroundColor: '#4CAF50' },
  wrong: { backgroundColor: '#F44336' },

  answerText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold'
  },

  nextButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 8
  },

  nextText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
