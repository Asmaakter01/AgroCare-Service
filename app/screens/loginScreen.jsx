import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import ScreenHeader from "../../components/core/ScreenHeader"; 
import { useNavigation } from "@react-navigation/native";
import MyStatusBar from "../../components/core/MyStatusBar";
import navigationString from "../../components/constant/navigationString";

const LoginScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [values, setValues] = useState({ 
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <MyStatusBar />
      <View
        style={{
          paddingHorizontal: 18,
        }}
      >
        <ScreenHeader title={"Login"} onPress={() => navigation.goBack()} />
      </View>
      <View
        style={{
          paddingHorizontal: 18,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "latoBlack",
            fontSize: 34,
            marginBottom: 20,
            color: theme.colors.primary,
          }}
        >
          AgroCare & Service
        </Text>

        <Text
          style={{
            textAlign: "center",
            fontFamily: "latoBold",
            fontSize: 18,
          }}
        >
          Access AgroCare – Your One-Stop Agri & Livestock Market
        </Text>

        <View
          style={{
            width: "100%",
            marginTop: 30,
          }}
        >
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                marginBottom: 8,
                fontSize: 18,
                fontFamily: "lato",
                color: theme.colors.black,
              }}
            >
              Email
            </Text>
            <TextInput
              mode="outlined"
              selectionColor={theme.colors.primary}
              outlineColor={theme.colors.gainsboro}
              value={values?.email}
              style={{
                fontSize: 16,
                width: "100%",
              }}
              dense={true}
              contentStyle={{ fontWeight: "300" }}
              returnKeyType="next"
              autoComplete="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              outlineStyle={{ borderWidth: 1 }}
              placeholderTextColor={theme.colors.gray}
              autoCapitalize="none"
              placeholder={"Email Address"}
              onChangeText={(text) =>
                setValues({
                  ...values,
                  email: text,
                })
              }
            />
          </View>
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                marginBottom: 8,
                fontSize: 18,
                fontFamily: "lato",
                color: theme.colors.black,
              }}
            >
              Password
            </Text>
            <TextInput
              mode="outlined"
              selectionColor={theme.colors.primary}
              outlineColor={theme.colors.gainsboro}
              value={values?.password}
              style={{
                fontSize: 16,
                width: "100%",
              }}
              dense={true}
              contentStyle={{ fontWeight: "300" }}
              secureTextEntry={showPassword}
              returnKeyType="done"
              autoComplete="password"
              keyboardType="default"
              textContentType="password"
              outlineStyle={{ borderWidth: 1 }}
              placeholderTextColor={theme.colors.gray}
              autoCapitalize="none"
              placeholder={"Your Password"}
              onChangeText={(text) =>
                setValues({
                  ...values,
                  password: text,
                })
              }
              right={
                <TextInput.Icon
                  icon={showPassword ? "eye" : "eye-off"}
                  size={18}
                  style={{ marginTop: 8 }}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              }
            />
          </View>

          <View
            style={[
              {
                alignItems: "flex-end",
                paddingTop: 15,
                fontSize: 12,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                console.log("Forgot");
              }}
            >
              <Text
                style={{
                  color: theme.colors.primary,
                  fontFamily: "latoBold",
                  fontSize: 12,
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            mode="contained"
            style={{
              marginTop: 25,
              backgroundColor: theme.colors.primary,
            }}
            labelStyle={{
              color: theme.colors.allWhite,
              fontFamily: "latoBold",
              paddingVertical: 6,
            }}
            onPress={() => console.log(values)}
          >
            Login
          </Button>

          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: 5,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: theme.colors.black,
                fontFamily: "latoBold",
              }}
            >
              Don't Have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationString.Register);
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "latoBold",
                  color: theme.colors.primary,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
