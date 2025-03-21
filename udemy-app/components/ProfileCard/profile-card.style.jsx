import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  header: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textContent: {
    flex: 1,
    paddingLeft: 15,
  },
  social: {},
})
