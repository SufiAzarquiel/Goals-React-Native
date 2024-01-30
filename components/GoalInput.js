import { useState } from "react";

export default function GoalInput({ onNewGoal }) {
    const [ newGoal, setNewGoal ]  = useState("")

    const addGoalHandler = () => {
        if (newGoal) {
            onNewGoal(newGoal)
        }
        setNewGoal("")
    }

    return (
        <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => { /* onChangeText={textChangeHandler} */
            setNewGoal(text)
          }}
          style={styles.textInput}
          placeholder='Input your Goal!!'
          value={newGoal}
        />
        <Button title='Add Goal'
          onPress={addGoalHandler}
         />
      </View>
    )
}

const styles = new StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#5E4B56",
        alignItems: 'center'
    },
})