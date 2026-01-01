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
      color: '#1b55b6',
  },
  CategorySubtitle:{
      fontSize: 14,
      marginBottom: 20,
      textAlign: 'center',
      color: '#555',
  },
  CategoryFinalBtnText:{
      fontSize: 14,
      marginTop: 50,
      textAlign: 'center',
      color: '#1b55b6',
  },
  categoryCard: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryCardTitle: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 5,
    color: '#1b55b6',
  },
  categoryCardSubTitle:{
    fontSize: 12,
  },
  backButton: {
    padding: 7,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 4,
    color: '#1b55b6',
    fontSize: 14,
    fontWeight: 500,
    borderColor: '#1b55b6',
  },

  examButton: {
    padding: 8,
    backgroundColor: '#e1ecffff',
    borderRadius: 5,
    marginBottom: 8,
  },

  examSelected: {
    backgroundColor: '#89ff8fff',
  },

  examText: {
    fontSize: 14,
    color: '#555',
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
