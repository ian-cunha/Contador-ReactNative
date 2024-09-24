import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount((number) => number + 1)
  }

  const decrementCount = () => {
    setCount((number) => number - 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>

      <View style={styles.containerButtons}>
        <Button title='Remover' onPress={decrementCount} />
        <Button title='Adicionar' onPress={incrementCount} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 10,
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'row',
  },
});
