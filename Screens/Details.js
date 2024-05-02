import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import React, { useContext } from "react";
import { AppStateContext } from "../Context/Context";
import { COLORS } from "../Data/Data";
import { StatusBar } from "expo-status-bar";

const Details = ({ route, navigation }) => {
  const { isDark } = useContext(AppStateContext);
  const { item } = route.params;
  // const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: `${isDark ? COLORS.black : COLORS.white}`,
        flex: 1,
      }}
    >
      <StatusBar style={isDark ? "light" : "dark"} />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: "rgba(212, 212, 212, .5)",
          borderRadius: 100 / 2,
          height: 40,
          width: 40,
          position: "absolute",
          top: 60,
          left: 20,
          zIndex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialIcons name="keyboard-backspace" size={20} color="white" />
      </TouchableOpacity>
      <ScrollView>
        <View
          style={{
            position: "relative",
            height: 500,
            width: "100%",
            padding: 10,
          }}
        >
          <Image
            source={item.image}
            style={{
              resizeMode: "cover",
              height: "100%",
              width: "100%",
              borderRadius: 30,
            }}
          />
        </View>

        <FlatList
          data={item.otherImages}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image
              source={item.path}
              style={{
                width: 120,
                height: 80,
                resizeMode: "contain",
                borderRadius: 25,
                margin: 10,
              }}
            />
          )}
        />

        <View
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: "black",
              fontWeight: "900",
              color: `${isDark ? COLORS.white : COLORS.black}`,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              color: "orange",
              fontSize: 20,
            }}
          >
            {item.location}
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: "left",
              color: "#404040",
              marginVertical: 10,
              fontWeight: "400",
              color: `${isDark ? COLORS.gray : COLORS.black}`,
            }}
          >
            {item.description.slice(0, 420)}..
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            flex: 3,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              height: 60,
              width: 60,
              borderRadius: 100 / 2,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(212, 212, 212, .5)",
            }}
          >
            <Fontisto name="heart" color="#32b3ae" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 60,
              flex: 2,
              width: "100%",
              backgroundColor: `${isDark ? COLORS.gray : COLORS.black}`,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100 / 2,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: `${isDark ? COLORS.black : COLORS.white}`,
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
