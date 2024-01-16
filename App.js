import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [newGoal, setNewGoal] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => {
            setNewGoal(text)
            console.log(newGoal)
          }}
          style={styles.textInput}
          placeholder='Input your Goal!!'
        />
        <Button title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        <Text>Your list of goals...</Text>
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