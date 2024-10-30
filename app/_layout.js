import { Slot, Stack } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Logo from '../assets/splash.png';
import Title from '../assets/images/title.png';

export default function Layout() {

    // ######  VARS/CONSTANTS AREA  ######
    const stylesArgs = {

        title: {
            color: 'yellow',
            fontSize: 24,
            fontWeight: "bold",
            textShadowColor: "red",
            textShadowRadius: 25
        }

    };
    const styles = StyleSheet.create(stylesArgs);
    //const insets = useSafeAreaInsets();


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