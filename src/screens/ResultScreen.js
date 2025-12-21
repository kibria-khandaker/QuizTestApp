import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './ResultScreen.styles';

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
