import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './AboutScreen.styles';

export default function AboutScreen({ goBack }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

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

      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
