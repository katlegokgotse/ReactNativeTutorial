import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    appContainer: {
      padding: 50,
      flex: 1,
      paddingHorizontal: 40
    },
    inputFlex: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 24,
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
    btnChange: {
      backgroundColor: 'white',
      color: 'blue',
    
      }, 
      goalsContainer: {
        flex: 4,
        width: '100vh',
    },
    goalItem:{
        margin: 5,
        backgroundColor: 'red',
        borderColor: 'orange',
        borderRadius: 10,
        color: 'white',
        fontSize: 14,
    },
    goalText:{
        padding: 8,
        margin: 5,
        backgroundColor: 'red',
        borderColor: 'orange',
        borderRadius: 10,
        color: 'white',
        fontSize: 14,
        width: '100%',
    },
  });