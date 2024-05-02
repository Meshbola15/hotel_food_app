// import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Details from "./Screens/Details";
import BottomBar from "./Navigations/BottomBar";
import Menu from "./Screens/Menu";
import Person from "./Screens/Person";
import Favourite from "./Screens/Favourite";
import AppStateProvider from "./Context/Context";
import Profile from "./Screens/Profile";
import Settings from "./Screens/Settings";
import HistoryPage from "./Screens/History";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <AppStateProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Tab" component={BottomBar} />
          <Stack.Screen name="Person" component={Person} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Favourite" component={Favourite} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="History" component={HistoryPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppStateProvider>
  );
};

export default App;
