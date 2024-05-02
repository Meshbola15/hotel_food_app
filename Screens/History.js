import {
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { AppStateContext } from "../Context/Context";
import { COLORS, historyData } from "../Data/Data";
import PaymentHistory from "../Components/paymentHistory";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HistoryPage = () => {
  const isDark = useContext(AppStateContext);
  const TransactionHeaderText = ["Date", "time", "transactionID", "type"];
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: `${isDark ? COLORS.white : COLORS.grey}`,
        //
        flex: 1,
      }}
    >
      <StatusBar style={isDark ? "light" : "dark"} />

      <FlatList
        data={historyData}
        keyExtractor={(item) => item.transactionId}
        ListHeaderComponent={() => (
          <View>
            <View
              style={{
                paddingBottom: 30,
                width: "100%",
                borderBottomRightRadius: 40,
                borderBottomLeftRadius: 40,
                backgroundColor: "orange",
                paddingTop: 70,
                paddingHorizontal: 20,
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  backgroundColor: "rgba(212, 212, 212, .5)",
                  borderRadius: 100 / 2,
                  height: 40,
                  width: 40,
                  // position: "absolute",
                  // top: 60,
                  // left: 20,
                  zIndex: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                }}
              >
                <MaterialIcons
                  name="keyboard-backspace"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 30,
                  color: COLORS.white,
                  fontWeight: 600,

                  // marginLeft: 20,
                }}
              >
                Transaction History
              </Text>
            </View>
            <View
              style={{
                // display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingHorizontal: 30,
                marginTop: 40,
              }}
            >
              {TransactionHeaderText.map((item) => (
                <Text
                  key={item}
                  style={{
                    color: `${isDark ? COLORS.gray : COLORS.white}`,
                    fontSize: 20,
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </Text>
              ))}
            </View>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row", // Use flexDirection to align items in a row if needed
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderBottomWidth: 0.5,
              borderBottomColor: COLORS.gray,
              paddingHorizontal: 20,
            }}
          >
            <PaymentHistory
              key={item.id || item.index} // Ensure each item has a unique key
              props={item}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default HistoryPage;
