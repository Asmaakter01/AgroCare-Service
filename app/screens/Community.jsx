import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import ScreenHeader from "../../components/core/ScreenHeader";
import Icon from "react-native-vector-icons/FontAwesome";

const Community = () => {
  const theme = useTheme();
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "John Doe",
      profilePic:
        "https://www.pngarts.com/files/5/User-Avatar-Transparent-Images.png",
      content: "Had a great day at the beach!",
      image:
        "https://www.tiffanymccauley.com/wp-content/uploads/2023/11/beach-.jpg",
    },
    {
      id: 2,
      username: "Alice Johnson",
      profilePic:
        "https://www.pngarts.com/files/5/User-Avatar-Transparent-Images.png",
      content: "Excited for the weekend!",
      image: "",
    },
  ]);
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
        <ScreenHeader title={"Community"} onPress={() => navigation.goBack()} />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          padding: 10,
        }}
      >
        {/* "What's on your mind?" Section */}
        <View
          style={{
            backgroundColor: theme.colors.offWhite,
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            elevation: 3,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://www.pngarts.com/files/5/User-Avatar-Transparent-Images.png",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
            <TextInput
              placeholder="What's on your mind?"
              style={{
                flex: 1,
                height: 40,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 20,
                paddingHorizontal: 15,
                backgroundColor: theme.colors.offWhite,
                color: theme.colors.black,
              }}
              placeholderTextColor={theme.colors.black}
              value={text}
              onChangeText={setText}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icon name="video-camera" size={18} color="red" />
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 14,
                  fontWeight: "bold",
                  fontFamily: "lato",
                  color: theme.colors.black,
                }}
              >
                Live
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icon name="image" size={18} color="green" />
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 14,
                  fontWeight: "bold",
                  fontFamily: "lato",
                  color: theme.colors.black,
                }}
              >
                Photo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icon name="edit" size={18} color="blue" />
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 14,
                  fontWeight: "bold",
                  fontFamily: "lato",
                  color: theme.colors.black,
                }}
              >
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Feed Section */}
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: theme.colors.offWhite,
                padding: 10,
                borderRadius: 8,
                marginBottom: 10,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                elevation: 3,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 5,
                }}
              >
                <Image
                  source={{ uri: item.profilePic }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                />
                <Text style={{ fontWeight: "bold",fontFamily:"lato",color:theme.colors.black }}>{item.username}</Text>
              </View>
              <Text style={{ marginBottom: 5,fontFamily:"lato",color:theme.colors.black }}>{item.content}</Text>
              {item.image ? (
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: 200, borderRadius: 10 }}
                />
              ) : null}
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Community;
