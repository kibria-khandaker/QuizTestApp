import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen({ goBack }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>

      <Text style={styles.title}>About QuizTest App</Text>
      <Text style={styles.subtitle}>
        QuizTest is a simple React Native quiz application built with Expo. 
        You can select different categories and exams to practice multiple-choice questions.
      </Text>

      <Text style={styles.content}>
        Features:
        {'\n'}- Timer per question
        {'\n'}- Correct/Wrong highlight
        {'\n'}- Sound & Vibration feedback
        {'\n'}- High score tracking
        {'\n'}- Flashcard style UI
      </Text>

      <Text style={styles.content}>
        Future Updates:
        {'\n'}- Login / Signup
        {'\n'}- More categories like Math, English, Physics
        {'\n'}- Randomized questions per exam
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  backButton: {
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20, color: '#555' },
  content: { fontSize: 16, marginBottom: 15, lineHeight: 22 },
});
