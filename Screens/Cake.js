import Octicons from "react-native-vector-icons/Octicons";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS, foods, hotels, suggestions } from "../Data/Data";
import { AppStateContext } from "../Context/Context";

const Cake = () => {
  const navigation = useNavigation();
  const { isDark } = useContext(AppStateContext);
  return (
    <SafeAreaView
      style={{
        backgroundColor: `${isDark ? COLORS.black : COLORS.white}`,
        flex: 1,
      }}
    >
      <ScrollView>
        <StatusBar backgroundColor="#fff" style="dark" translucent={true} />
        <View
          style={{
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 50,
            marginTop: 60,
          }}
        >
          {/* <TouchableOpacity
            style={{ paddingHorizontal: 20 }}
            onPress={() => navigation.navigate("Menu")}
          >
            <Ionicons name="ios-notifications-outline" size={20} />
          </TouchableOpacity> */}
          <TouchableOpacity style={{ paddingHorizontal: 20 }}>
            <AntDesign
              name="search1"
              size={20}
              color={isDark ? COLORS.white : COLORS.black}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            textAlign: "left",
            paddingHorizontal: 20,
          }}
        >
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
              fontWeight: "900",
              color: `${isDark ? COLORS.white : COLORS.black}`,
            }}
          >
            Fantastic Eatery
          </Text>
        </View>

        <FlatList
          data={suggestions}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: item.isActive ? "orange" : "#dedcdc",
                height: 50,
                flex: 1,
                display: "flex",
                alignItems: "center",
                paddingHorizontal: 30,
                justifyContent: "center",
                borderRadius: 25,
                marginHorizontal: 5,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  color: item.isActive ? "white" : "black",
                  fontSize: 20,
                }}
              >
                {item.suggestion}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />

        <View
          style={{
            margin: 10,
            width: "90%",
            borderRadius: 30,
            overflow: "visible",
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              marginBottom: 10,
              fontSize: 30,
              fontWeight: "800",
              color: `${isDark ? COLORS.white : COLORS.black}`,
            }}
          >
            Junks
          </Text>
          <FlatList
            data={foods}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
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
                  <Ionicons name="md-heart" color="#32b3ae" size={20} />
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
                    // width: "80%",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 25,
                        fontWeight: "900",
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 10,
                        fontWeight: "600",
                      }}
                    >
                      {item.smDesc}
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
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cake;
