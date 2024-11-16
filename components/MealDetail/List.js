import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return data.map((item, index) => (
    <View style={styles.listItems} key={index}>
      <Text style={styles.itemText} >
        {item}
      </Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItems: {
    borderRadius:8,
    paddingHorizontal: 12,
    paddingVertical: 5,
    fontSize: 12,
    backgroundColor:"#1F2833",
    marginVertical:4,
    marginHorizontal:12
  },itemText:{
    color:'white',
    lineHeight:19,
    textTransform:'capitalize'
  }
});

export default List;
