import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { generalKnowledge } from '../data/generalKnowledge';
import { sports } from '../data/sports';
import { it } from '../data/it';
import QuizScreen from './QuizScreen';

/* 🔀 Random shuffle helper */
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function CategoryScreen({ goToHome }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedExamIndex, setSelectedExamIndex] = useState(null);
  const [currentQuiz, setCurrentQuiz] = useState(null);

  const allCategories = {
    "General Knowledge": generalKnowledge,
    "Sports": sports,
    "IT": it
  };

  const perExam = 10;
  const FINAL_EXAM_QUESTIONS = 20; // 🔥 Final Exam question count

  /* Quiz Screen */
  if (currentQuiz) {
    return (
      <QuizScreen
        questions={currentQuiz}
        goBack={() => setCurrentQuiz(null)}
      />
    );
  }

  /* Exam List Screen */
  if (selectedCategory) {
    const questions = allCategories[selectedCategory];
    const totalQuestions = questions.length;
    const fullExams = Math.floor(totalQuestions / perExam);
    const remainingQuestions = totalQuestions % perExam;

    const exams = Array.from({ length: fullExams }, (_, i) => i);
    if (remainingQuestions > 0) exams.push(fullExams);

    return (
      <ScrollView style={styles.container}>
        {/* Back to Home */}
        <TouchableOpacity onPress={goToHome}>
          <Text style={styles.backButton}>← Back to Home</Text>
        </TouchableOpacity>

        <Text style={styles.categoryTitle}>{selectedCategory}</Text>

        {/* Normal Exams */}
        {exams.map((examIndex) => {
          const start = examIndex * perExam;
          const end = Math.min(start + perExam, totalQuestions);
          const examName = `Exam ${examIndex + 1} (${end - start} Questions)`;

          return (
            <TouchableOpacity
              key={examIndex}
              style={[
                styles.examButton,
                selectedExamIndex === examIndex && styles.examSelected
              ]}
              onPress={() => setSelectedExamIndex(examIndex)}
            >
              <Text style={styles.examText}>{examName}</Text>
            </TouchableOpacity>
          );
        })}

        {/* Start Selected Exam */}
        {selectedExamIndex !== null && (
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => {
              const start = selectedExamIndex * perExam;
              const end = Math.min(start + perExam, totalQuestions);
              setCurrentQuiz(questions.slice(start, end));
            }}
          >
            <Text style={styles.startText}>Start Quiz</Text>
          </TouchableOpacity>
        )}

        {/* 🔥 FINAL EXAM */}
        <TouchableOpacity
          style={styles.finalExamButton}
          onPress={() => {
            const randomQuestions = shuffleArray(questions)
              .slice(0, FINAL_EXAM_QUESTIONS);

            setCurrentQuiz(randomQuestions);
          }}
        >
          <Text style={styles.finalExamText}>
            🎯 Final Exam ({FINAL_EXAM_QUESTIONS} Questions)
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  /* Category List Screen */
  return (
    <ScrollView style={styles.container}>
      {/* Back to Home */}
      <TouchableOpacity onPress={goToHome}>
        <Text style={styles.backButton}>← Back to Home</Text>
      </TouchableOpacity>

      {Object.keys(allCategories).map(category => (
        <TouchableOpacity
          key={category}
          style={styles.categoryCard}
          onPress={() => setSelectedCategory(category)}
        >
          <Text style={styles.categoryTitle}>{category}</Text>
          <Text>Total Questions: {allCategories[category].length}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f2f2f2' },

  categoryCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },

  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },

  backButton: {
    fontSize: 16,
    color: '#007bff',
    marginBottom: 10
  },

  examButton: {
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 10
  },

  examSelected: {
    backgroundColor: '#4CAF50'
  },

  examText: {
    fontSize: 16
  },

  startButton: {
    marginTop: 15,
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 8
  },

  startText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  /* 🔥 Final Exam Style */
  finalExamButton: {
    marginTop: 25,
    padding: 15,
    backgroundColor: '#FF9800',
    borderRadius: 10
  },

  finalExamText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
