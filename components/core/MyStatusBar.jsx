import { View, StatusBar, SafeAreaView, Platform } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

const MyStatusBar = ({ backgroundColor, barStyle, isModal }) => {
  const theme = useTheme()
  return (
    <StatusBar
      backgroundColor={theme.colors.lightBar}
      barStyle={theme.colors.barStyle}
    />
  );
};

export default MyStatusBar;