import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color:'#1b55b6'
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  mainButton: {
    backgroundColor: '#1b55b6',
    padding: 15,
    borderRadius: 12,
    width: 200,
    alignItems: 'center',
  },
  aboutButton: {
    backgroundColor: '#1b55b6',
    marginTop: 15,
  },
  mainButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
