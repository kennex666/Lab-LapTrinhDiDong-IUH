import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { View, Image, TextInput } from 'react-native';

import Button from "../components/Button"
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native-gesture-handler';

// or any files within the Snack

export default function SignupScreen() {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.titleLogin}>Login</Text>
        <View>
          <TextInput placeholder="Email" style={styles.input} />
        </View>
        <View>
          <TextInput placeholder="Password" style={styles.input} />
        </View>

        <View style={styles.center}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>

          <Text>When you agree to terms and conditions</Text>

          <TouchableOpacity>
            <Text style={styles.fgpasswordText}>Forgot your password?</Text>
          </TouchableOpacity>

          <Text>Or login with</Text>

          <View
            style={[
              styles.center,
              {
                flexDirection: "row",
              },
            ]}
          >
            <Button title="Google" />
            <Button title="Facebook" />
            <Button title="Zing Me" />
          </View>
        </View>
      </View>
    </View>
  );
}
const gapMargin = 40;
const styles = StyleSheet.create({
  fgpasswordText:{
    color: "blue"
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  loginText:{
    color: "white",
    fontWeight: "bold"
  },
  buttonLogin: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    width: 300,
    alignItems: "center"
  },
  titleLogin:{
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  },
  viewContainer: {
    flex: 1,
    flexDirection: "colunm",
    backgroundColor: "#d8efde",
  },
  formContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: gapMargin,
  },
  input: {
    backgroundColor: "white",
    width: 300,
    height: 40,
    padding: 10,
    borderRadius: 5,
  }
});
