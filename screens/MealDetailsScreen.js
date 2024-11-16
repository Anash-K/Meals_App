import {
    Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MeatDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

const MealDetailsScreen = ({ route , navigation}) => {
  const { MealId } = route.params;

  const selectedMeal = MEALS.find((item) => item.id == MealId);

  const handlePress =() =>{
    console.log("pressed!");
  }


  useLayoutEffect(() =>{
    navigation.setOptions({
        headerRight:() =>{
            return (
              
                <IconButton onPress={handlePress}/>
            )
        }
    })
  })

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: selectedMeal.imageUrl }}
            style={styles.imageStyle}
          />
        </View>

        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
        />
        <View>
          <SubTitle title={"ingredients"} />
          <List data={selectedMeal.ingredients} />
          <SubTitle title={"Steps"} />

          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 22,
  },
  container: {
    padding: 12,
  },
  imageContainer: {
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    overflow: Platform.select({ android: "hidden" }),
  },
  imageStyle: {
    width: "100%",
    height: 350,
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop:12,
    marginVertical: 8,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default MealDetailsScreen;
