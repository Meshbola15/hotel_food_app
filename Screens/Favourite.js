import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { AppStateContext } from "../Context/Context";
import { COLORS } from "../Data/Data";
import { StatusBar } from "expo-status-bar";

const Favourite = () => {
  const { isDark } = useContext(AppStateContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: `${isDark ? COLORS.black : COLORS.white}`,
        flex: 1,
      }}
    >
      <StatusBar style={isDark ? "light" : "dark"} />
      <View
        style={{
          marginTop: 40,
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "900",
            textAlign: "center",
            color: `${isDark ? COLORS.white : COLORS.black}`,
          }}
        >
          Opps.... Your Have Not Favourites
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            alignSelf: "center",
            paddingHorizontal: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#d98d3d",
            height: 60,
            borderRadius: 30,
            flexDirection: "row",
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Go back
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Favourite;
