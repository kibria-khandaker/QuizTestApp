import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { questions } from '../data/questions';
import OptionButton from '../components/OptionButton';

const { width } = Dimensions.get('window');

export default function QuizScreen({ setScore, finishQuiz }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer === 0) {
      moveNext();
      return;
    }
    const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === questions[currentIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => moveNext(), 1000);
  };

  const moveNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setTimer(10);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishQuiz(true);
    }
  };

  const getOptionColor = (option) => {
    if (!isAnswered) return '#4CAF50';
    if (option === questions[currentIndex].correctAnswer) return 'green';
    if (option === selectedOption && option !== questions[currentIndex].correctAnswer) return 'red';
    return '#4CAF50';
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.timer}>Time: {timer}s</Text>
        <Text style={styles.question}>{questions[currentIndex].question}</Text>

        {questions[currentIndex].options.map((option, index) => (
          <OptionButton
            key={index}
            text={option}
            onPress={() => handleAnswer(option)}
            backgroundColor={getOptionColor(option)}
          />
        ))}

        <Text style={styles.progress}>
          Question {currentIndex + 1} of {questions.length}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' },
  card: {
    width: width - 40,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  timer: { fontSize: 18, color: 'red', textAlign: 'center', marginBottom: 10 },
  question: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  progress: { marginTop: 20, textAlign: 'center', color: 'gray' },
});
