import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const IconButton = ({onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <FontAwesome5 name="utensils" size={24} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});

export default IconButton;
