import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorites from "./screens/FavoriteDishes";
import IconButton from "./components/IconButton";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
  return(
    <Drawer.Navigator screenOptions={{
      headerStyle:{backgroundColor:'#1F2833',},
      headerTintColor:'white',
      drawerContentStyle:{backgroundColor:'#d0bdf4'},
      drawerActiveTintColor:"#0049B7",
      drawerActiveBackgroundColor:'#88abd4',
      drawerInactiveTintColor:'#1F2833'

    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title:"Categories",
        drawerIcon:({color,size}) => (
          <IconButton IconName={'layer-group'} color={color} size={size}/>
        )
      }}/>
      <Drawer.Screen name="Favorites" component={Favorites} options={{
        title:"Favorite Food",
        drawerIcon:({color,size}) => (
          <IconButton IconName={'star-of-life'} color={color} size={size}/>
        )
      }}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style={"light"} />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1F2833" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="MealsCategories"
          component={DrawerNavigator}
          options={{
            title: "All Categories",
            headerShown:false
          }}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverviewScreen}
          options={{ title: "Meal Overview" }}
        />
        <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1F2833",
  },
  container: {
    flex: 1,
    backgroundColor: "#1F2833",
  },
});
