import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/redux/stores';
import { Provider } from 'react-redux';
import Welcome from './src/components/users/Welcome';


export default function App(){
  return(
    <Provider store={store}>
      <Welcome/>
    </Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
