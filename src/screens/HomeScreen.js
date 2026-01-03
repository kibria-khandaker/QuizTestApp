import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './HomeScreen.styles';

export default function HomeScreen({ navigateToCategory, goToAbout }) {
  return (
    <View style={styles.centerContainer}>

      {/* ------ Logo / Image ------ */}
      <Image
        source={require('../../assets/icon.png')} // লোগো ফাইল path
        style={styles.logo} // styles দিয়ে size/shape control
        resizeMode="contain"
      />

      <Text style={styles.title}>QuizTest App</Text>
      <Text style={styles.subtitle}>Challenge Your Brain Every Day.</Text>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={navigateToCategory}
      >
        <Text style={styles.mainButtonText}>Start Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.mainButton, styles.aboutButton]}
        onPress={goToAbout}
      >
        <Text style={styles.mainButtonText}>About</Text>
      </TouchableOpacity>
    </View>
  );
}
