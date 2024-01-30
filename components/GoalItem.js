import { Pressable, StyleSheet, View, Text } from "react-native"

export default function GoalItem( {goal, onDeleteGoal} ) {
    return (
        <Pressable 
            android_ripple={{color: "#B6702B"}}
            style={({pressed}) => pressed & styles.pressedItem}
            onPress={() => onDeleteGoal(goal.id)} >        
            <View style={styles.goalItem}> 
                    <Text style={styles.goalText}>
                    {goal.text}
                    </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        padding: 20,
        backgroundColor: "#FCD0A1",
        marginBottom: 10,
        borderRadius: 10,
    },
    goalText: {
        fontSize: 20,
        color: "#633503",
    },
    pressedItem: {
        opacity: 0.5
    },
})