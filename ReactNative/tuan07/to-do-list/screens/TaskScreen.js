
import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

import {useState, useEffect} from "react"

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import InputImageComponent from '../components/InputImageComp'
import ImageButton from "../components/ImageButton"
import TaskComponent from "../components/TaskComponent"


// or any files within the Snack
export default function TaskScreen({navigation, route}) {
  const [data, setData] = useState([
    {
      id: 0,
      taskName: "Hello world",
      isCheck: false
    },
    {
      id: 1,
      taskName: "Tuyet, cuoi cung cung co task",
      isCheck: true
    }]);

    useEffect(() => {
      if (route.params?.data) {
        setData(route.params.data);
      }
    }, [route.params?.data]);



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
        <InputImageComponent image={require("../assets/img/ico-search.png")} placeholder="Search" />
      </View>

      <View style={[styles.flexCol, {flex: 1, marginVertical: 20}]}>
        <FlatList 
          data={data} 
          renderItem={
            ({item}) => { console.log(item); return<TaskComponent 
            item={item} 
            isChecked={item.isCheck}
            handlePressCheck={() => handleCheckbox(item)} 
          />}
          }
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />} // Thêm khoảng cách 10px giữa các item
        >
        </FlatList>
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>{
        navigation.navigate("taskcreate", {data: data})
      }}>
        <Image source={require("../assets/img/btn-add.png")} style={{width:50, height: 50}} resizeMode="contain"/>
      </TouchableOpacity>
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
