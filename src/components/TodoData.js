import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import todoService from '../services/todos'
import { useNavigation } from '@react-navigation/native'

export default function TodoData({ todo, todos }) {
    const navigation = useNavigation()
    const [todoList, setTodoList] = useState(todos)

    const deleteTodo = () => {
        todoService
            .remove(todo.id)
            .then(() => {
                setTodoList(todos.filter(todo => todo.id !== todo.id))
            })
        navigation.navigate('TodoList', { todoList })
    }

  return (
    <View style={styles.container}>
        <Text>{todo.content}</Text>
        <Text>{todo.date}</Text>
        <Button
            title='delete'
            onPress={deleteTodo}
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

