// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MainPage from './Pages/MainPage';
import LoginPage from './Pages/LoginPage';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar
        // animated={true}
        backgroundColor="maroon"
        barStyle='light-content'
        // hidden={hidden}
      />
      {/* <LoginPage /> */}
      <MainPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: '5%',
    // color: 'red'
  },
});
