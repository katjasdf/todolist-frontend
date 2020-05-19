import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Moment from 'moment'

// one of two Todo.js view phases (view phase)
// showing selected todo date based on props
export default function TodoData({ todo }) {

  return (
    <View style={styles.container}>
        <Text style={styles.header}>{todo.content}</Text>
        <Text style={styles.date}>{Moment(todo.date).format('DD.MM.YYYY')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20,
    paddingLeft: 10
  },
  header: {
      fontSize: 24,
      marginBottom: 10
  },
  date: {
      fontSize: 14,
  }
});

