import { useState } from 'react';
import {View, FlatList, Button} from 'react-native';
import { styles } from './styles/styles';
import GoalItems from './components/GoalItems';
import GoalInputs from './components/GoalInputs';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler(){
      setModalIsVisible(true)
  }
  const [courseGoals, setCourseGoals] = useState([])
  //This is to receive the value automatically from its state. setGoals -> goals
  function addGoalHandler(enterGoals){
   //Not the best way to update state if the new state depends on the previous state
   // setCourseGoals([...courseGoals, goals])

   /*  A better way is to pass a function to the state update function
   Pass a function that will be called automatically by react
   this function will be updated  automatically by React
   */
  //Best practice to update the state
   setCourseGoals(
    (currentCourseGoals) => [
      ...courseGoals, 
      {
        text: enterGoals, 
        id: Math.random().toString()
      }
    ]); 
  }
  function onDeleteGoals(id){
    /**
     * In order to delete an item
     * setCourseGoals() -> Gets the current goals. 
     * currentCourseGoals -> as the copy of the current state of goals
     * Filters which receives a function as the goals by the goal.id
     */
    setCourseGoals(currentCourseGoals => {
      //currentGoal filters
      return currentCourseGoals.filter((goals) => goals.id !== id)
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color='#dc1000' onPress={startAddGoalHandler}/>
      <GoalInputs visible={modalIsVisible} onAddGoal={addGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList 
            data = {courseGoals}
            alwaysBounceVertical={true}
            renderItem={(itemData)=> (
             <GoalItems 
              id = {itemData.item.id}
              text={itemData.item.text}
              onDeleteItem={onDeleteGoals}
             />
          )}
            keyExtractor={(item, index) =>  item.id}/>
        </View>
    </View>
  );
}