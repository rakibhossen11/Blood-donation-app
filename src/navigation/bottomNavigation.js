import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import DonerList from "../pages/DonerList";


const Tab = createBottomTabNavigator();

const BottomNavigation = () =>{
    return(
            <Tab.Navigator >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Doner" component={DonerList} />
                {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
            </Tab.Navigator>
    )
}

export default BottomNavigation;