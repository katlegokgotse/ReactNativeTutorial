import { styles } from "../styles/styles";
import {  Text, View, Pressable } from 'react-native';
export default function GoalItems(props){
    return (
             <View style={styles.goalsContainer}>
                <Pressable 
                    android_ripple={{color: '#dc1312'}} 
                    onPress={props.onDeleteItem.bind(this, props.id)}
                    style={({pressed}) => pressed && styles.pressedItem}
                    >
                    <Text style={styles.goalText}>{props.text}</Text>
                </Pressable>
            </View>
    )
}