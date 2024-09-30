import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

// https://medium.com/@stheodorejohn/mastering-number-formatting-in-javascript-d72acc0453df
// You can import supported modules from npm
import { Card } from 'react-native-paper';

import { useState } from 'react';

import AHref from './components/Ahref';

// or any files within the Snack

const IMAGE_BOOK = require('./assets/img/book.jpg');

export default function App() {

  const [value, setValue] = useState(0);

  const giaSP = 29000;

  const [thanhTien, setThanhTien] = useState(0);

  const increaseValue = () => {
    setValue(value + 1);
    setThanhTien((value + 1) * giaSP);
  }

  const decreaseValue = () => {
    if (value == 0)
      return;
    setValue(value - 1);
    setThanhTien((value - 1) * giaSP);
  }

  return (
    <SafeAreaView style={styles.container}>
    { /* Khung hinh va nut tang giam */}
    <View style={styles.topContainer}> 
      <View style={styles.flexRow}>
        <Image
          source={IMAGE_BOOK}
          style={styles.imageBook}
          resizeMode="contain"
        />

        <View>
          <Text style={styles.titleText}>Bí mật của may mắn</Text>
          <Text>Cung cấp bởi Obx Book Store</Text>
          <Text style={styles.priceText}>29,000 đ</Text>
          <Text style={styles.priceDiscountText}>229,000 đ</Text>
          <View style={styles.flexRowBetween}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonInDeView} onPress={decreaseValue}>
                <Text style={styles.buttonInDeCart}>-</Text>
              </TouchableOpacity>

              <Text>{value}</Text>

              <TouchableOpacity style={styles.buttonInDeView} onPress={increaseValue}>
                <Text style={styles.buttonInDeCart}>+</Text>
              </TouchableOpacity>
            </View>
            <AHref>Mua sau</AHref>
          </View>
        </View>
      </View>

      { /* Ma giam gia da luu */ }

      <View style={[styles.flexRow, styles.viewDiscoundContainer]}>
        <Text>Mã giảm giá đã lưu</Text>
        <AHref>Xem tại đây</AHref>
      </View>

      { /* Nhap ma giam gia */ }

      <View style={[styles.flexRow, {marginTop: 20}]}>
        <View style={[styles.flexRow, styles.inputDiscount]}>
          <View style={styles.discountYellow}/>

          <TextInput style={styles.textDiscountInput} placeholder="Mã giảm giá"/>
        </View>

        <TouchableOpacity style={styles.buttonAddCp}>
          <Text style={styles.textAddCP}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      { /* Phieu qua tang */ }

      <View style={[styles.flexRow, {marginTop: 20}]}>
        <Text>Bạn có phiếu quà tặng của OBX/Ubox/Momo?</Text>
        
        <AHref>Nhập tại đây</AHref>
      </View>

    { /* Phieu qua tang */ }

      <View style={[styles.flexRowBetween, {marginTop: 20}]}>
        <Text style={styles.lblTamTinh}>Tạm tính</Text>
        
        <Text style={[styles.lblTamTinh, {color: "red"}]}>{thanhTien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
      </View>

  </View>

    { /* tien hanh dat hang*/ }
    <View style={styles.nextStepContainer}>
      <View style={[styles.flexRowBetween, {marginTop: 20}]}>
        <Text style={styles.lblTamTinh}>Thành tiền</Text>
        
        <Text style={[styles.lblTamTinh, {color: "red"}]}>{thanhTien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonDatHang}>
          <Text style={styles.textDatHang}>Tiến hành đặt hàng</Text>
        </TouchableOpacity>
      </View>
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  nextStepContainer: {
    paddingBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
    gap: 10
  },
  topContainer:{
    paddingVertical: 10,
    backgroundColor: "white"
  },
  textDatHang: {
    color: "white",
    fontSize: 15
  },
  buttonDatHang: {
    backgroundColor: "red",
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  lblTamTinh:{
    fontWeight: "bold",
    fontSize: 25
  },
  textAddCP: {
    color: "#ffffff",
    fontWeight: "bold"
  },
  buttonAddCp:{
    backgroundColor: "#4f78ff",
    height: 38,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  inputDiscount:{
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 3
  },
  textDiscountInput:{
    width: 200,
    height: 30
  },
  discountYellow:{
    width: 30,
    height: 15,
    backgroundColor: "yellow"
  },
  viewDiscoundContainer: {
    marginTop: 20,
    gap: 30
  },
  flexRowBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "white",
    padding: 10
  },
  buttonInDeCart: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonInDeView: {
    backgroundColor: '#e3e3e3',
    width: 30,
    display: 'flex',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  priceDiscountText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  titleText: {
    fontWeight: 'bold',
    marginBottom: 12,
  },
  priceText: {
    marginTop: 12,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    gap: 10,
    backgroundColor: "white"
  },
  imageBook: {
    height: 150,
    width: 105,
  },
  container: {
    marginTop: 35,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'gray'
  },
});
