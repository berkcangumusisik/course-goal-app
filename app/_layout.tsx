import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
/**
 * 1. Create a new project => npx create-expo-app@latest
 * Proje Başlangıç : npx expo start
 * <View> komponenti => React Native'in birinci komponenti. Bununla birlikte <Text> komponenti de kullanılır.
 */