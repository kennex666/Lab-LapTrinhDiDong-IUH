import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useFetch, useTextInput } from './hooks/useCustomHook';
import { useState, useEffect } from "react";

export default function App() {
  const input = useTextInput("https://jsonplaceholder.typicode.com/todos/1");
  const fetchAPI = useFetch(input.text);


  return (
    <View style={styles.container}>
      <Text>Input an API below to see result: </Text>
      <TextInput
        style={{
          width: 500,
          borderColor: "gray",
          borderWidth: 1,
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginTop: 5,
          marginBottom: 10,
        }}
        value={input.text}
        onChangeText={input.onTextChange}
        placeholder="Click here and input an API URL. Let's see above!"
      />
      <ScrollView>
        <Text>
          {fetchAPI.loading ? "Still loading... Please wait!" : fetchAPI.data}
        </Text>
      </ScrollView>
      <StatusBar style="auto" />
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
