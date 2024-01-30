import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
} from 'react-native';
import { useState, useEffect } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  
  const [modalVisible, setModalVisible] = useState(false)
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

  const addGoalHandler = (newGoalText) => {
    const newGoal = {
      id: Date.now(), 
      text: newGoalText,
    };

    setGoals((currentGoals) => [...currentGoals, newGoal]);
  };

  
  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => currentGoals.filter(
      (goal) => goal.id != id
      ))
    }
    
  return (
    <View style={styles.container}>
      <Button
        title='Add new goal!'
        onPress={() => setModalVisible(true)} />

      <GoalInput onNewGoal={addGoalHandler}
        onCancel={() => setModalVisible(false)}
        visible={modalVisible} />
      
      <View style={styles.goalsContainer}>
        <Text style={styles.goalHeader}>GOALS</Text>
        <FlatList
          data={goals}
          renderItem={
            ({item}) => (
              <GoalItem goal={item}
                key={item.id}
                onDeleteGoal={deleteGoalHandler} />
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
  goalsContainer: {
    flex: 5,
    marginTop: 40,
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