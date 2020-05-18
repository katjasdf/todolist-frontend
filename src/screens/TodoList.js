import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import todoService from '../services/todos'

export default function TodoList({ navigation }) {
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
      <Button
        title="Go to Todo"
        onPress={() => navigation.navigate('Todo')}
      />
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

