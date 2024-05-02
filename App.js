import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [goals, setGoals] = useState("")
  function goalInputHandler(enteredText){
    setGoals(enteredText)
  }
  function addGoalHandler(){
    console.log(goals)
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputFlex}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your course Goal'
          onChangeText={goalInputHandler}
          />
        <Button 
          title='Add Goal' 
          onPress={addGoalHandler}
          />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals</Text>
        <Text>{goals}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  }
});