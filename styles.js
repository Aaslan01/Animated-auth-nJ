import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
  buttonContainer: {
    justifyContent: 'center',
    height: height / 3
  },
  button: {
    backgroundColor: 'rgba(128,104,238,0.8)',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText: {
    color: 'white',
    fontWeight: 600,
    fontSize: 20,
    letterSpacing: 0.8
  },
  inputText: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 35,
    paddingLeft: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset:{
      width:0,
      height:4
    },
    shadowOpacity: 0.25,
    shadowRadius:3.84,
    elevation:5
  },
  registerContainer:{
    marginBottom: 30, 
  },
  closedCircleButton:{
    height:40,
    width:40,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset:{
      width:0,
      height:4
    },
    shadowOpacity: 0.34,
    shadowRadius:6.47,
    elevation:1,
    alignItems: 'center',
    borderRadius: 20,
  }
});

export default styles;