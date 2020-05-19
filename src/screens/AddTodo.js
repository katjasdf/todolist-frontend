import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, Button, Text } from 'react-native'
import { Input } from 'react-native-elements'
import { Switch } from 'react-native-paper'
import todoService from '../services/todos'

// view for adding new todo to db
export default function AddTodo({ route }) {
    const navigation = useNavigation()
    const todos = useState(route.params.todos)
    const [newTodo, setNewTodo] = useState('')
    const [important, setImportant] = useState(false)

    // creating object based on mongooseSchema specification in backend
    // and setting the content value from inputfield
    const addToDatabase = () => {
        const todoObject = {
            content: newTodo,
            important: important
        }

        // callin todos.js create function and sending the todoObject data
        // to be put to db and then creating newTodoList with concat function
        // concat merges the old data with the new data, so the newTodo, will be
        // added to old array and new array will be passed to TodoList.js
        todoService
            .create(todoObject)
            .then(newTodo => {
                const newTodoList = todos.concat(newTodo)
                navigation.navigate('TodoList', { newTodoList })
            })           
    }

    // handling input change
    const handleTodoChange = (event) => {
        setNewTodo(event.nativeEvent.text)
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
                placeholder='todo content'
                onChange={handleTodoChange}
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
                title='add'
                onPress={addToDatabase}
            />
            <Button
                title='cancel'
                onPress={() => navigation.navigate('TodoList')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },
  row: {
      flexDirection: 'row',
      alignItems: 'center'
  }
});

