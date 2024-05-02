import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AppStateContext } from "../Context/Context";
import { COLORS } from "../Data/Data";
import { useNavigation } from "@react-navigation/native";

const LogOut = () => {
  const isDark = useContext(AppStateContext);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `${isDark ? COLORS.black : COLORS.white}`,
      }}
    >
      <View
        style={{
          width: "60%",
        }}
      >
        <Text
          style={{
            color: `${isDark ? COLORS.white : COLORS.black}`,
            marginBottom: 40,
            textAlign: "center",
            fontSize: 25,
            fontWeight: 600,
          }}
        >
          You Need To Login To get Started
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.gray,
            borderRadius: 20,
            // paddingHorizontal: 20,
            paddingVertical: 40,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Tab");
            }}
            style={{
              alignItems: "center",
              justifyContent: "center",

              width: "auto",
            }}
          >
            <Text
              style={{
                color: `${isDark ? COLORS.white : COLORS.black}`,
              }}
            >
              Get Started
            </Text>
            <Ionicons
              name="arrow-forward-sharp"
              size={24}
              color={isDark ? COLORS.white : COLORS.black}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LogOut;

const styles = StyleSheet.create({});
