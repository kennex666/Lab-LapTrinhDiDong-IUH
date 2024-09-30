import { Text, SafeAreaView, StyleSheet } from 'react-native';

import {useEffect} from 'react';

// You can import supported modules from npm
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {SCREEN_NAME} from "./constants/screens";
import HomeScreen from "./screens/ViewProduct";
import SelectColorHome from "./screens/SelectColorProduct"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SCREEN_NAME.view} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={SCREEN_NAME.view} component={HomeScreen}/>
          <Stack.Screen name={SCREEN_NAME.selectColor} component={SelectColorHome}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
