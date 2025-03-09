import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import ScreenHeader from "../../components/core/ScreenHeader";
import { useNavigation } from "@react-navigation/native";


const categories = ["All", "Livestock", "Feed", "Pet"];
const plants = [
    {
      id: "1",
      name: "Chicken",
      type: "Indoor",
      price: "$250",
      image: require("../../assets/images/demoProd.jpg"), // Replace with actual image
    },
    {
      id: "2",
      name: "Goat",
      type: "Outdoor",
      price: "$250",
      image: require("../../assets/images/demoProd.jpg"), // Replace with actual image
    },
    {
      id: "3",
      name: "Buffalo",
      type: "Outdoor",
      price: "$250",
      image: require("../../assets/images/demoProd.jpg"), // Replace with actual image
    },
    {
      id: "4",
      name: "Pigeon",
      type: "Outdoor",
      price: "$250",
      image: require("../../assets/images/demoProd.jpg"), // Replace with actual image
    },
  ];

const MarketPlace = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <ScreenHeader
          title={"Marketplace"}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{
        paddingHorizontal:25
      }}>
        <TextInput
          mode="flat"
          placeholder="Search"
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
          left={<TextInput.Icon icon="magnify" />}
          style={{
            backgroundColor: "transparent",
            borderBottomWidth: 0,
            borderBottomColor: "#444",
          }}
        />
      </View>


      <View style={{ flex: 1, padding: 10 }}>
      {/* Categories */}
      <View style={{ flexDirection: "row", marginVertical: 10,alignItems:"center",justifyContent:"center" }}>
        {categories.map(category => (
          <TouchableOpacity
            key={category} 
            onPress={() => setSelectedCategory(category)}
            style={{ 
              padding: 8, 
              marginRight: 10, 
              borderRadius: 8, 
              backgroundColor: selectedCategory === category ? "green" : "transparent" 
            }}>
            <Text style={{ color: selectedCategory === category ? theme.colors.allWhite : theme.colors.black,fontFamily:"lato" }}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Grid View */}
      <FlatList
        data={plants}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
  renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                backgroundColor: theme.colors.offWhite,
                margin: 5,
                padding: 10,
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={item.image}
                style={{ width: 80, height: 80, marginBottom: 8 }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  fontFamily: "lato",
                  color: theme.colors.black,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "gray",
                  fontFamily: "lato",
                  color: theme.colors.black,
                }}
              >
                {item.type}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "green",
                  fontWeight: "bold",
                  fontFamily: "lato",
                }}
              >
                {item.price}
              </Text>
            </View>
          )}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MarketPlace;
