import { styles } from "../styles/styles";
import { Button, View, TextInput, Modal } from 'react-native';
import { useState } from 'react';

export default function GoalInputs(props){
    const [enterGoals, setGoals] = useState("")
    function goalInputHandler(enterGoals){
        setGoals(enterGoals)
      }
    function addGoalHandler(){
        props.onAddGoal(enterGoals);
        setGoals(" ");
    }
    return(
      <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputFlex}>
          <TextInput 
            style={styles.textInput} 
            placeholder='Your course Goal'
            onChangeText={goalInputHandler} //Wants a function as a value.
            />
        <Button 
          title='Add Goal' 
          onPress={addGoalHandler} 
          //Because we don't click in native components but we rather press
          />
      </View>
      </Modal>
    )
}