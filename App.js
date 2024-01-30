import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import GoalInput from './components/GoalInput';

export default function App() {
  const [newGoalText, setNewGoal] = useState("")
  
  const [goals, setGoals] = useState([
    { id: 1, text: "Learn React Native" },
    { id: 2, text: "Learn Redux" },
    { id: 3, text: "Learn React Navigation" },
    { id: 4, text: "Learn React Native Paper" },
    { id: 5, text: "Learn React Native Elements" },
    { id: 6, text: "Learn React Native Vector Icons" },
    { id: 7, text: "Learn React Native Gesture Handler" },
    { id: 8, text: "Learn React Native Reanimated" },
    { id: 9, text: "Learn React Native Safe Area Context" },
  ])

  const addGoalHandler = () => {
    const newGoal = {
      id: Date.now(), 
      text: newGoalText,
    };

    setGoals((currentGoals) => [...currentGoals, newGoal]);
    setNewGoal("");
  };

  // Log goal list on change
  useEffect(() => {
    console.log(goals)
  }, [goals])

  // Log goal text from input on change
  useEffect(() => {
    console.log("new goal:", newGoalText)
  }, [newGoalText])

  return (
    <View style={styles.container}>
      <GoalInput onNewGoal={addGoalHandler} />
      
      <View style={styles.goalsContainer}>
        <Text style={styles.goalHeader}>GOALS</Text>
        <FlatList
          data={goals}
          renderItem={
            ({item}) => (
              <View key={item.id} style={styles.goalItem}> 
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