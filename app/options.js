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


export default function Options() {

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
        console.log(operation);
	}, []);


    // ######  FUNCTIONS AREA  ######
    /*const backComp = () => {
        router.navigate({
            pathname: "home",
            params: { idChar, nameChar }
        });
    };*/

    const goToLearn = () => {
        router.navigate({
            pathname: "learn",
            params: { idChar, nameChar, operation }
        });
    };

    const goToPractice = () => {
        router.navigate({
            pathname: "practice",
            params: { idChar, nameChar, operation }
        });
    };


    // ######  VIEW AREA  ######
    return (

        <ScreenLayout>

            <ScreenHeader idChar={idChar} />

            <View className="flex-col flex-wrap w-full px-5">
                <Text className="mt-10 mb-5 w-full h-auto text-yellow-600 font-bold text-center text-3xl" style={{ textTransform: "uppercase" }}>
                    {operation}
                </Text>
            </View>

            <View className="flex-row flex-wrap w-full h-full px-10 mt-5 justify-center">

                <View className="mt-8">
                    <Pressable onPress={goToLearn} className="flex-row flex-wrap bg-purple-700 w-full justify-between items-center rounded-2xl overflow-hidden">

                        <Text className="mt-1 py-10 px-2 w-auto h-auto left-2 text-white font-bold text-start" style={{ fontSize: 20 }}>
                            Aprende
                        </Text>

                        <View className="bg-purple-300 w-44 h-full -z-10 rounded-full -right-10"></View>
                    </Pressable>

                    <Image source={LearnIMG} className="absolute z-10 w-32 h-32 -right-5 -top-5" style={{ objectFit: "contain", borderRadius: 100 }} />
                </View>

                <View className="mt-12">
                    <Pressable onPress={goToPractice} className="flex-row flex-wrap bg-orange-700 w-full justify-between items-center rounded-2xl overflow-hidden">

                        <Text className="mt-1 py-10 px-2 w-auto h-auto left-2 text-white font-bold text-start" style={{ fontSize: 20 }}>
                            Practica
                        </Text>

                        <View className="bg-orange-300 w-44 h-full -z-10 rounded-full -right-10"></View>
                    </Pressable>

                    <Image source={PracticeIMG} className="absolute z-10 w-32 h-32 -right-5 -top-5" style={{ objectFit: "contain", borderRadius: 100 }} />
                </View>

                <GamepadIco name="gamepad" className="mt-5 text-black/25" size={92} />
            </View>

        </ScreenLayout>

    );

}

/*
    <Pressable onPress={backComp} className="absolute right-0 top-3 z-50 bg-yellow-500 rounded-full w-12">
        {({ pressed }) => ( <CircleALeft size={42} color="black" /> )}
    </Pressable>
*/