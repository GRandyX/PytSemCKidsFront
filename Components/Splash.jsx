import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av';

import SplashImg from '../assets/splash.png';
import Title from '../assets/images/curve_title.png';
import SpinnerStart from './SpinnerStart';
import { ScreenLayout } from './ScreenLayout';

export function Splash() {

    // ######  VARS/CONSTANTS AREA  ######
    const [duration, setDuration] = useState(1);
    const [sound, setSound] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);
    const [ progress, setProgress ] = useState(0);
    const intervalRef = useRef(null);
    const router = useRouter();
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
    const soundsFileName = [
        "AVideoGameShort.mp3",
        "ByteBlast8BitArcadeMusicBackground.mp3",
        "KlPeachGameOver.mp3",
        "LevelViShort.mp3",
        "RetroGameArcadeShort.mp3"
    ];
    //const idxRandom = Math.floor(Math.random() * ((soundsFileName.length - 1) - Math.ceil(0))) + Math.ceil(0);
    //const dirPath = `../assets/music/${soundsFileName[parseInt(idxRandom)].trim()}`;
    //const soundFileName = `${soundsFileName[parseInt(idxRandom)].trim()}`;
    const soundFileName = "00.mp3";
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
            { volume: .2 }
        );
		setSound(sound);

		const status = await sound.getStatusAsync();
		setDuration(status.durationMillis);

	};

	const handlePlay = async () => {

        if (!isPlaying) {

            await sound.playAsync();
            setIsPlaying(true);

            intervalRef.current = setInterval(async () => {
                const status = await sound.getStatusAsync();
                const currentProgress = (status.positionMillis / duration) * 100;
                setProgress(currentProgress);

                if (status.didJustFinish || currentProgress === 100) {
                    clearInterval(intervalRef.current);

                    intervalRef.current = setTimeout( () => {
                        clearInterval(intervalRef.current);
                        router.navigate("/avatar_selector");
                    }, 250 );
                }

            }, 100);

        }

	};


    // ######  VIEW AREA  ######
	return (

        <ScreenLayout justifyContent={true} alignItems={true}>

            <View className="justify-center items-center">
                <Image source={Title} className="w-full h-14" style={{ objectFit: "contain" }}></Image>
                <Image source={SplashImg} className="w-full h-60 my-10" style={{ objectFit: "contain" }}></Image>

                <SpinnerStart progress={progress} progressColor={"green"} textProgressC={"white"} />
            </View>

        </ScreenLayout>

	);

}
