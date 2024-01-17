import { View, TextInput, Button, Text, StyleSheet,ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [newGoal, setNewGoal] = useState("")
  
  const [goals, setGoals] = useState([])

  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, newGoal])
    setNewGoal("")
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
        <Text style={styles.goalHeader}>GOALS</Text>
        <ScrollView>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>
              Temporary Item 1
            </Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>
              Temporary Item 1
            </Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>
              Temporary Item 1
            </Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>
              Temporary Item 1
            </Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>
              Temporary Item 1
            </Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>
              Temporary Item 1
            </Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>
              Temporary Item 1
            </Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>
              Temporary Item 1
            </Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>
              Temporary Item 1
            </Text>
          </View>
          {goals.map((goal, index) => {
            return (
              <View key={index} style={styles.goalItem}> 
                <Text style={styles.goalText}>
                  {goal}
                </Text>
              </View>
            )
          })}
        </ScrollView>
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
  }
})