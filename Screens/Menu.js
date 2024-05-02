import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { message, COLORS } from "../Data/Data";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { AppStateContext } from "../Context/Context";

const Menu = () => {
  const navigation = useNavigation();
  const { isDark } = useContext(AppStateContext);

  return (
    <SafeAreaView
      style={{
        marginTop: 20,
        backgroundColor: `${isDark ? COLORS.black : COLORS.white}`,
        flex: 1,
      }}
    >
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "700",
            marginVertical: 10,
            marginTop: 30,
            color: `${isDark ? COLORS.white : COLORS.black}`,
          }}
        >
          Notifications
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            // backgroundColor: "rgba(212, 212, 212, .5)",
            // borderRadius: 100 / 2,
            height: 40,
            width: 40,
            position: "absolute",
            top: 30,
            left: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            name="keyboard-backspace"
            size={20}
            color={isDark ? COLORS.white : COLORS.black}
          />
        </TouchableOpacity>
        <FlatList
          data={message}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: `${isDark ? "#2E2E2E" : "#f7f7f7"}`,
                borderColor: "grey",
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginVertical: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "900",
                  textTransform: "capitalize",
                  color: `${isDark ? COLORS.white : COLORS.black}`,
                }}
              >
                {item.title.slice(0, 35)}...
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "400",
                  color: `${isDark ? COLORS.white : COLORS.black}`,
                }}
              >
                {item.message.slice(0, 60)}...
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Menu;
