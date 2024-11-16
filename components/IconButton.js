import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const IconButton = ({IconName , onPress ,size ,color}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <FontAwesome5 name={IconName} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});

export default IconButton;
