import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import DonerList from "../pages/DonerList";
import UserProfile from "../pages/UserProfile";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../authentication/SignIn";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomNavigation = () =>{
    return(
            <Tab.Navigator >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Doner" component={DonerList} />
                <Tab.Screen name="User" component={UserProfile} />
            </Tab.Navigator>
    )
}

const HomeStack = () =>{
    <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
}

export default BottomNavigation;