import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { useState } from 'react';
import { IMAGE_RESOURCE } from '../constants/image_resources';
import { SCREEN_NAME } from '../constants/screens';
// You can import supported modules from npm
import { NavigationContainer } from '@react-navigation/native';

export default function SelectColorProduct({ route, navigation }) {
  const data = route.params;
  const [choice, setChoice] = useState();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexRow}>
        <View>
          <Image
            style={styles.imageProduct}
            source={IMAGE_RESOURCE.product.vsmart[choice ?? 'black']}
            resizeMode="contain"
          />
        </View>

        <View style={[{ flexShrink: 1 }, styles.flexCol, styles.rowGap]}>
          <Text>{data.name}</Text>
          <View style={styles.flexRow}>
            {'Màu: '}
            <View style={[styles.bold, styles.gapText]}>
              {choice ?? 'black'}
            </View>{' '}
          </View>
          <Text>
            Cung cấp bởi
            <View style={[styles.bold, styles.gapText]}>OBXSTD</View>
          </Text>
          <Text style={[styles.bold, styles.fontLarge]}>
            {data.price.toLocaleString({}) + ' đ'}
          </Text>
        </View>
      </View>

      <View style={[styles.marginVertical]}>
        <Text style={{marginBottom: 10}}>Chọn một màu bên dưới</Text>

        <View style={[styles.alignItemCenter,{gap: 15}]}>
        {data.colors.map((value) => {
          return (<TouchableOpacity
            style={{
              backgroundColor: value,
              width: 60,
              height: 60
            }}
            onPress = {() => {
              setChoice(value)
            }}
          />);
        })}
        </View>

        <TouchableOpacity style={{
          backgroundColor: "red",
          color: "white",
          paddingHorizontal: 10,
          paddingVertical: 7,
          alignSelf: "center",
          marginTop: 30,
          borderRadius: 7,
        }}
        onPress={() => { 
              navigation.navigate(SCREEN_NAME.view, { selectedColor: choice ?? 'black' });
            }}>Chọn màu</TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  marginVertical: {
    marginVertical: 20
  },
  gapText: {
    marginLeft: 5,
  },
  imageProduct: {
    width: 100,
    height: 100,
  },
  buttonBuy: {
    backgroundColor: 'red',
    borderWidth: 0,
  },
  buttonColorWhite: {
    color: 'white',
  },
  buttonChooseColor: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    height: 33,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonChooseText: {
    color: 'white',
    fontWeight: 'bold',
  },
  fontLarge: {
    fontSize: 16.4,
  },
  gap: {
    rowGap: 10,
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  alignItemFlexEnd: {
    alignItems: 'flex-end',
  },
  bold: {
    fontWeight: 'bold',
  },
  colorRed: {
    color: 'red',
  },
  colorGray: {
    color: 'gray',
  },
  textLineThrough: {
    textDecorationLine: 'line-through',
  },
  containerInfo: {
    marginVertical: 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 250,
    height: 300,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
});
