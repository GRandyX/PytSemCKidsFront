/** REACT NATIVE IMPORTS */
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/** OWNER COMPONENTS IMPORTS */
import { ScreenHeader } from "../Components/ScreenHeader";
import { PressableBack } from "../Components/PressableBack";
import { LearnAddition } from "../Components/learn_addition";

/** OWNER IMAGES IMPORTS */
import { GamepadIco } from "./icons";


export default function Learn() {

    // ######  VARS/CONSTANTS AREA  ######
    const insets = useSafeAreaInsets();
    const stylesArgs = {

        title: {
            borderBottomColor: 'rgba(161,98,7, 1)',
            borderBottomWidth: 4,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            color: 'rgba(161,98,7, 1)',
            textAlign: "center",
            width: "100%",
            maxWidth: "100%",
            fontWeight: "bold",
            fontSize: 35
        },

        welcome_msg: {
            color: 'yellow',
            fontSize: 46,
            fontWeight: "bold",
            textShadowColor: "red",
            textShadowRadius: 25
        }

    };
    const styles = StyleSheet.create(stylesArgs);
    const route = useRoute();
    const { idChar, nameChar, operation  } = route.params;


    // ######  USE EFFECT AREA  ######


    // ######  FUNCTIONS AREA  ######


    // ######  VIEW AREA  ######
    return (

        <View className="w-full h-full" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <ScreenHeader idChar={idChar} />

            <PressableBack idChar={idChar} nameChar={nameChar} operation={operation} path="options" />

            <ScrollView>

                <View className="flex-col flex-wrap w-full h-full py-3 bg-black/10">
                    <Text className="py-5" style={styles.title}>
                    {operation}
                </Text>
            </View>

            <View className="flex-row flex-wrap w-full h-full px-10 mt-5 justify-center">

                <GamepadIco name="gamepad" className="mt-5 text-black/25" size={92} />
            </View>

            </ScrollView>
        </View>


    );

}
