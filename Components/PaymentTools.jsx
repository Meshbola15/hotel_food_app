import { View, Text, Pressable, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import { AppStateContext } from "../Context/Context";
import { COLORS } from "../Data/Data";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";

const PaymentTools = ({ icon, name, pageLink }) => {
  const navigation = useNavigation();
  const { isDark } = useContext(AppStateContext);
  return (
    <Pressable
      onPress={() => navigation.navigate(`${pageLink}`)}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        // borderRadius: 30,
        // height: 110,
        paddingHorizontal: 20,
        paddingVertical: 25,
        // backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        margin: 5,
        // backgroundColor: `${isDark ? COLORS.gray : COLORS.white}`,
      }}
    >
      <View
        style={{
          marginRight: 20,
        }}
      >
        <Image
          source={icon}
          style={{
            width: 30,
            height: 30,
            tintColor: `${isDark ? COLORS.white : COLORS.black}`,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 18,
          // marginTop: 10,
          color: `${isDark ? COLORS.white : COLORS.black}`,
        }}
      >
        {name}
      </Text>
    </Pressable>
  );
};

export default PaymentTools;
