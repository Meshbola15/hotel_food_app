import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { AppStateContext } from "../Context/Context";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "../Data/Data";
import { Octicons } from "@expo/vector-icons";

const HomeHeaderList = () => {
  const [state, setstate] = useState(true);
  const navigation = useNavigation();
  const { isDark } = useContext(AppStateContext);
  return (
    <View>
      <View
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 50,
          marginTop: 60,
        }}
      >
        <TouchableOpacity
          style={styles.headerBtns}
          onPress={() => navigation.navigate("Menu")}
        >
          <MaterialIcons
            name="notifications"
            size={20}
            color={isDark ? COLORS.white : COLORS.black}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBtns}>
          <AntDesign
            name="menufold"
            size={20}
            color={isDark ? COLORS.white : COLORS.black}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.HomeContainer}>
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.orange,
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginBottom: 20,
          }}
        >
          <Octicons
            name="search"
            size={24}
            color={isDark ? COLORS.white : COLORS.gray}
          />
          <TextInput
            placeholder="Search Items"
            placeholderTextColor={isDark ? COLORS.white : COLORS.gray}
            style={{
              marginLeft: 20,
              width: "100%",
              color: `${isDark ? COLORS.white : COLORS.black}`,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 40,
            fontWeight: "200",
            color: `${isDark ? COLORS.white : COLORS.black}`,
          }}
        >
          Explore this
        </Text>
        <Text
          style={{
            fontSize: 60,
            color: `${isDark ? COLORS.white : COLORS.black}`,
            fontWeight: "900",
          }}
        >
          Fantastic Earth
        </Text>
      </View>
    </View>
  );
};

export default HomeHeaderList;

const styles = StyleSheet.create({
  headerBtns: {
    paddingHorizontal: 20,
  },

  HomeContainer: {
    textAlign: "left",
    paddingHorizontal: 20,
  },
});
