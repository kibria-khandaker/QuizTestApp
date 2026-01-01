import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './ResultScreen.styles';

export default function ResultScreen({ score, restartQuiz }) {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const saveHighScore = async () => {
      try {
        const stored = await AsyncStorage.getItem('highScore');
        const previous = stored ? parseInt(stored, 10) : 0;

        if (score > previous) {
          await AsyncStorage.setItem('highScore', score.toString());
          setHighScore(score);
        } else {
          setHighScore(previous);
        }
      } catch (err) {
        console.log('High score save error:', err);
      }
    };

    saveHighScore();
  }, [score]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz 🎉 Finished</Text>
      <Text style={styles.highScore}>High Score : {highScore}</Text>
      <Text style={styles.score}>Your Score : {score}</Text>

      <TouchableOpacity style={styles.restartBtn} onPress={restartQuiz}>
        <Text style={styles.restartBtnText}>Start Again</Text>
      </TouchableOpacity>
    </View>
  );
}
