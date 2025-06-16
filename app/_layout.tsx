import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.appContainer}>
      <View>
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
});
/**
 * 1. Create a new project => npx create-expo-app@latest
 * <View> komponenti => React Native'in birinci komponenti. Bununla birlikte <Text> komponenti de kullanılır.
 */