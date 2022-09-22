import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Details from "../Screens/Details";

const Stack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Stack;
