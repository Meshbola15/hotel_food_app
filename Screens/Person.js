import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import Feather from "@expo/vector-icons/Feather";
// import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import Entypo from "@expo/vector-icons/Entypo";
import ProfileList from "../Components/ProfileList";
import { AppStateContext } from "../Context/Context";
import { COLORS } from "../Data/Data";
import { StatusBar } from "expo-status-bar";

const Person = () => {
  const { isDark, setisDark } = useContext(AppStateContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: `${isDark ? COLORS.black : COLORS.white}`,
      }}
    >
      <StatusBar
        style={isDark ? "light" : "dark"}
        translucent
        animated
        backgroundColor={COLORS.orange}
      />
      <ScrollView>
        <View
          style={{
            paddingBottom: 30,
            width: "100%",
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            backgroundColor: "orange",
          }}
        >
          <View
            style={{
              marginTop: 100,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/person.png")}
              style={{
                height: 120,
                width: 120,
              }}
            />
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  fontWeight: "600",
                  marginRight: 5,
                }}
              >
                Meshack Bolarinwa
              </Text>
              <TouchableOpacity>
                <Feather name="edit" color="white" size={15} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/verified.png")}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 3,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Verified Account
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 130,
                height: 40,
                backgroundColor: "#d98d3d",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            paddingHorizontal: 40,
          }}
        >
          <ProfileList
            page="Profile"
            icon={
              <FontAwesome
                name="user-o"
                size={20}
                color={isDark ? COLORS.white : COLORS.black}
              />
            }
            title="Profile"
          />
          <ProfileList
            page="Menu"
            icon={
              <MaterialIcons
                name="notifications"
                size={20}
                color={isDark ? COLORS.white : COLORS.black}
              />
            }
            title="Notifications"
          />
          <ProfileList
            page="Favourite"
            icon={
              <FontAwesome
                name="heart"
                size={20}
                color={isDark ? COLORS.white : COLORS.black}
              />
            }
            title="Favourites"
          />
          <ProfileList
            page="Wallet"
            icon={
              <MaterialIcons
                name="account-balance-wallet"
                size={20}
                color={isDark ? COLORS.white : COLORS.black}
              />
            }
            title="Account"
          />
          {/* <ProfileList
            icon={
              <Entypo
                name="switch"
                size={20}
                color={isDark ? COLORS.white : COLORS.white}
              />
            }
            title="Themes"
          /> */}
          <ProfileList
            page="Settings"
            icon={
              <Octicons
                name="gear"
                size={20}
                color={isDark ? COLORS.white : COLORS.black}
              />
            }
            title="Settings"
          />
        </View>
        <TouchableOpacity
          style={{
            marginVertical: 5,
            alignSelf: "center",
            width: "60%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#d98d3d",
            height: 60,
            borderRadius: 30,
            flexDirection: "row",
          }}
        >
          <FontAwesome name="sign-out" size={20} color="white" />
          <Text
            style={{
              fontSize: 23,
              fontWeight: "600",
              color: "white",
              marginLeft: 5,
            }}
          >
            Login Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        onPress={() => setisDark(!isDark)}
        style={{
          zIndex: 2,
          position: "absolute",
          right: 15,
          top: 50,
          height: 40,
          width: 40,
          borderRadius: 100 / 2,
          // backgroundColor: `${isDark ? COLORS.black : COLORS.gray}`,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isDark ? (
          <Entypo name="light-up" size={20} color="white" />
        ) : (
          <Feather name="moon" size={20} color="white" />
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Person;
