import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, padding: 20 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    padding: 7,
    borderWidth: 1,
    borderColor: '#c2c2c2ff',
    borderRadius: 3,
  },

  progress: { fontSize: 14, color: '#555' },

  SoundToggleBtn: {
    marginLeft: 10,
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  soundToggleBtnSoundOn: {
    backgroundColor: '#4CAF50',
  },

  soundToggleBtnSoundOff: {
    backgroundColor: '#b9b9b9ff',
  },





  QuestionTitle:{
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 30,
      textAlign: 'center',
  },
  QuestionSubtitle:{
      fontSize: 16,
      marginBottom: 25,
      textAlign: 'center',
      color: '#555',
  },


  timer: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E91E63'
  },

  cancelText: {
    color: '#F44336',
    fontWeight: 'bold'
  },

  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },

  option: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 8
  },

  optionText: { fontSize: 16 },

  correct: { backgroundColor: '#4CAF50' },
  wrong: { backgroundColor: '#F44336' },

  answerText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold'
  },

  nextButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 8
  },

  nextText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
