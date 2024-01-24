import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [newGoal, setNewGoal] = useState("")
  
  const [goals, setGoals] = useState([
    { text: "Learn React Native" },
    { text: "Learn React Native" },
    { text: "Learn React Native" },
    { text: "Learn React Native" },
    { text: "Learn React Native" },
    { text: "Learn React Native" },
    { text: "Learn React Native" },
    { text: "Learn React Native" },
    { text: "Learn React Native" },
    { text: "Learn React Native" },
    { text: "Learn React Native" },
  ])

  const addGoalHandler = () => {
    const newGoalObject = {
      id: Math.random().toString(), // Use a more reliable way to generate unique IDs in production
      text: newGoal,
    };

    setGoals((currentGoals) => [...currentGoals, newGoalObject]);
    setNewGoal(""); // Clear the input after adding a goal
  };

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
        <Text style={styles.goalHeader}>GOALS</Text>
        <FlatList
          data={goals}
          renderItem={
            ({item}) => (
              <View key={item} style={styles.goalItem}> 
                <Text style={styles.goalText}>
                  {item.text}
                </Text>
              </View>
            )}
        />
      </View>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 15
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#5E4B56",
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: "#DBD2DA",
    borderColor: "#5E4B56",
    borderWidth: 1,
    width: "70%",
    padding: 10,
    borderRadius: 5,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 40,
  },
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
  goalHeader: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    padding: 10,
    textAlign: "center",
    color: "#FCD0A1",
    backgroundColor: "#633503",
    borderRadius: 10,
  },
})