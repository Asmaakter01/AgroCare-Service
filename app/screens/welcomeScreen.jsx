import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import navigationString from "../../components/constant/navigationString";

const WelcomeScreens = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const theme = useTheme();
  const navigation = useNavigation()

  return (
    <ScrollView
      style={{
        flex: 1,
        width: "100%",
        backgroundColor:theme.colors.background
      }}
      contentContainerStyle={{
        flexGrow: 1,
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
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 15,
        }}
      >
        <Text style={{
            textAlign:"center",
            fontFamily:"latoBlack",
            fontSize:34,
            marginBottom:20,
            color:theme.colors.primary
        }}>
          AgroCare & Service
        </Text>
        <Text style={{
            textAlign:"center",
            fontFamily:"latoBold",
            fontSize:18
        }}>
          Your Premier Destination for Lush Greenery: Elevate your space with
          our exceptional plant selection
        </Text>
        <Button
          mode="contained"
          style={{
            marginTop: 25,
            backgroundColor: theme.colors.primary,
          }}
          labelStyle={{
            color:theme.colors.allWhite,
            fontFamily:"lato"
          }}
          onPress={()=>navigation.navigate(navigationString.Login)}
        >
          Get Started
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default WelcomeScreens;
