import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import Constants from 'expo-constants'; // updated
import { styles } from './AboutScreen.styles';

export default function AboutScreen({ goBack }) {
  const openLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'Cannot open this link');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while opening the link');
    }
  };

  // ✅ Expo SDK 49+ safe
  const appVersion = Constants.expoConfig?.version || '1.0.0';
  const androidCode = Constants.expoConfig?.android?.versionCode || '1';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About QuizTest App</Text>

      <Text style={styles.subtitle}>
        QuizTest is a simple React Native quiz application built with Expo.
        You can select different categories and exams to practice multiple-choice questions.
      </Text>

      <Text style={styles.content}>
        Features:
        {'\n'}• Timer per question
        {'\n'}• Correct/Wrong highlight
        {'\n'}• Sound & Vibration feedback
        {'\n'}• High score tracking
        {'\n'}• Flashcard style UI
      </Text>

      <Text style={styles.content}>
        Future Updates:
        {'\n'}- Login / Signup
        {'\n'}- More categories like Math, English, Physics
        {'\n'}- Randomized questions per exam
      </Text>

      <Text style={styles.developerLink}>
        Developed by:{' '}
        <Text
          style={styles.developerUrl}
          onPress={() => openLink('https://www.netkib.com')}
        >
          netkib.com
        </Text>
        {'  |  '}
        <Text
          style={styles.developerUrl}
          onPress={() => openLink('https://www.kibria.net')}
        >
          kibria.net
        </Text>
      </Text>

      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>


      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 14, color: '#666', textAlign: 'center' }}>
          App Version: {appVersion} (Code: {androidCode})
        </Text>
      </View>
      
    </ScrollView>
  );
}
