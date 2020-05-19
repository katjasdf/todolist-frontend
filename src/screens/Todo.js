import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, Button } from 'react-native'
import TodoData from '../components/TodoData'
import EditTodo from '../components/EditTodo'
import todoService from '../services/todos'

// creating one base screen for viewing and editin single todo
// these two phases change by pressing either edit or cancel button
export default function Todo({ route }) {
    const navigation = useNavigation()
    const todo = route.params.todo
    const todos = route.params.todos
    const [editing, setEditing] = useState(false)
    const [text, setText] = useState('edit')

    // setting the button text based on the editing view status
    const changeText = () => {
    switch (editing) {
        case false:
        return 'cancel'
        case true:
        return 'edit'
        }
    }

    // setting editing view status based on edit/cancel button onPress
    const changePhase = () => {
        setEditing(!editing)
        setText(changeText)
    }

    // deteting item based on todo.id which sets right endpoint for http request
    // creating newTodolist from where the deleted item will be filtered out based on id
    // navigating back to TodoList.js and passing newTodoList to the view
    const deleteTodo = () => {
        todoService
            .remove(todo.id)
            .then(deletedTodo => {
                const newTodoList = todos.filter(todo => todo.id !== deletedTodo.id)
                navigation.navigate('TodoList', { newTodoList })
            })
    }

    // setting witch component to show based on edigin status and
    // passing props for the components
    return (
        <View style={styles.container}>
            {editing === false && <TodoData todo={todo} todos={todos}/>}
            {editing === true && <EditTodo todo={todo} todos={todos}/>}
            <View style={styles.buttons}>
            <Button 
                title={text}
                onPress={changePhase}
            />
            <Button
                title='delete'
                onPress={deleteTodo}
                color='red'
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttons: {
    alignItems: 'center',
  }
});

