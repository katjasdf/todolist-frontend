import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import TodoData from '../components/TodoData'
import EditTodo from '../components/EditTodo'

export default function Todo({ route }) {
    const todo = route.params.todo
    const todos = route.params.todos
    const [editing, setEditing] = useState(false)
    const [text, setText] = useState('edit')

    const changeText = () => {
    switch (editing) {
        case false:
        return 'cancel'
        case true:
        return 'edit'
        }
    }

    const changePhase = () => {
        setEditing(!editing)
        setText(changeText)
    }

  return (
    <View style={styles.container}>
        {editing === false && <TodoData todo={todo} todos={todos}/>}
        {editing === true && <EditTodo todo={todo} todos={todos}/>}

        <Button 
            title={text}
            onPress={changePhase}
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

