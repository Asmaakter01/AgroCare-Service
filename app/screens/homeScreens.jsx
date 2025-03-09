import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

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

const HomeScreens = () => {
  const theme = useTheme();
  const dropStyle = styles(theme.colors);
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.backgroundColor }}>
      {/* Header Section */}
      <ImageBackground
        style={{
          height: 250,
          padding: 17,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex",
          marginBottom: 10,
        }}
        source={require("../../assets/images/heroImg.png")}
      >
        <View style={{
          width: "78%",
        }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 4,
              fontFamily: "lato",
            }}
          >
            AgroCare – Your All-in-One Hub for Farming & Marketplace
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: "green",
                fontSize: 18,
                fontFamily: "latoBold",
              }}
            >
              See All Products →
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </ImageBackground>

      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}
      >
        {/* Plant List */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 10,
            fontFamily: "lato",
            color: theme.colors.black,
          }}
        >
          Livestock
        </Text>
        <FlatList
          data={plants}
          numColumns={2}
          keyExtractor={(item) => item.id}
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

const styles = (colors) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: colors?.backgroundColor },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex",
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 4,
      fontFamily: "lato",
    },
    link: {
      color: "green",
      fontSize: 16,
      fontFamily: "lato",
    },
    heroImage: {
      width: "100%",
      height: 150,
      borderRadius: 10,
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      fontFamily: "lato",
      color: colors.black,
    },
    card: {
      flex: 1,
      backgroundColor: colors?.offWhite,
      margin: 5,
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
    },
    plantImage: { width: 80, height: 80, marginBottom: 8 },
    plantName: {
      fontSize: 16,
      fontWeight: "bold",
      fontFamily: "lato",
      color: colors.black,
    },
    plantType: {
      fontSize: 14,
      color: "gray",
      fontFamily: "lato",
      color: colors.black,
    },
    plantPrice: {
      fontSize: 16,
      color: "green",
      fontWeight: "bold",
      fontFamily: "lato",
    },
  });
export default HomeScreens;
