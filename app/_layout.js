/** REACT NATIVE IMPORTS */
import { View, Image } from "react-native";
import { Stack } from "expo-router";

/** OWNER IMAGES IMPORTS */
import Logo from '../assets/splash.png';
import Title from '../assets/images/title.png';


export default function Layout() {

    // ######  VARS/CONSTANTS AREA  ######


    // ######  VIEW AREA  ######
    return (

        <View className="flex-1">
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "transparent",
                    header: () => {},
                    headerTitle: "",
                    headerLeft: () => (
                        <Image source={Logo} className="col-span-12 w-12 h-12"></Image>
                    ),
                    headerRight: () => (
                        <Image source={Title} className="col-span-12 w-44 h-10"></Image>
                    )
                }}
            />
        </View>

    );

}