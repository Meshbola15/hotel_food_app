import { View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppStateContext } from "../Context/Context";
import { COLORS } from "../Data/Data";

const ProfileList = ({ icon, title, page }) => {
  const navigation = useNavigation();
  const { isDark } = useContext(AppStateContext);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${page}`)}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        backgroundColor: "#fafcfb",
        paddingHorizontal: 15,
        marginVertical: 2,
        backgroundColor: `${isDark ? COLORS.black : COLORS.white}`,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {icon}
        <Text
          style={{
            color: `${isDark ? COLORS.white : COLORS.black}`,
            fontSize: 20,
            fontWeight: "600",
            marginLeft: 15,
          }}
        >
          {title}
        </Text>
      </View>
      <MaterialIcons
        name="arrow-forward-ios"
        size={20}
        color={isDark ? COLORS.white : COLORS.black}
      />
    </TouchableOpacity>
  );
};

export default ProfileList;
