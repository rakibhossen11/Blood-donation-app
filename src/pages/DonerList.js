import React from "react";
import { Button, Image, Text, View } from "react-native";

const DonerList = () =>{

    const doners = [
        {
            "id": 1,
            "name": "Rakib Hossen",
            "image": "https://shorturl.at/wxBHQ",
            "bloodGroup": "A+"
        },
        {
            "id": 2,
            "name": "Sakib Hossen",
            "image": "https://shorturl.at/wxBHQ",
            "bloodGroup": "A-"
        },
        {
            "id": 3,
            "name": "Kawsar Hossen",
            "image": "https://shorturl.at/wxBHQ",
            "bloodGroup": "O+"
        },
        {
            "id": 4,
            "name": "Minar Hossen",
            "image": "https://shorturl.at/wxBHQ",
            "bloodGroup": "AB+"
        },
        {
            "id": 5,
            "name": "Joynal Abedin",
            "image": "https://shorturl.at/wxBHQ",
            "bloodGroup": "B+"
        },
    ];

    return(
        <View className="">
            <Text className="bg-[#EB6F6F] rounded-2xl mx-4 py-2 text-center text-white font-medium text-base my-4"> Total Blood doner is {doners.length}</Text>
            {
                doners.map((doner) => ( 
                    <View key={doner.id} className="px-4 flex flex-row mb-2 gap-2 items-center">
                        <View>
                            <Image className="w-12 h-12 rounded-3xl" source={{uri: doner.image}} />
                        </View>
                        <View>
                            <Text className="font-medium text-base text-[#000000]" >{doner.name}</Text>
                            <Text className="text-[#df5757]">{doner.bloodGroup} Positive </Text>
                        </View>
                        <Button onPress={() => console.log("tap the button  "+ doner.name)} title="See" />
                    </View>
                ))
            }
        </View>
    )
}

export default DonerList;