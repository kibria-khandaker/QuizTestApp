import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  backButton: {
    padding: 7,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#1b55b6',
    borderRadius: 4,
  },
  backButtonText: {
    color: '#1b55b6',
    fontSize: 14,
    fontWeight: 500,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#1b55b6',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: '#555',
    lineHeight: 22,
  },
  content: {
    fontSize: 14,
    marginBottom: 15,
    lineHeight: 22,
  },
  developerLink:{
    fontSize: 12,
    marginTop: 15,
    marginBottom: 20,
  },
  developerUrl:{
    color: '#1b55b6',
    fontWeight: 'bold',
  },



});
