import { ScrollView, View, Text, Image, Pressable, StyleSheet } from "react-native";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouter } from "expo-router";
import { Audio } from 'expo-av';

import { GamepadIco } from "./icons";
import BackgroundImg from '../assets/karolina_grabowska.jpg';

export default function Home() {

    // ######  VARS/CONSTANTS AREA  ######
    const [duration, setDuration] = useState(1);
    const [sound, setSound] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);
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
    const soundFileName = "01.mp3";
    let firstLoad = true;


    // ######  USE EFFECT AREA  ######
	useEffect(() => {

        loadSound();

		return () => {
            if (sound) sound.unloadAsync();
		};

	}, []);

    useEffect(() => {

        if (sound != null && firstLoad) {

            let timeOut = setTimeout( function () {
                handlePlay();
                firstLoad = false;

                clearTimeout(timeOut);
            }, 50 );

        }

	}, [duration]);


    // ######  FUNCTIONS AREA  ######
    const loadSound = async () => {

		const { sound } = await Audio.Sound.createAsync(
            require("../assets/music/"+ soundFileName),
            { isLooping: true }
        );
		setSound(sound);

		const status = await sound.getStatusAsync();
		setDuration(status.durationMillis);

	};

	const handlePlay = async () => {

        if (!isPlaying) {

            await sound.playAsync();
            setIsPlaying(true);

        }

	};

    return (

        <View className="justify-center align-middle items-center w-full h-full">

            <Image source={BackgroundImg} className="fixed top-0 left-0 z-0"></Image>

            <View className="absolute z-10 justify-center align-middle items-center">
                <Link asChild href={"/"}>
                    <Pressable>
                        {
                            ({ pressed }) =>
                                <Text className="bg-blue-400 text-xl mt-12 p-5 w-40 rounded-xl text-white font-bold" style={{ opacity: pressed ? 0.5 : 1 }}>
                                    Iniciar &nbsp;
                                    <GamepadIco name="gamepad" />
                                </Text>
                        }
                    </Pressable>
                </Link>
            </View>


        </View>

    );

}