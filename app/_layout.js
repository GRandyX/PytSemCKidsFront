import { Slot, Stack } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Logo from '../assets/splash.png';

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

        <View className="flex-1 justify-center">
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: "brown" },
                    headerTintColor: "transparent",
                    headerTitle: "",
                    headerLeft: () => (
                        <Image source={Logo} className="col-span-12 w-12 h-12"></Image>
                    ),
                    headerRight: () => (
                        <Text style={styles.title} >CALCUKID´S</Text>
                    )
                }}
            />
        </View>

    );

}