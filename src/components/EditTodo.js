import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'
import todoService from '../services/todos'
import { useNavigation } from '@react-navigation/native'

export default function EditTodo({todo}) {
    const navigation = useNavigation()
    const [todoContent, setTodoContent] = useState(todo.content)

    const deleteTodo = () => {
        todoService
            .remove(todo.id)
        navigation.navigate('TodoList')
    }

    const editTodo = () => {
        const todoObject = {
            content: todoContent,
            important: true
        }

        todoService
            .update(todo.id, todoObject)
            .then(returnedTodo => {
                setTodos(todos.concat(returnedTodo))
                setNewTodo('')
            })
            
        navigation.navigate('TodoList')
    }

    const handleTodoChange = (event) => {
        setTodoContent(event.nativeEvent.text)
    }

  return (
    <View style={styles.container}>
        <TextInput
            placeholder={todoContent}
            onChange={handleTodoChange}
        ></TextInput>
        <Button
            title='save'
            onPress={editTodo}
        />
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

