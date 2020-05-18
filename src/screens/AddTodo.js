import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'
import todoService from '../services/todos'
import { useNavigation } from '@react-navigation/native'

export default function AddTodo() {
    const navigation = useNavigation()
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')

    const addToDatabase = () => {
        const todoObject = {
            content: newTodo,
            important: false
        }

        todoService
            .create(todoObject)
            .then(returnedTodo => {
                setTodos(todos.concat(returnedTodo))
                setNewTodo('')
            })
        
        navigation.navigate('TodoList')
    }

    const handleTodoChange = (event) => {
        setNewTodo(event.nativeEvent.text)
    }

  return (
    <View style={styles.container}>
        <TextInput
            placeholder='anna jotain'
            onChange={handleTodoChange}
        />
        <Button
            title='add'
            onPress={addToDatabase}
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

