import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './HomeScreen.styles';

export default function HomeScreen({ navigateToCategory, goToAbout }) {
  return (
    <View style={styles.centerContainer}>
      <Text style={styles.title}>Quiz Test App</Text>
      <Text style={styles.subtitle}>Select Your Journey </Text>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={navigateToCategory}
      >
        <Text style={styles.mainButtonText}>Go For Exam</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.mainButton, styles.aboutButton]}
        onPress={goToAbout}
      >
        <Text style={styles.mainButtonText}>About App</Text>
      </TouchableOpacity>
    </View>
  );
}
