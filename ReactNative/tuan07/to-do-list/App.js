import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import LoginScreen from './screens/LoginScreen';
import TaskScreen from './screens/TaskScreen';
import TaskCreateScreen from './screens/TaskCreateScreen';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="login" 
  screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="task" component={TaskScreen} />
          <Stack.Screen name="taskcreate" component={TaskCreateScreen} />
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
    paddingTop: 50
  },
});
