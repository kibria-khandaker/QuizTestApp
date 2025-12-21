import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f2f2f2',
    },
  CategoryTitle:{
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 30,
      textAlign: 'center',
  },
  CategorySubtitle:{
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
      color: '#555',
  },
  CategoryFinalBtnText:{
      fontSize: 14,
      marginTop: 50,
      textAlign: 'center',
      color: '#555',
  },
  categoryCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  backButton: {
    padding: 7,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#939393ff',
    borderRadius: 4,
    color: '#575f66ff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  examButton: {
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 10,
  },

  examSelected: {
    backgroundColor: '#4CAF50',
  },

  examText: {
    fontSize: 16,
  },

  startButton: {
    marginTop: 15,
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },

  startText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  /* 🔥 Final Exam Style */
  finalExamButton: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#FF9800',
    borderRadius: 10,
  },

  finalExamText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
