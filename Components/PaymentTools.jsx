import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AppStateContext } from "../Context/Context";
import { COLORS } from "../Data/Data";

const PaymentTools = ({ icon, name }) => {
  const { isDark } = useContext(AppStateContext);
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        width: 110,
        height: 110,
        elevation: 3,
        backgroundColor: "white",
        margin: 5,
        backgroundColor: `${isDark ? COLORS.gray : COLORS.white}`,
      }}
    >
      {icon}
      <Text
        style={{
          fontSize: 18,
          marginTop: 10,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default PaymentTools;
