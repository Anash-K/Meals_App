import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.container]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer,{backgroundColor:color}]}>
          <Text style={color}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    height: 150,
    elevation: 8,
    borderRadius: 8,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    padding: 14,
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
