import {
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export default function Button({title, onPress = () => {}}){ 
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {title}
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create(
  {
    button: {
      paddingHorizontal: 15,
      paddingVertical: 8,
      backgroundColor: "yellow",
      fontSize: 17,
      fontWeight: "bold",
      borderRadius: 10,
      borderColor: "#000",
      borderWidth: 1
    }
  }
)