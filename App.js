import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TodoList from './src/screens/TodoList'
import Todo from './src/screens/Todo'
import AddTodo from './src/screens/AddTodo'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="TodoList" 
            component={TodoList} 
        />
        <Stack.Screen 
            name="Todo" 
            component={Todo} />
        <Stack.Screen 
            name="AddTodo" 
            component={AddTodo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
