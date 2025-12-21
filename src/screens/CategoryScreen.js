import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import QuizScreen from './QuizScreen';
import { styles } from './CategoryScreen.styles';
import { fetchAllCategories } from '../data/questionsData';

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

  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchAllCategories();
      setCategories(data);
      setLoading(false);
    };
    loadData();
  }, []);

  /* ---------------- QUIZ SCREEN ---------------- */
  if (currentQuiz) {
    return (
      <QuizScreen
        questions={currentQuiz}
        goBack={() => setCurrentQuiz(null)}
      />
    );
  }

  /* ---------------- LOADING ---------------- */
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Loading quizzes...</Text>
      </View>
    );
  }

  /* ---------------- EXAM LIST SCREEN ---------------- */
  if (selectedCategory) {
    const categoryData = categories[selectedCategory];

    const questions = categoryData.questions;
    const perExam = categoryData.perExam;
    const FINAL_EXAM_QUESTIONS = categoryData.finalExamQuestions;

    const totalQuestions = questions.length;
    const fullExams = Math.floor(totalQuestions / perExam);
    const remainingQuestions = totalQuestions % perExam;

    const exams = Array.from({ length: fullExams }, (_, i) => i);
    if (remainingQuestions > 0) exams.push(fullExams);

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.CategoryTitle}>Quiz Test App</Text>
        <Text style={styles.CategorySubtitle}>Select your Exam</Text>

        <Text style={styles.categoryCardTitle}>{selectedCategory}</Text>

        {/* ---------- EXAMS ---------- */}
        {exams.map((examIndex) => {
          const start = examIndex * perExam;
          const end = Math.min(start + perExam, totalQuestions);
          const examName = `Exam ${examIndex + 1} (${end - start} Questions)`;

          return (
            <TouchableOpacity
              key={examIndex}
              style={[
                styles.examButton,
                selectedExamIndex === examIndex && styles.examSelected,
              ]}
              onPress={() => setSelectedExamIndex(examIndex)}
            >
              <Text style={styles.examText}>{examName}</Text>
            </TouchableOpacity>
          );
        })}

        {/* ---------- START EXAM ---------- */}
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

        <Text style={styles.CategoryFinalBtnText}>
          It will be best after practicing all exams
        </Text>

        {/* ---------- FINAL EXAM ---------- */}
        <TouchableOpacity
          style={styles.finalExamButton}
          onPress={() => {
            const randomQuestions = shuffleArray(questions).slice(
              0,
              FINAL_EXAM_QUESTIONS
            );
            setCurrentQuiz(randomQuestions);
          }}
        >
          <Text style={styles.finalExamText}>
            🎯 Final Exam ({FINAL_EXAM_QUESTIONS} Questions)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedCategory(null)}>
          <Text style={styles.backButton}>← Back to Categories</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  /* ---------------- CATEGORY LIST SCREEN ---------------- */
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.CategoryTitle}>Quiz Test App</Text>
      <Text style={styles.CategorySubtitle}>
        Select your category for exam
      </Text>

      {Object.keys(categories).map((category) => (
        <TouchableOpacity
          key={category}
          style={styles.categoryCard}
          onPress={() => setSelectedCategory(category)}
        >
          <Text style={styles.categoryCardTitle}>{category}</Text>
          <Text>
            Total Questions: {categories[category].questions.length}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={goToHome}>
        <Text style={styles.backButton}>← Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
