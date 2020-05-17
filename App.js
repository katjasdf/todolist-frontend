import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import todoService from './src/services/todos'

export default function App() {
    const [todos, setTodos] = useState([])

  useEffect(() => {
      todoService
      .getAll()
      .then(initialTodos => {
        setTodos(initialTodos)
      }).catch()
  }, [])

  return (
    <View style={styles.container}>
      {todos.map((todo, i) =>
      <Text key={i}>
        {todo.content}
      </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
