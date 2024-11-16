import { StyleSheet, View, Text, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

const MealsOverViewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayMeals = MEALS.filter((item) =>
    item.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const CategoryTitle = CATEGORIES.find(
      (item) => item.id == categoryId
    ).title;
    navigation.setOptions({
      title: CategoryTitle,
    });
  }, [categoryId, navigation]);

  const pressHandler = (id) => {
    navigation.navigate("MealDetails", {
      MealId: id,
    });
  };

  const renderMeal = ({ item }) => {
    return <MealItem item={item} onPress={pressHandler} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:32
  },
});

export default MealsOverViewScreen;
