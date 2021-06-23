import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

let categories = [
  {label:"Food", value: "food"},
  {label:"Coffee", value:"coffee"},
  {label:"Transport", value:"transport"},
  {label:"Entertainment", value:"entertainment"},
  {label:"Groceries", value:"groceries"},
  {label:"Rent", value:"rent"},
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Money Tracker</Text>
      <View>
        <TextInput></TextInput>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});
