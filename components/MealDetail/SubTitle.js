import { View, Text, StyleSheet } from "react-native";

const SubTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderBottomWidth: 2,
    marginHorizontal:7,
    marginBottom:12,
    marginTop:10
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
export default SubTitle;
