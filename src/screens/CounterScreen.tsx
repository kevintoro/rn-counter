import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FloatingActionButton } from '../components/FloatingActionButton';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>
      <FloatingActionButton onPress={() => setCounter(counter - 1)} title={'-1'} position={'bottom_left'} />
      <FloatingActionButton onPress={() => setCounter(counter + 1)} title={'+1'} position={'bottom_right'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
