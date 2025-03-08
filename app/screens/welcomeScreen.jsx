import React from "react";
import { Image, StyleSheet, View } from "react-native";

const WelcomeScreens = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <Image
        source={require("../../assets/images/plant.png")}
        style={{
          height: 200,
          width: "100%",
        }}
        resizeMode="contain"
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WelcomeScreens;
