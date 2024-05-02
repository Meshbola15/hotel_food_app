import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React, { useState, useContext } from "react";
import { AppStateContext } from "../Context/Context";
import { StatusBar } from "expo-status-bar";
import { COLORS, walletIconList } from "../Data/Data";
import PaymentTools from "../Components/PaymentTools";

const Wallet = () => {
  const navigation = useNavigation();
  const [showText, setShowText] = useState(false);
  const { isDark } = useContext(AppStateContext);

  return (
    <SafeAreaView
      style={{
        paddingTop: 20,
        flex: 1,
        backgroundColor: `${isDark ? COLORS.black : COLORS.white}`,
      }}
    >
      <StatusBar backgroundColor="#eb9234" style="light" translucent={true} />
      {/* <Statusbarcon style="" backgroundColor="white" /> */}
      <View
        style={{
          backgroundColor: "#eb9234",
          width: "100%",
          padding: 20,
          paddingTop: 60,
          position: "relative",
          top: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
            }}
          >
            Meshack Bolarinwa
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              onPress={() => setShowText(!showText)}
              style={{
                color: "white",
                fontSize: 50,
                marginRight: 12,
              }}
            >
              ${showText ? "50,000" : "******"}
            </Text>
            <Pressable
              onPress={() => {
                setShowText(!showText);
              }}
            >
              <FontAwesome5
                name={showText ? "eye-slash" : "eye"}
                size={20}
                color="white"
              />
            </Pressable>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Person")}>
          <Image
            source={require("../assets/person.png")}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 30,
        }}
      >
        {/* <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
            marginBottom: 10,
            color: `${isDark ? COLORS.white : COLORS.black}`,
          }}
        >
          Recent Payments
        </Text>
        <FlatList
          data={recentPayments}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 10,
                borderBottomWidth: 0.5,
                borderBottomColor: "#9e9d9b",
                // backgroundColor: "white",
                // elevation: 20,
                // shadowOffset: {
                //   width: 10,
                //   height: 10,
                // },
                // shadowColor: "#9e9d9b",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: `${isDark ? COLORS.white : COLORS.black}`,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "400",
                  color: `${isDark ? COLORS.white : COLORS.black}`,
                }}
              >
                ${item.price}
              </Text>
            </View>
          )}
        /> ` 
        <Pressable
          style={{
            alignSelf: "flex-end",
            paddingVertical: 5,
          }}
        >
          <Text
            style={{
              opacity: 0.3,
              fontSize: 15,
              fontWeight: "600",
              color: `${isDark ? COLORS.white : COLORS.black}`,
            }}
          >
            Read more
          </Text>
        </Pressable> */}

        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
            marginVertical: 10,
            color: `${isDark ? COLORS.white : COLORS.black}`,
          }}
        >
          Tools
        </Text>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {walletIconList.map(( item ) => (
            <PaymentTools
              // key={}
              icon={item.iconImage}
              name={item.iconName}
              pageLink={item.pageLink}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wallet;
