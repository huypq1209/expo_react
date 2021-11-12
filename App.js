import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App=()=> {
  const hello='Xin chào'
  let text="A  Huy"
  console.log(hello +" Bạn  w"+ text)
  return (
    <View style={styles.container}>
      <Text>{hello} {text} 1234 </Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
