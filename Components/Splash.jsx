import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av';

import SplashImg from '../assets/splash.png';
import BackgroundImg from '../assets/karolina_grabowska.jpg';
import SpinnerStart from './SpinnerStart';

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

		const { sound } = await Audio.Sound.createAsync( require("../assets/music/"+ soundFileName) );
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

                        router.navigate("/home");
                    }, 250 );
                }

            }, 100);

        }

	};


    // ######  VIEW AREA  ######
	return (

        <View className="justify-center align-middle items-center w-full h-full">

            <Image source={BackgroundImg} className="fixed top-0 left-0 z-0"></Image>

            <View className="absolute z-10 justify-center align-middle items-center">
                <Image source={SplashImg} className="col-span-12 w-64 h-60"></Image>

                <Text style={styles.title} >Bienvenido a</Text>
                <Text style={styles.welcome_msg} >CALCUKID´S</Text>

                <SpinnerStart progress={progress} progressColor={"green"} textProgressC={"white"} />
            </View>

        </View>

	);

}
