import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Text, useColorScheme, View } from "react-native";
import Routes from "./routes/routes";
import { useFonts } from "expo-font";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { Colors, DarkColors } from "../components/theme/colors";

const LightTheme = {
  ...MD3LightTheme,
  roundness: 10,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...MD3LightTheme.colors,
    ...Colors,
    text: Colors.black,
  },
};
const DarkTheme = {
  ...MD3DarkTheme,
  roundness: 10,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkColors,
    text: DarkColors.black,
  },
};
const Stack = createStackNavigator();
export default function App() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    lato: require("../assets/fonts/Lato-Regular.ttf"),
    latoBold: require("../assets/fonts/Lato-Bold.ttf"),
    latoBlack: require("../assets/fonts/Lato-Black.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const theme = colorScheme === "dark" ? DarkTheme : LightTheme;
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </NavigationContainer>
  );
}
