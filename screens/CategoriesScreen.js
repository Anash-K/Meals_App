import React from "react";
import { FlatList, View } from "react-native"; // Added View import
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const RenderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", { categoryId: item.id });
    };
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={RenderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={"2"}
      />
    </View>
  );
};

export default CategoriesScreen;
