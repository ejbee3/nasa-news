import React from 'react';
import { View, Text, Button } from 'react-native';

const Counter = (props) => {
  const {count, setCount, style } = props

  return (
    <View style={style}>
      <Text>you clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="click me!" ></Button>
    </View>
  );
}

export default Counter;
