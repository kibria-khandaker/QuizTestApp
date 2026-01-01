import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff'},

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

  QuestionTitle:{
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 30,
      textAlign: 'center',
      color: '#1b55b6',
  },
  QuestionSubtitle:{
      fontSize: 14,
      marginBottom: 20,
      textAlign: 'center',
      color: '#555',
  },

  timer: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#E91E63'
  },

  cancelText: {
    fontSize: 12,
    color: '#F44336',
    fontWeight: 'bold'
  },
  progress: { 
    fontSize: 12, 
    color: '#1b55b6' 
  },
  
  SoundToggleBtn: {
    marginLeft: 10,
    padding: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  soundToggleBtnSoundOn: {
    backgroundColor: '#1b55b6',
  },

  soundToggleBtnSoundOff: {
    backgroundColor: '#b9b9b9ff',
  },

  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1b55b6'
  },

  option: {
    padding: 12,
    marginVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 8
  },

  optionText: { fontSize: 14 },

  correct: { backgroundColor: '#5fc062ff' },
  wrong: { backgroundColor: '#ff5a4fff' },

  answerText: {
    marginTop: 15,
    fontSize: 14,
    color: '#4CAF50'
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
    textAlign: 'center',
  }
});
