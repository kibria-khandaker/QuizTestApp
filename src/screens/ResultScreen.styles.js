import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#fff'
  },

  title: { 
    fontSize: 22, 
    marginBottom: 5, 
    fontWeight: 'bold',
    color: '#1b55b6'
  },

  highScore: { 
    fontSize: 14, 
    marginBottom: 20, 
  },
  
  score: { 
    fontSize: 16, 
    color: '#4CAF50' ,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  restartBtn: {
    backgroundColor: '#2196F3',
    padding: 14,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
  },

  restartBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },



  


});
