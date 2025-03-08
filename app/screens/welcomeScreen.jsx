import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

const WelcomeScreens = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  return (
    <ScrollView
      style={{
        flex: 1,
        width: "100%",
      }}
      contentContainerStyle={{
        flexGrow:1
      }}
    >
      <Image
        source={require("../../assets/images/plant.png")}
        style={{
          width: screenWidth,
          height: screenHeight / 1.7,
        }}
      />
      <View 
      style={{
         flex:1,
         alignItems:"center",
         justifyContent:"center",
         paddingHorizontal: 15,
      }}
      >
      <Text>Your Premier Destination for Lush Greenery: Elevate your space with our exceptional plant selection</Text>
      <Button mode="contained" style={{
        marginTop:16,
        backgroundColor:"#000000"
      }}>Get Started</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default WelcomeScreens;
