import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AppStateContext } from "../Context/Context";
import { COLORS } from "../Data/Data";
import { useNavigation } from "@react-navigation/native";

const PaymentHistory = ({ props }) => {
  const { isDark } = useContext(AppStateContext);
  const navigation = useNavigation();
  const transaction = props.transactionId;

  const sliceTransactionXID =
    transaction.slice(0, 5) + "*******" + transaction.slice(0, 5);
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 20,
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={[
          styles.textStyle,
          { color: isDark ? COLORS.black : COLORS.white },
        ]}
      >
        {props.date}
      </Text>
      <Text
        style={[
          styles.textStyle,
          { color: isDark ? COLORS.black : COLORS.white },
        ]}
      >
        {props.time}
      </Text>
      <Text
        style={[
          styles.textStyle,
          { color: isDark ? COLORS.black : COLORS.white },
        ]}
      >
        {sliceTransactionXID}
      </Text>
      <Text
        style={[
          styles.textStyle,
          { color: isDark ? COLORS.black : COLORS.white },
        ]}
      >
        {props.type}
      </Text>
    </View>
  );
};

export default PaymentHistory;

const styles = StyleSheet.create({
  textStyle: {},
});
