import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { View, Image } from 'react-native';

import Button from "../components/Button"
import { NavigationContainer, useNavigation, CommonActions } from "@react-navigation/native";

// or any files within the Snack

export default function HomeScreen() {

  
  const navigation = useNavigation();
  
  const onPressForgotPWD = () => {
    navigation.dispatch(
      CommonActions.reset({
        routes: [{ name: "signupscreen" }],
      })
    );
  }

  return (
    <View style={styles.viewContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/img/logo-circle.png")}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.centerContainer}>
        <Text style={styles.textLogo}>{"GROW\nYOUR BUSINESS"}</Text>
      </View>

      <View style={styles.centerContainer}>
        <Text style={[styles.textCenter, styles.bold]}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Login" />
        <Button title="Sign up" onPress={onPressForgotPWD} />
      </View>
    </View>
  );
}
const gapMargin = 40;
const styles = StyleSheet.create({
  bold: {
    fontWeight: "500"
  },
  buttonContainer:{
    flexDirection: "row",
    gap: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  centerContainer: {
    paddingHorizontal: 25,
    marginBottom: gapMargin,
    flex: 1
  },
  textLogo: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  },  
  logoImage: { 
    width: 150,
    height: 150,
    marginBottom: gapMargin
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    flex: 1,
    flexDirection: "colunm",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00CCF9"
  },
  logoContainer: {
    marginBottom: gapMargin,
    display: "flex",
    justifyContent: "flex-end",
    flex: 3
  },
});
