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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  mainButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 12,
    width: 200,
    alignItems: 'center',
  },
  aboutButton: {
    backgroundColor: '#93afbaff',
    marginTop: 15,
  },
  mainButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
