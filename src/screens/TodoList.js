import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import { FAB } from 'react-native-paper'
import { ListItem } from 'react-native-elements'
import todoService from '../services/todos'

export default function TodoList({ route }) {
    const navigation = useNavigation()
    const [todos, setTodos] = useState([])

    // getting all data from DB by using todos.js functions (axios requests)
    // this will be done when screen is rendered and when params are updated
    useEffect(() => {
        todoService
            .getAll()
            .then(initialTodos => {
                setTodos(initialTodos)
            }).catch()
    }, [route.params])

    // mapping the data and returning the item content value as the element title
    // sending data as params with navigation
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
                onPress={() => navigation.navigate('AddTodo', { todos })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    alignItems: 'flex-end',
    right: 30,
    bottom: 30,
    backgroundColor: '#2196f3'
  }, 
});

