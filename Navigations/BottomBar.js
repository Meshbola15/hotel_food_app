import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import { StyleSheet, View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Cake from "../Screens/Cake";
import Wallet from "../Screens/Wallet";
import Person from "../Screens/Person";
import { AppStateContext } from "../Context/Context";
import { COLORS } from "../Data/Data";

const BottomBar = () => {
  const Tab = createBottomTabNavigator();
  const { isDark } = useContext(AppStateContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: "absolute",
          // bottom: 30,
          // paddingVertical: 10,
          height: 100,
          elevation: 0,
          backgroundColor: `${isDark ? COLORS.black : COLORS.white}`,
          borderTopWidth: 0,
        },
        // headerTransparent: false,
        headerTitleStyle: { display: "none" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome
                name="circle-o"
                size={30}
                color={focused ? "orange" : "#545353"}
              />

              <View
                style={{
                  display: focused ? "flex" : "none",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 3,
                  width: 3,
                  backgroundColor: focused ? "orange" : "#545353",
                  borderRadius: 100 / 2,
                }}
              ></View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cake"
        component={Cake}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo
                name="cake"
                size={30}
                color={focused ? "orange" : "#545353"}
              />

              <View
                style={{
                  display: focused ? "flex" : "none",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 3,
                  width: 3,
                  backgroundColor: focused ? "orange" : "#545353",
                  borderRadius: 100 / 2,
                }}
              >
                <Text>.</Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="wallet-outline"
                size={30}
                color={focused ? "orange" : "#545353"}
              />

              <View
                style={{
                  display: focused ? "flex" : "none",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 3,
                  width: 3,
                  backgroundColor: focused ? "orange" : "#545353",
                  borderRadius: 100 / 2,
                }}
              >
                <Text>.</Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Person"
        component={Person}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Octicons
                name="person"
                size={30}
                color={focused ? "orange" : "#545353"}
              />

              <View
                style={{
                  display: focused ? "flex" : "none",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 3,
                  width: 3,
                  backgroundColor: focused ? "orange" : "#545353",
                  borderRadius: 100 / 2,
                }}
              ></View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 3.3,
    elevation: 3,
  },
});

export default BottomBar;
