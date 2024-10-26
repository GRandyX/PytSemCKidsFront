import { ScrollView, View, Text, Image, Pressable, StyleSheet, useAnimatedValue } from "react-native";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouter } from "expo-router";
import { Audio } from 'expo-av';

import { CircleALeft, GamepadIco } from "./icons";
import { char01, char02, char03, char04, char05 } from "./charsets";
import BackgroundImg from '../assets/karolina_grabowska.jpg';

export default function Game({ route }) {

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


    // ######  USE EFFECT AREA  ######
	useEffect(() => {
        console.log(route);
	}, []);


    // ######  FUNCTIONS AREA  ######
    const backComp = () => {
        router.navigate("/home");
    };


    // ######  VIEW AREA  ######
    return (

        <View className="w-full h-full">

            <Image source={BackgroundImg} className="fixed top-0 left-0 z-0" />

            <View className="absolute z-10 bg-transparent">
                <Pressable onPress={backComp} className="mt-4 left-3 bg-yellow-500 rounded-full w-12">
                    {({ pressed }) => (
                            <CircleALeft size={42} color="black" />
                    )}
                </Pressable>

                <View className="flex-col justify-center align-middle items-center mt-10 flex-wrap">
                    <Text className="bg-black/30 mt-2 p-5 w-96 h-24 ml-5 -top-8 left-2 rounded-xl text-white font-bold text-right" style={{ fontSize: 42 }}>
                        6
                    </Text>
                    <GamepadIco name="gamepad" className="m-5" size={42} color="white" />
                </View>


            </View>


        </View>

    );

}