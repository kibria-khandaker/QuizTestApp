import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { questions } from '../data/questions';
import OptionButton from '../components/OptionButton';

export default function QuizScreen({ setScore, finishQuiz }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === questions[currentIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }

    // Auto move to next question after 1 second
    setTimeout(() => {
      setSelectedOption(null);
      setIsAnswered(false);

      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        finishQuiz(true);
      }
    }, 1000);
  };

  const getOptionColor = (option) => {
    if (!isAnswered) return '#4CAF50'; // default green
    if (option === questions[currentIndex].correctAnswer) return 'green';
    if (option === selectedOption && option !== questions[currentIndex].correctAnswer) return 'red';
    return '#4CAF50';
  };

  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  question: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  progress: { marginTop: 20, textAlign: 'center', color: 'gray' },
});
