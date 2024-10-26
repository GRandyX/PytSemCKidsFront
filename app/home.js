import { ScrollView, View, Text, Image, Pressable, StyleSheet, useAnimatedValue } from "react-native";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouter } from "expo-router";
import { Audio } from 'expo-av';

import { GamepadIco } from "./icons";
import { char01, char02, char03, char04, char05 } from "./charsets";
import BackgroundImg from '../assets/karolina_grabowska.jpg';
//import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function Home() {

    // ######  VARS/CONSTANTS AREA  ######
    const [duration, setDuration] = useState(1);
    const [sound, setSound] = useState(null);
    const [touchSound, setTouchSound] = useState(null);
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
    const soundTFileName = "01.mp3";
    const router = useRouter();
    //const handPosition = useSharedValue(0);
    let firstLoad = true;


    // ######  USE EFFECT AREA  ######
	useEffect(() => {

        loadSound();

		return () => {
            if (sound) sound.unloadAsync();
            if (touchSound) touchSound.unloadAsync();
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

        // Background Sound
		const { sound } = await Audio.Sound.createAsync(
            require("../assets/music/"+ soundFileName),
            { isLooping: true }
        );
		setSound(sound);

		const status = await sound.getStatusAsync();
		setDuration(status.durationMillis);

        // Touch Sound
        const { tSound } = await Audio.Sound.createAsync( require("../assets/sounds/"+ soundTFileName) );
		setTouchSound(tSound);

	};

	const handlePlay = async () => {

        if (!isPlaying) {

            await sound.playAsync();
            setIsPlaying(true);

        }

	};

    const playTouchSound = async () => {
        if (touchSound) await touchSound.replayAsync();
    };

    const selectCharacter = (idCharacter) => {
        console.log( idCharacter );
        router.navigate("game", { idCharacter });
    };

    //const animatedHandStyle = useAnimatedStyle(() => {
    //    return {
    //        transform: [{ translateY: handPosition.value }],
    //    };
    //});

    //const handlePress = () => {
    //        handPosition.value = withTiming(30, { duration: 150 }, () => {
    //        handPosition.value = withTiming(0, { duration: 150 });
    //    });
    //};


    // ######  VIEW AREA  ######
    return (

        <View className="w-full h-full">

            <Image source={BackgroundImg} className="fixed top-0 left-0 z-0"></Image>

            <View className="absolute z-10 justify-center align-middle items-center bg-transparent">

                <Text className="bg-black/25 text-xl mt-12 p-5 w-40 rounded-xl text-white font-bold text-center">
                    Toca
                </Text>

                <View className="flex-row justify-center align-middle items-center mt-10 flex-wrap">
                    <Pressable onPress={ () => { selectCharacter(1) }}>
                        {
                            ({ pressed }) => (
                                <Image source={char01} className="w-40 h-40" style={{ opacity: pressed ? .4 : 1 }} />
                            )
                        }
                    </Pressable>
                    <Pressable onPress={ () => { selectCharacter(2) }}>
                        {
                            ({ pressed }) => (
                                <Image source={char02} className="w-40 h-40" style={{ opacity: pressed ? .4 : 1 }} />
                            )
                        }
                    </Pressable>
                    <Pressable onPress={ () => { selectCharacter(3) }}>
                        {
                            ({ pressed }) => (
                                <Image source={char03} className="w-40 h-40" style={{ opacity: pressed ? .4 : 1 }} />
                            )
                        }
                    </Pressable>
                    <Pressable onPress={ () => { selectCharacter(4) }}>
                        {
                            ({ pressed }) => (
                                <Image source={char04} className="w-40 h-40" style={{ opacity: pressed ? .4 : 1 }} />
                            )
                        }
                    </Pressable>
                    <Pressable onPress={ () => { selectCharacter(5) }}>
                        {
                            ({ pressed }) => (
                                <Image source={char05} className="w-40 h-40" style={{ opacity: pressed ? .4 : 1 }} />
                            )
                        }
                    </Pressable>
                </View>

                <GamepadIco name="gamepad" className="m-5" size={98} color="white" />

            </View>


        </View>

    );

}