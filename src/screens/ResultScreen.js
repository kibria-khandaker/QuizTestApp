import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ResultScreen({ score, restartQuiz }) {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const saveHighScore = async () => {
      try {
        const stored = await AsyncStorage.getItem('highScore');
        const previous = stored ? parseInt(stored) : 0;
        if (score > previous) {
          await AsyncStorage.setItem('highScore', score.toString());
          setHighScore(score);
        } else {
          setHighScore(previous);
        }
      } catch (err) {
        console.log(err);
      }
    };
    saveHighScore();
  }, [score]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Finished 🎉</Text>
      <Text style={styles.score}>Your Score: {score}</Text>
      <Text style={styles.highScore}>High Score: {highScore}</Text>
      <Button title="Restart Quiz" onPress={restartQuiz} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontSize:28, marginBottom:20 },
  score: { fontSize:22, marginBottom:10 },
  highScore: { fontSize:20, marginBottom:20, color:'blue' },
});
