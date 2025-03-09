import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import navigationString from "../../../components/constant/navigationString";
import HomeScreens from "../../screens/homeScreens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-paper";
import MarketPlace from "../../screens/MarketPlace";
import Community from "../../screens/Community";
import AccountProfile from "../../screens/AccountProfile";

const Tab = createBottomTabNavigator();

const HomeRoute = () => {
    const theme = useTheme()
  return (
    <Tab.Navigator
    screenOptions={{
        backBehavior: "history",
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray,
        // tabBarShowLabel: false
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        }
      }}
      initialRouteName={navigationString.SubHome}
    >
      <Tab.Screen
          name={navigationString.SubHome}
          component={HomeScreens}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    tintColor: focused
                      ? theme.colors.primary
                      : theme.colors.gray,
                    width: 20,
                    height: 20,
                    objectFit: "contain"
                  }}
                  source={require("../../../assets/icons/home.png")}
                />
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <View
                  style={
                    focused
                      ?  {
                        width: 5,
                        height: 5,
                        borderRadius: 50,
                        backgroundColor: theme.colors.primary,
                        marginTop: 6,
                      }
                      : {
                        width: 0,
                        height: 0,
                        borderRadius: 50,
                        marginTop: 6,
                        backgroundColor: theme.colors.background,
                      }
                  }
                ></View>
              );
            }
          }}
        />

      <Tab.Screen
          name={navigationString.Shop}
          component={MarketPlace}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    tintColor: focused
                      ? theme.colors.primary
                      : theme.colors.gray,
                    width: 20,
                    height: 20,
                    objectFit: "contain"
                  }}
                  source={require("../../../assets/icons/bag.png")}
                />
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <View
                  style={
                    focused
                      ?  {
                        width: 5,
                        height: 5,
                        borderRadius: 50,
                        backgroundColor: theme.colors.primary,
                        marginTop: 6,
                      }
                      : {
                        width: 0,
                        height: 0,
                        borderRadius: 50,
                        marginTop: 6,
                        backgroundColor: theme.colors.background,
                      }
                  }
                ></View>
              );
            }
          }}
        />

<Tab.Screen
          name={navigationString.Community}
          component={Community}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    tintColor: focused
                      ? theme.colors.primary
                      : theme.colors.gray,
                    width: 20,
                    height: 20,
                    objectFit: "contain"
                  }}
                  source={require("../../../assets/icons/group.png")}
                />
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <View
                  style={
                    focused
                      ?  {
                        width: 5,
                        height: 5,
                        borderRadius: 50,
                        backgroundColor: theme.colors.primary,
                        marginTop: 6,
                      }
                      : {
                        width: 0,
                        height: 0,
                        borderRadius: 50,
                        marginTop: 6,
                        backgroundColor: theme.colors.background,
                      }
                  }
                ></View>
              );
            }
          }}
        />

<Tab.Screen
          name={navigationString.Profile}
          component={AccountProfile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    tintColor: focused
                      ? theme.colors.primary
                      : theme.colors.gray,
                    width: 20,
                    height: 20,
                    objectFit: "contain"
                  }}
                  source={require("../../../assets/icons/menu.png")}
                />
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <View
                  style={
                    focused
                      ?  {
                        width: 5,
                        height: 5,
                        borderRadius: 50,
                        backgroundColor: theme.colors.primary,
                        marginTop: 6,
                      }
                      : {
                        width: 0,
                        height: 0,
                        borderRadius: 50,
                        marginTop: 6,
                        backgroundColor: theme.colors.background,
                      }
                  }
                ></View>
              );
            }
          }}
        />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomeRoute;
