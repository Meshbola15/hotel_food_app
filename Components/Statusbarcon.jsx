import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Statusbarcon = ({ style, backgroundColor }) => {
  return <StatusBar style={style} backgroundColor={backgroundColor} />;
};

export default Statusbarcon;
