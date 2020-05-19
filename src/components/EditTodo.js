import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, Button, Text } from 'react-native'
import { Input } from 'react-native-elements'
import { Switch } from 'react-native-paper'
import todoService from '../services/todos'

// one of two Todo.js view phases (edit phase)
export default function EditTodo({ todo, todos }) {
    const navigation = useNavigation()
    const [todoContent, setTodoContent] = useState(todo.content)
    const [important, setImportant] = useState(todo.important)

    // creating object based on mongooseSchema specification in backend
    // and setting the content value from inputfield
    const editTodo = () => {
        const todoObject = {
            content: todoContent,
            important: important
        }

        // callin todos.js update function and sending the item id and todoObject
        // data to be put to db and then creating newTodoList with map function
        // if todo.id is not same as updatedTodo.id original todo will be added to list
        // if the todo.id is same as updatedTodo.id updatedTodo will replace the original
        // navigating back to TodoList.js and passing newTodoList to the view
        todoService
            .update(todo.id, todoObject)
            .then(updatedTodo => {
                const newTodoList = todos.map(todo => todo.id !== updatedTodo.id ? todo : updatedTodo)
                navigation.navigate('TodoList', { newTodoList })
            })          
        
    }

    // handling input change
    const handleTodoChange = (event) => {
        setTodoContent(event.nativeEvent.text)
    }

    // handling important toggle
    const toggleImportant = () => {
        setImportant(!important)
    }

    // setting on/off text based on todo.important status
    const toggleText = important ? 'on' : 'off'

    return (
        <View style={styles.container}>
            <Input
                value={todoContent}
                onChange={handleTodoChange}
                containerStyle={{width: 400}}
            />
            <View style={styles.row}>
                <Text>
                    Set important: {toggleText}
                </Text>
                <Switch 
                    value={important}
                    onValueChange={toggleImportant}
                    style={{marginLeft: 10}} 
                />
            </View>
            <Button
                title='save'
                onPress={editTodo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
      width: 300
  },
  row: {
      flexDirection: 'row',
      alignItems: 'center'
  }
});

