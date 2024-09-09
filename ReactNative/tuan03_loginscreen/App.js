import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { View, Image } from 'react-native';

import Button from "./components/Button"
import RouteBuilder from "./screens/router";
import { NavigationContainer } from "@react-navigation/native";

// or any files within the Snack

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer >
        <RouteBuilder />
      </NavigationContainer>
    </SafeAreaView>
  );
}
const gapMargin = 40;
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
