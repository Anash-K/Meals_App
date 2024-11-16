import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetails from "./MeatDetails";

const MealItem = ({ item, onPress }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed && styles.buttonPressed,
          ]}
          onPress={onPress.bind(this ,item.id)}
        >
          <View style={styles.mealItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.imageStyle} />
            <Text style={styles.title}>{item.title}</Text>
            <MealDetails
              duration={item.duration}
              affordability={item.affordability}
              complexity={item.complexity}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  container: {
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    overflow: Platform.select({ android: "hidden" }),
  },
  mealItem: {
    padding: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 7,
    fontWeight: "bold",
  },

  pressableStyle: {
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;
