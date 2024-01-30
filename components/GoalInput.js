import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export default function GoalInput({ onNewGoal, visible, onCancel }) {
    const [ newGoal, setNewGoal ]  = useState("")

    const addGoalHandler = () => {
        if (newGoal) {
            onNewGoal(newGoal)
        }
        setNewGoal("")
    }

    return (
        <Modal visible={visible}
            animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={text => { /* onChangeText={textChangeHandler} */
                    setNewGoal(text)
                    }}
                    style={styles.textInput}
                    placeholder='Input your Goal!!'
                    value={newGoal} />
                 <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            onPress={() => onCancel()}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            onPress={addGoalHandler}
                        />
                    </View>

                </View>
            </View>
        </Modal>
    )
}

const styles = new StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#5E4B56",
        alignItems: 'center'
    },
    textInput: {
        borderColor: "#CCCCCC",
        borderWidth: 1,
        width: "80%",
        padding: 10
      },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
      },
    button: {
        width: '40%'
    },
})