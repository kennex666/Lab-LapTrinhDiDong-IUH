
import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import ImageButton from "./ImageButton";

export default function TaskComponent({handlePressCheck, handlePressEdit, item, isChecked}){
  return (
    <View style={[styles.flexRow, styles.textCenter, {backgroundColor: "#9095A0", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 30}]}>
          <ImageButton image={isChecked ? require("../assets/img/check-box.png") : require("../assets/img/uncheck-box.png")} onPress={() => { handlePressCheck(item) }}/>
          <Text style={[{width: 230, paddingHorizontal: 5}]}>{item.taskName}</Text>
          <ImageButton image={require("../assets/img/btn-edit.png")} onPress={handlePressEdit}/>
        </View>
    )
}


const styles = StyleSheet.create({
  alignSelfEnd: {
    alignSelf: "flex-end"
  },  
  justifySpacebetween: {
    justifyContent: "space-between"
  },  
  gap: {
    gap: 10
  },
  textCenter: {
    textAlign: "center"
  },  
  bold: {
    fontWeight: "bold"
  },
  itemsCenter: {
    alignContent: "center"
  },
  justifyCenter: {
    justifyContent: "center"
  },
  flexRow: {
    display: "flex",
    flexDirection: "row"
  },
  flexCol: {
    display: "flex",
    flexDirection: "col"
  },
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
    justifyContent: "space-between"
  },
});
