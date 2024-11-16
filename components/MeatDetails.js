import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({ affordability, complexity, duration ,style,textStyle }) => {
  return (
    <View style={[styles.details,style]}>
      <Text style={[styles.detailItem,textStyle]}>{affordability}</Text>
      <Text style={[styles.detailItem,textStyle]}>{complexity}</Text>
      <Text style={[styles.detailItem,textStyle]}>{duration}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 4,
    paddingVertical:1
  },
  detailItem: {
    marginHorizontal: 4,
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight:'500'
  },
});

export default MealDetails;
