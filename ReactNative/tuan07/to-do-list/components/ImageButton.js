
import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

export default function ImageButton({image, onPress, style}){
  return (
      <TouchableOpacity style={style} onPress={onPress}>
      <Image source={image} style={{width: 20}} resizeMode="contain"/>
      </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00BDD6",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15
  },
  input: {
    width: 250,
    height: 30,
    paddingHorizontal: 5
  },
  containerInput:{
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 2
  },
  textName: {
    color: "purple",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10
  },
  imgBanner: {
    width: 200,
    height: 200
  },
  container: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
});
