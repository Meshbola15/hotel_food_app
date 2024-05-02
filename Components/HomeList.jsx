import React, { useContext } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "../Data/Data";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image, Text, View } from "react-native";
import { AppStateContext } from "../Context/Context";

const HomeList = ({ item }) => {
  const navigation = useNavigation();
  const { isDark } = useContext(AppStateContext);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { item })}
      style={{
        height: 400,
        width: 300,
        borderRadius: 30,
        position: "relative",
        marginLeft: 20,
      }}
    >
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          borderRadius: 30,
        }}
      />
      <TouchableOpacity
        style={{
          height: 40,
          position: "absolute",
          top: 10,
          right: 10,
          width: 40,
          borderRadius: 100 / 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(212, 212, 212, .5)",
        }}
      >
        <Fontisto name="heart" color="#32b3ae" size={20} />
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

        }}
      >
        <View>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 30,
              fontWeight: "900",
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            {item.location}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="star" color="#face5f" size={20} />
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "normal",
              marginLeft: 5,
            }}
          >
            {item.rating}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeList;
