import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import ScreenHeader from "../../components/core/ScreenHeader";
import { useNavigation } from "@react-navigation/native";

const AccountProfile = () => {
  const theme = useTheme();
  const navigation = useNavigation()
  return (
    <View
      style={{ flex: 1, backgroundColor: theme.colors.background, paddingHorizontal: 20 }}
    >
        <View style={{
            marginBottom:20
        }}>
        <ScreenHeader title={"Account"} onPress={()=>navigation.goBack()}/>
        </View>
      {/* Profile Section */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <Image
          source={require("../../assets/icons/user.png")}
          style={{ width: 40, height: 40, borderRadius: 25, marginRight: 10 }}
        />
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: theme.colors.black,
              fontFamily: "lato",
            }}
          >
            Asma Akter
          </Text>
          <Text style={{ fontSize: 14, color: "gray", fontFamily: "lato" }}>
            asmaakter01t7@gmail.com
          </Text>
        </View>
      </View>

      {/* General Section */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 10,
          color: "gray",
          fontFamily: "lato",
        }}
      >
        General
      </Text>
      <View
        style={{
          width: "100%",
          height: 1.5,
          backgroundColor: theme.colors.primary,
          marginVertical: 6,
        }}
      />
      <TouchableOpacity style={{ paddingVertical: 10 }}>
        <Text style={{ fontSize: 16,fontFamily:"lato",color:theme.colors.black }}>Edit Information</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingVertical: 10 }}>
        <Text style={{ fontSize: 16,fontFamily:"lato",color:theme.colors.black }}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingVertical: 10 }}>
        <Text style={{ fontSize: 16,fontFamily:"lato",color:theme.colors.black }}>Carts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingVertical: 10 }}>
        <Text style={{ fontSize: 16,fontFamily:"lato",color:theme.colors.black }}>Transaction History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingVertical: 10 }}>
        <Text style={{ fontSize: 16,fontFamily:"lato",color:theme.colors.black }}>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingVertical: 10 }}>
        <Text style={{ fontSize: 16,fontFamily:"lato",color:theme.colors.black }}>MarketPlace</Text>
      </TouchableOpacity>

      {/* Security Section */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 10,
          color: "gray",
        }}
      >
        Security
      </Text>
      <View
        style={{
          width: "100%",
          height: 1.5,
          backgroundColor: theme.colors.primary,
          marginVertical: 6,
        }}
      />
      <TouchableOpacity style={{ paddingVertical: 10 }}>
        <Text style={{ fontSize: 16,fontFamily:"lato",color:theme.colors.black }}>Terms and Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingVertical: 10 }}>
        <Text style={{ fontSize: 16,fontFamily:"lato",color:theme.colors.black }}>Security Policy</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16,fontFamily:"lato", color: "red" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountProfile;
