import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
  },
  titleInput: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '800',
    marginBottom: 30,
  },
  headerInput: {
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#E9E8E8',
    color: '#000',
    borderRadius: 13,
    padding: 5,
    height: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginBottom: 10,
  },
  toggleSecure: {
    fontSize: 12,
    textAlign: 'right',
    color: '#505050',
  },
  separator: {
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#327AC2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
  },
  helperText: {
    textAlign: 'center',
    marginTop: 5,
  },
  helperTextNavigation: {
    textDecorationLine: 'underline',
    color: '#327AC2',
    fontWeight: '600',
  },
});
