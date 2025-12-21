import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigateToCategory, goToAbout }) {
  return (
    <View style={styles.centerContainer}>
      <Text style={styles.title}>QuizTest App</Text>
      <Text style={styles.subtitle}>Select a Category to Start</Text>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={navigateToCategory} // Go to CategoryScreen
      >
        <Text style={styles.mainButtonText}>Go For Exam</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.mainButton, { backgroundColor: '#4CAF50', marginTop: 15 }]}
        onPress={goToAbout} // Optional About page
      >
        <Text style={styles.mainButtonText}>About App Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 16, marginBottom: 20, textAlign: 'center', color: '#555' },
  mainButton: {
    backgroundColor: '#2196F3',
    padding: 20,
    borderRadius: 12,
    width: 200,
    alignItems: 'center',
  },
  mainButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
