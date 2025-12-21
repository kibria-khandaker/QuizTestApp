import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },

  title: { 
    fontSize: 28, 
    marginBottom: 20, 
    fontWeight: 'bold' 
  },

  score: { 
    fontSize: 22, 
    marginBottom: 10 
  },

  highScore: { 
    fontSize: 20, 
    marginBottom: 20, 
    color: 'blue' 
  }
});
