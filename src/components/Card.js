import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-paper'
import SetCategoryValues from '../helpers/SetCategoryValues'

export default function Card({ category }) {
    const values = SetCategoryValues(category)

    console.log(category)
    console.log(values.name)
    console.log(values.icon)
    console.log(values.color)

  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <View>
                <Icon name='book' type='feather' color='#2196f3'/>
                <Text>moi</Text>
            </View>
        </TouchableOpacity>
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

