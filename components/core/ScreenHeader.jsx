import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Button, Menu, useTheme } from "react-native-paper";
import { Entypo, AntDesign } from "react-native-vector-icons";

const ScreenHeader = ({
  title,
  onPress,
  needWhite,
  isOptionDot = false,
  needBack = true
}) => {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 15,
          paddingTop: 0,
          paddingBottom: 0,
          marginVertical: 8,
          position: "relative"
        }
      ]}
    >
      <View
        style={{
          position: isOptionDot ? "relative" : "absolute",
          zIndex: 999
        }}
      >
        {needBack ? (
          <TouchableOpacity
            style={{ width:  25 }}
            onPress={() => onPress()}
          >
            <AntDesign
              name={"arrowleft"}
              size={25}
              color={needWhite ? "#ffffff" : theme.colors.black}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 25 }}></View>
        )}
      </View>

      <View
        style={{
          width: isOptionDot ? "75%" : "100%"
        }}
      >
        <Text
          style={{
            color: needWhite ? "#ffffff" : theme?.colors?.black,
            fontSize: 20,
            fontFamily: "latoBold",
            textAlign: "center"
          }}
        >
          {title}
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({});

export default ScreenHeader;