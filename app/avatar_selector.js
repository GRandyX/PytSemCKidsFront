import { ScrollView, View, Text, Image, Pressable, StyleSheet, useAnimatedValue } from "react-native";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouter } from "expo-router";
import { Audio } from 'expo-av';

import Title from '../assets/images/curve_title.png';
import { GamepadIco } from "./icons";
import { Characters } from "./charsets";
import { ScreenLayout } from "../Components/ScreenLayout";


export default function AvatarSelector() {

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

    const goToHome = (idChar, nameChar) => {
        router.navigate({
            pathname: "home",
            params: { idChar, nameChar }
        });
    };

    const rendererPressableChar = (idChar, nameChar, source) => {
        return <View key={idChar}>
            <Pressable onPress={ () => { goToHome(idChar, nameChar) }}>
                {
                    ({ pressed }) => (
                        <Image source={source} className="w-48 h-36 mt-5 top-0" style={{ opacity: pressed ? .4 : 1, objectFit: "contain" }} />
                    )
                }
            </Pressable>

            <Text className="text-center text-red-600 text-xl font-bold">{nameChar}</Text>
        </View>
    };


    // ######  VIEW AREA  ######
    return (

        <ScreenLayout>

            <View className="w-full justify-center items-center mt-0">

                <Image source={Title} className="w-full h-14 mt-10 mb-5" style={{objectFit: "contain"}}></Image>

                <Text className="bg-black/25 mt-0 mb-10 p-3 w-60 rounded-xl text-white font-bold text-center" style={{fontSize: 18}}>
                    Selecciona tu avatar
                </Text>
            </View>

            <View className="flex-row flex-wrap justify-center">
                {
                    Characters.map( (character, idx) => ( rendererPressableChar(character.id, character.name, character.source) ) )
                }
            </View>

            <GamepadIco name="gamepad" className="my-5 text-black/25" size={36} />

        </ScreenLayout>

    );

}