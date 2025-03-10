import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import navigationString from "../../../components/constant/navigationString";
import WelcomeScreens from "../../screens/welcomeScreen";
import LoginScreen from "../../screens/loginScreen";
import RegisterScreen from "../../screens/registerScreen";
import HomeScreens from "../../screens/homeScreens";
import HomeRoute from "./HomeRoute";

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
      <Stack.Screen
        name={navigationString.Register}
        component={RegisterScreen}
      />
      <Stack.Screen
        name={navigationString.Login}
        component={LoginScreen}
      />
      <Stack.Screen
        name={navigationString.Home}
        component={HomeRoute}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default RootRoute;
