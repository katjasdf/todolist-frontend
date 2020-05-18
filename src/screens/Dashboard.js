import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Card from '../components/Card'

export default function Dashboard({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button
        title="Go to TodoList"
        onPress={() => navigation.navigate('TodoList')}
      />
      <Button
        title="Go to AddTodo"
        onPress={() => navigation.navigate('AddTodo')}
      />
      <View>
        <Card category={'school'}/>
      </View>
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

