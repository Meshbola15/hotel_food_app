import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { hotels, suggestions, COLORS } from "../Data/Data";
import Statusbarcon from "../Components/Statusbarcon";
import { AppStateContext } from "../Context/Context";
import HomeList from "../Components/HomeList";
import HomeHeaderList from "../Components/HomeHeader";

const Home = () => {
  const { isDark } = useContext(AppStateContext);
  return (
    <SafeAreaView
      style={{
        backgroundColor: `${isDark ? COLORS.black : COLORS.white}`,
        flex: 1,
      }}
    >
      <ScrollView>
        <Statusbarcon style={isDark ? "light" : "dark"} />
        <HomeHeaderList />
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
          <FlatList
            data={hotels}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <HomeList item={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
