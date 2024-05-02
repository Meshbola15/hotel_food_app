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

const HistoryPage = () => {
  const isDark = useContext(AppStateContext);
  const TransactionHeaderText = ["Date", "time", "transactionID", "type"];
  return (
    <SafeAreaView
      style={{
        backgroundColor: `${isDark ? COLORS.black : COLORS.grey}`,
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
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: COLORS.white,
                  fontWeight: 600,
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
                    color: `${isDark ? COLORS.white : COLORS.grey}`,
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
