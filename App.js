import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [newGoal, setNewGoal] = useState("")
  
  const [goals, setGoals] = useState([])
  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, newGoal])
  }

  useEffect(() => {
    console.log("new goal list:", goals)
  }, [goals])

  useEffect(() => {
    console.log("new goal:", newGoal)
  }, [newGoal])

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => { /* onChangeText={textChangeHandler} */
            setNewGoal(text)
          }}
          style={styles.textInput}
          placeholder='Input your Goal!!'
        />
        <Button title='Add Goal'
          onPress={addGoalHandler}
         />
      </View>
      <View style={styles.goalsContainer}>
        <Text>GOALS</Text>
        {goals.map((goal, index) => {
          return (
            <Text key={index}>{goal}</Text>
          )
        })}
      </View>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    alignItems: 'center'
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    width: "70%",
    padding: 10
  },
  goalsContainer: {
    flex: 5,
  }
})