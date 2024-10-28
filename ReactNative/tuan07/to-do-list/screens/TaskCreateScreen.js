
import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

import {useState} from "react"

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import InputImageComponent from '../components/InputImageComp'
import ImageButton from "../components/ImageButton"
import TaskComponent from "../components/TaskComponent"


// or any files within the Snack
export default function TaskCreateScreen({navigation, route}) {
  const [task, setTask] = useState();
  const [data, setData] = useState([
    {
      id: 1,
      taskName: "Hello world",
      isCheck: false
    },
    {
      id: 2,
      taskName: "Tuyet, cuoi cung cung co task",
      isCheck: true
    }]);

    const handleCheckbox = (item) => {
      setData(prevData => 
        prevData.map((value) => 
          value.id === item.id ? { ...value, isCheck: !value.isCheck } : value
        )
      );
    };

  return (
    <View style={styles.container}>

      <View style={[styles.flexCol, {gap: 50}]}>
        <View style={[styles.flexRow, {justifyContent: "space-between", width: 300},]}>
          <ImageButton image={require("../assets/img/btn-back.png")}/>

          <View style={[styles.flexRow, styles.gap,]}>
            <Image source={require("../assets/img/avt.png")}/>
            <View style={[styles.flexCol, styles.justifyCenter]}>
              <Text style={[styles.bold, styles.textCenter]}>Hi, Bao</Text>
              <Text>Have agrate day a head</Text>
            </View>
          </View>
       </View>
       <Text style={{
         fontSize: 20,
         fontWeight: "bold",
         textAlign: "center",
         marginTop: 50,
         marginBottom: 20
       }}>ADD YOUR JOB</Text>

      </View>

      <View style={[styles.flexCol, {flex: 1, marginVertical: 20}, styles.itemsCenter]}>
        <View style={styles.containerInput}>
          <Image source={require("../assets/img/ico-job.png")} resizeMode="contain"/>
          <TextInput style={styles.input} placeholder="Input your job" onChangeText={(value) => {setTask(value)}} value={task}/>
        </View>

        

        <TouchableOpacity style={[styles.button, styles.flexRow, styles.justifyCenter, styles.itemsCenter, {width:150, height: 45, marginTop: 30}]} onPress={()=>{
        navigation.navigate("task", {data: [...data, {id: data.length, taskName: task, isCheck: false}]})
      }}>
          <Text style={{color: "white"}}>Finish -></Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.flexRow, styles.justifyCenter, {paddingBottom: 50}]}>
                <Image source={require("../assets/img/banner-note.png")} style={{width:200, height: 200}} resizeMode="contain"/>

      </View>

    </View>
  );
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
    alignItems: "center"
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
    paddingVertical: 7,
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
