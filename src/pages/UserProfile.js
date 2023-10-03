import React from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";

const UserProfile = (props) => {
  const doner = [
    {
      id: 1,
      name: "Rakib Hossen",
      image: "https://shorturl.at/wxBHQ",
      profession: "Business",
      age: "18",
      bloodgroup: "AB+ Positive",
      number: "01966366745",
    },
  ];
  return (
    <View className="bg-[#FF6969] m-2 p-4 rounded-2xl">
      {doner.map((don) => (
        <View>
          <View className="flex justify-center items-center my-5">
              <Image
                className="w-24 h-24 rounded-full"
                source={{ uri: don.image }}
              />
              <Text className="text-white font-bold text-2xl">{don.name}</Text>
          </View>
          <View>
            <Text className="text-white">Number: {don.number}</Text>
            <Text className="text-white">Profession: {don.profession}</Text>
            <Text className="text-white">Age: {don.age}</Text>
            <Text className="text-white">Blood-Group: {don.bloodgroup}</Text>
          </View>
          <View className="flex flex-row justify-between items-center gap-2 mt-7 ">
            <TouchableOpacity
              onPress={() => {
                console.log("Press Ready To donet");
              }}
              className="bg-white py-2 rounded-xl px-2"
            >
              <Text className="text-center font-semibold text-[#FF6969]">
                Ready for donet
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log("Press call");
              }}
              className="bg-white py-2 rounded-xl px-4"
            >
              <Text className="text-center font-semibold text-[#FF6969]">
                Call
              </Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
              onPress={() => props.navigation.navigate("SignIn")}
              className="bg-white py-2 rounded-xl px-4"
            >
              <Text className="text-center font-semibold text-[#FF6969]">
                Call
              </Text>
            </TouchableOpacity> */}
        </View>
      ))}
    </View>
  );
};

export default UserProfile;
