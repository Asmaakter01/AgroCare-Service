import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import ScreenHeader from "../../components/core/ScreenHeader";
import { useNavigation } from "@react-navigation/native";
import MyStatusBar from "../../components/core/MyStatusBar";
import navigationString from "../../components/constant/navigationString";

const RegisterScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    number: "",
    thana:"",
    address:"",
    district:""
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
        <ScreenHeader title={"Sign Up"} onPress={() => navigation.goBack()} />
      </View>
      <View
        style={{
          paddingHorizontal: 18,
          marginTop: 20,
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
          Join AgroCare – Grow, Trade & Connect Today!
        </Text>

        <ScrollView
          style={{
            width: "100%",
            marginVertical:40,
            flex:1
          }}
          bounces={false}
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
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
              Full Name
            </Text>
            <TextInput
              mode="outlined"
              selectionColor={theme.colors.primary}
              outlineColor={theme.colors.gainsboro}
              value={values?.fullName}
              style={{
                fontSize: 16,
                width: "100%",
              }}
              dense={true}
              contentStyle={{ fontWeight: "300" }}
              returnKeyType="next"
              autoComplete="name"
              keyboardType="default"
              textContentType="name"
              outlineStyle={{ borderWidth: 1 }}
              placeholderTextColor={theme.colors.gray}
              autoCapitalize="none"
              placeholder={"Full Name"}
              onChangeText={(text) =>
                setValues({
                  ...values,
                  fullName: text,
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
              Number
            </Text>
            <TextInput
              mode="outlined"
              selectionColor={theme.colors.primary}
              outlineColor={theme.colors.gainsboro}
              value={values?.number}
              style={{
                fontSize: 16,
                width: "100%",
              }}
              dense={true}
              contentStyle={{ fontWeight: "300" }}
              returnKeyType="next"
              autoComplete="tel"
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              outlineStyle={{ borderWidth: 1 }}
              placeholderTextColor={theme.colors.gray}
              autoCapitalize="none"
              placeholder={"Phone Number"}
              onChangeText={(text) =>
                setValues({
                  ...values,
                  number: text,
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
              Confirm Password
            </Text>
            <TextInput
              mode="outlined"
              selectionColor={theme.colors.primary}
              outlineColor={theme.colors.gainsboro}
              value={values?.confirmPassword}
              style={{
                fontSize: 16,
                width: "100%",
              }}
              dense={true}
              contentStyle={{ fontWeight: "300" }}
              secureTextEntry={true}
              returnKeyType="done"
              autoComplete="password"
              keyboardType="default"
              textContentType="password"
              outlineStyle={{ borderWidth: 1 }}
              placeholderTextColor={theme.colors.gray}
              autoCapitalize="none"
              placeholder={"Confirm Password"}
              onChangeText={(text) =>
                setValues({
                  ...values,
                  confirmPassword: text,
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
              District
            </Text>
            <TextInput
              mode="outlined"
              selectionColor={theme.colors.primary}
              outlineColor={theme.colors.gainsboro}
              value={values?.district}
              style={{
                fontSize: 16,
                width: "100%",
              }}
              dense={true}
              contentStyle={{ fontWeight: "300" }}
              returnKeyType="next"
              keyboardType="default"
              textContentType="addressCity"
              outlineStyle={{ borderWidth: 1 }}
              placeholderTextColor={theme.colors.gray}
              autoCapitalize="none"
              placeholder={"District"}
              onChangeText={(text) =>
                setValues({
                  ...values,
                  district: text,
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
              Thana
            </Text>
            <TextInput
              mode="outlined"
              selectionColor={theme.colors.primary}
              outlineColor={theme.colors.gainsboro}
              value={values?.thana}
              style={{
                fontSize: 16,
                width: "100%",
              }}
              dense={true}
              contentStyle={{ fontWeight: "300" }}
              returnKeyType="next"
              autoComplete="address-line1"
              keyboardType="default"
              textContentType="addressState"
              outlineStyle={{ borderWidth: 1 }}
              placeholderTextColor={theme.colors.gray}
              autoCapitalize="none"
              placeholder={"Thana"}
              onChangeText={(text) =>
                setValues({
                  ...values,
                  thana: text,
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
              Additional Address
            </Text>
            <TextInput
              mode="outlined"
              selectionColor={theme.colors.primary}
              outlineColor={theme.colors.gainsboro}
              value={values?.address}
              style={{
                fontSize: 16,
                width: "100%",
              }}
              dense={true}
              contentStyle={{ fontWeight: "300" }}
              returnKeyType="next"
              keyboardType="default"
              textContentType="addressCityAndState"
              outlineStyle={{ borderWidth: 1 }}
              placeholderTextColor={theme.colors.gray}
              autoCapitalize="none"
              placeholder={"Address"}
              onChangeText={(text) =>
                setValues({
                  ...values,
                  address: text,
                })
              }
            />
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
            Register
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
              Have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationString.Login);
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "latoBold",
                  color: theme.colors.primary,
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RegisterScreen;
