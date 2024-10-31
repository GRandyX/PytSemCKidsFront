import { ScrollView, View, Text, Image, Pressable, StyleSheet, useAnimatedValue } from "react-native";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouter } from "expo-router";
import { Audio } from 'expo-av';

import { CircleALeft, GamepadIco } from "./icons";
import { Characters } from "./charsets";
import { useRoute } from "@react-navigation/native";
import { ScreenLayout } from "../Components/ScreenLayout";
import { ScreenHeader } from "../Components/ScreenHeader";
import BackgroundImg from '../assets/images/bubbles.jpg';
import LearnIMG from '../assets/images/aprender.png';
import PracticeIMG from '../assets/images/practica.png';


export default function Learn() {

    // ######  VARS/CONSTANTS AREA  ######
    const stylesArgs = {

        title: {
            color: 'yellow',
            fontSize: 32,
            textAlign: 'center',
            fontWeight: "normal"
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
    const router = useRouter();
    const route = useRoute();
    const { idChar, nameChar, operation  } = route.params;


    // ######  USE EFFECT AREA  ######
	useEffect(() => {
        //console.log(operation);
	}, []);


    // ######  FUNCTIONS AREA  ######
    const goToOptions = () => {
        router.navigate({
            pathname: "options",
            params: { idChar, nameChar, operation }
        });
    };


    // ######  VIEW AREA  ######
    return (

        <ScreenLayout>

            <ScreenHeader idChar={idChar} />

            <View className="flex justify-center items-end w-full mt-5">
                <Pressable onPress={goToOptions} className="bg-yellow-600 rounded-full w-15 right-5">
                    {({ pressed }) => ( <CircleALeft size={32} color="black" style={{ opacity: pressed ? .5 : 1 }} /> )}
                </Pressable>
            </View>

            <View className="flex-col flex-wrap w-full py-3" style={{ borderBottomColor: 'rgba(202,138,4, 1)', borderBottomWidth: 2 }}>
                <Text className="w-full h-auto text-yellow-600 font-bold text-center text-2xl" style={{ textTransform: "uppercase" }}>
                    Aprende la &nbsp;
                    {operation}
                </Text>
            </View>

            <View className="flex-row flex-wrap w-full h-full px-10 mt-5 justify-center">

                <GamepadIco name="gamepad" className="mt-5 text-black/25" size={92} />
            </View>

        </ScreenLayout>

    );

}
