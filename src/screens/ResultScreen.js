import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultScreen({ score, restartQuiz }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Finished 🎉</Text>
      <Text style={styles.score}>Your Score: {score}</Text>
      <Button title="Restart Quiz" onPress={restartQuiz} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontSize:28, marginBottom:20 },
  score: { fontSize:22, marginBottom:20 },
});
