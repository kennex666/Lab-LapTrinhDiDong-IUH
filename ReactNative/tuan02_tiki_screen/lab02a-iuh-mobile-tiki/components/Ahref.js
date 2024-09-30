import {TouchableOpacity, StyleSheet, Text} from "react-native"

export default function AHref ({onPress, children}) {
  return (
    <TouchableOpacity onPress={onPress && onPress()}>
      <Text style={styles.styleText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create(
{
    styleText: {
      color: "blue"
    }
})