import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import {useState, useEffect} from "react";

import { IMAGE_RESOURCE } from '../constants/image_resources';
import {SCREEN_NAME} from "../constants/screens"
// You can import supported modules from npm
import { NavigationContainer } from '@react-navigation/native';

export default function ViewProduct({navigation, route}) {
  const dataTest = {
    name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
    totalRatings: 828,
    price: 1_790_000,
    beforeDiscount: 2_000_000,
    colors: ['black', 'blue', 'red', 'silver'],
  };

  const [selectedColor, setSelectedColor] = useState("black");

  const handlePressChoose = () => {
    navigation.navigate(SCREEN_NAME.selectColor, dataTest)
  }

  
  useEffect( ()=> {
    if (route.params?.selectedColor){
      setSelectedColor(route.params.selectedColor);
    }
    
  }, [route.params?.selectedColor]);

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.flexCol, styles.containerInfo, styles.gap]}>
      
      <View style={styles.imageContainer}>
        <Image
          source={IMAGE_RESOURCE.product.vsmart[selectedColor ?? "black"]}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
        {/* Info*/}
        <View>
          <Text>{dataTest.name}</Text>
        </View>

        {/* Rating */}
        <View style={[styles.flexRow, styles.alignItemCenter]}>
          <View style={styles.flexRow}>
            <Image source={IMAGE_RESOURCE.star} />
            <Image source={IMAGE_RESOURCE.star} />
            <Image source={IMAGE_RESOURCE.star} />
            <Image source={IMAGE_RESOURCE.star} />
            <Image source={IMAGE_RESOURCE.star} />
          </View>
          <Text style={{ marginLeft: 10 }}>
            {`(Xem ${dataTest.totalRatings} đánh giá)`}
          </Text>
        </View>

        {/* Price info */}
        <View style={[styles.flexRow, styles.alignItemFlexEnd]}>
          <Text style={[styles.bold, styles.fontLarge]}>
            {dataTest.price.toLocaleString() + ' đ'}
          </Text>

          <Text
            style={[
              styles.bold,
              styles.textLineThrough,
              styles.colorGray,
              { marginLeft: 45 },
            ]}>
            {dataTest.price.toLocaleString() + ' đ'}
          </Text>
        </View>
        {/* O dau re hoan tien */}
        <View style={[styles.flexRow, styles.alignItemCenter]}>
          <Text
            style={[styles.fontLarge, styles.bold, styles.colorRed]}
            children="Ở đâu rẻ hoàn tiền"
          />
          <TouchableOpacity>
            <Image
              style={{ marginLeft: 10, width: 16, height: 16 }}
              source={IMAGE_RESOURCE.help}
            />
          </TouchableOpacity>
        </View>

        {/* Select color */}
        <View>
          <TouchableOpacity style={styles.buttonChooseColor} onPress={() => {handlePressChoose()}}>
            <Text children={dataTest.colors.length + ' MÀU - CHỌN MÀU'} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Buy button*/}
      <View>
        <TouchableOpacity style={[styles.buttonChooseColor, styles.buttonBuy]}>
          <Text style={styles.buttonColorWhite} children="CHỌN MUA" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: "space-between",
    backgroundColor: '#ecf0f1',
    paddingVertical: 8,
    paddingHorizontal: 15
  },
});
