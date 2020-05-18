import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { FAB } from 'react-native-paper'
import { ListItem } from 'react-native-elements'
import todoService from '../services/todos'
import { useNavigation } from '@react-navigation/native'

export default function TodoList({route}) {
    const navigation = useNavigation()
    const [todos, setTodos] = useState([])

    console.log(route.params)

    useEffect(() => {
        todoService
            .getAll()
            .then(initialTodos => {
                setTodos(initialTodos)
            }).catch()
    }, [])

  return (
    <View style={styles.container}>
        <View>
        {
            todos.map((item, i) => (
                <ListItem
                    key={i}
                    title={item.content}
                    bottomDivider
                    chevron
                    style={{width: 400}}
                    onPress={() => navigation.navigate('Todo', { todo: item, todos })}
                />
            ))
        }
        </View>
        <FAB 
            style={styles.fab}
            big
            icon="plus"
            onPress={() => navigation.navigate('AddTodo')}
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
  fab: {
    position: 'absolute',
    alignItems: 'flex-end',
    right: 30,
    bottom: 30,
    backgroundColor: '#2196f3'
  }, 
});

