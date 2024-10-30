import { ScrollView, View, Text, Image, Pressable, StyleSheet, useAnimatedValue } from "react-native";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouter } from "expo-router";
import { Audio } from 'expo-av';

import { CircleALeft, GamepadIco } from "./icons";
import { Characters } from "./charsets";
import BackgroundImg from '../assets/images/bubbles.jpg';
import { useRoute } from "@react-navigation/native";
import { ScreenLayout } from "../Components/ScreenLayout";

export default function Game() {

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
    const { idChar, nameChar  } = route.params;


    // ######  USE EFFECT AREA  ######
	useEffect(() => {
        console.log(nameChar);
	}, []);


    // ######  FUNCTIONS AREA  ######
    const backComp = () => {
        router.navigate("/operations");
    };


    // ######  VIEW AREA  ######
    return (

        <ScreenLayout>

            <Pressable onPress={backComp} className="absolute right-0 top-3 z-50 bg-yellow-500 rounded-full w-12">
                {({ pressed }) => ( <CircleALeft size={42} color="black" /> )}
            </Pressable>

            <View className="flex-col justify-center align-middle items-center mt-10 flex-wrap">
                <Text className="bg-black/30 mt-2 p-5 w-96 h-24 ml-5 -top-8 left-2 rounded-xl text-white font-bold text-right" style={{ fontSize: 42 }}>
                    6
                </Text>
                <GamepadIco name="gamepad" className="m-5" size={42} color="white" />
            </View>

        </ScreenLayout>

    );

}