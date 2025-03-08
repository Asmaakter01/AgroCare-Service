import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import navigationString from "../../../components/constant/navigationString";
import WelcomeScreens from "../../screens/welcomeScreen";

const Stack = createStackNavigator();

const RootRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={navigationString.Welcome}
    >
      <Stack.Screen
        name={navigationString.Welcome}
        component={WelcomeScreens}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default RootRoute;
