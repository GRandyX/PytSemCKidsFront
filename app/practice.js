import { ScrollView, View, Text, Image, Pressable, StyleSheet, useAnimatedValue } from "react-native";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouter } from "expo-router";
import { Audio } from 'expo-av';

import { CircleALeft, GamepadIco, EqualsIco } from "./icons";
import { Characters } from "./charsets";
import { useRoute } from "@react-navigation/native";
import { ScreenLayout } from "../Components/ScreenLayout";
import { ScreenHeader } from "../Components/ScreenHeader";

import BackgroundImg from '../assets/images/bubbles.jpg';

import CheckIMG from '../assets/images/check.png';
import WrongIMG from '../assets/images/wrong.png';


// Symbols Images
import AdditionIMG from '../assets/images/suma.png';
import SubtractionIMG from '../assets/images/resta.png';
import MultiplicationIMG from '../assets/images/multiplicacion.png';
import DivisionIMG from '../assets/images/division.png';

// Fruits Images
import AppleIMG from '../assets/images/apple.png';


export default function Practice() {

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
        },

        image: {
            position: 'relative',
            width: 50,
            height: 50
        },

        imageSymbol: {
            position: 'relative',
            width: 60,
            height: 90,
            objectFit: "contain"
        }

    };
    const styles = StyleSheet.create(stylesArgs);
    const router = useRouter();
    const route = useRoute();
    const { idChar, nameChar, operation  } = route.params;

    const [ digit1, setDigit1 ] = useState(null);
    const [ digit2, setDigit2 ] = useState(null);
    const [ operationSymbol, setOperationSymbol ] = useState(null);
    const [ resultOp, setResultOp ] = useState(null);
    const symbolsImages = [ AppleIMG ];


    // ######  USE EFFECT AREA  ######
	useEffect(() => {
        rendererOperationSymbol();
        newOperation();
	}, []);


    // ######  FUNCTIONS AREA  ######
    const goToOptions = () => {
        router.navigate({
            pathname: "options",
            params: { idChar, nameChar, operation }
        });
    };

    const newOperation = () => {
        let random1 = Math.floor(Math.random() * ((9 - 1) - Math.ceil(1))) + Math.ceil(1);
        let random2 = Math.floor(Math.random() * ((9 - 1) - Math.ceil(1))) + Math.ceil(1);
        let randomImg = Math.floor(Math.random() * ((symbolsImages.length - 1) - Math.ceil(0))) + Math.ceil(0);
        let randomValid = Math.floor(Math.random() * 2) + 1;
        let result = getResultOp(random1, random2, randomValid);

        let tempVal1 = random1;
        let tempVal2 = random2;

        if ( random2 > random1 ) {
            random1 = tempVal2;
            random2 = tempVal1;
        }


        rendererDigit1View(random1, randomImg);
        rendererDigit2View(random2, randomImg);
        rendererResultOpView(result, randomImg);
    };

    const rendererOperationSymbol = () => {
        //console.log( `Operation NewOperation  ===>  `, operation);
        let view = [];

        switch (operation) {
            case "Suma":
                view.push( <Image key={"suma"} source={AdditionIMG} style={styles.imageSymbol} className="flex w-auto absolute left"/> );
                break;

            case "Resta":
                view.push( <Image key={"suma"} source={SubtractionIMG} style={styles.imageSymbol} className="flex w-auto absolute left"/> );
                break;

            case "Multiplicación":
                view.push( <Image key={"suma"} source={MultiplicationIMG} style={styles.imageSymbol} className="flex w-auto absolute left"/> );
                break;

            default:
                view.push( <Image key={"suma"} source={DivisionIMG} style={styles.imageSymbol} className="flex w-auto absolute left"/> );
                break;
        }

        setOperationSymbol(view);
    };

    const rendererDigit1View = (random, randomImg) => {
        let view = [];

        for ( let idx = 0; idx < random; idx++ ) {
            view.push( <Image key={idx} source={symbolsImages[randomImg]} style={styles.image} /> );
        }

        setDigit1(view);
    };

    const rendererDigit2View = (random, randomImg) => {
        let view = [];

        for ( let idx = 0; idx < random; idx++ ) {
            view.push( <Image key={idx} source={symbolsImages[randomImg]} style={styles.image} /> );
        }

        setDigit2(view);
    };

    const rendererResultOpView = (result, randomImg) => {
        let view = [];

        for ( let idx = 0; idx < result; idx++ ) {
            view.push( <Image key={idx} source={symbolsImages[randomImg]} style={styles.image} /> );
        }

        setResultOp(view);
    };

    const getResultOp = (val1, val2, isValid) => {
        let result = 0;
        let tempVal1 = val1;
        let tempVal2 = val2;

        if ( val2 > val1 ) {
            val1 = tempVal2;
            val2 = tempVal1;
        }

        switch (operation) {
            case "Suma":
                result = val1 + val2;
                break;

            case "Resta":
                //result = ( val1 > val2 ) ? val1 - val2 : val2 - val1;
                result = val1 - val2;
                break;

            case "Multiplicación":
                result = val1 * val2;
                break;

            default:
                //result = ( val1 > val2 ) ? val1 / val2 : val2 / val1;
                result = val1 / val2;
                break;
        }

        return (isValid == 1) ? result : result + 3;
    };

    const validResponseOp = () => {
        newOperation();
    };

    const wrongResponseOp = () => {
        newOperation();
    };


    // ######  VIEW AREA  ######
    return (

        <ScreenLayout>

            <ScreenHeader idChar={idChar} />

            <View className="flex-col flex-wrap w-full py-3" style={{ borderBottomColor: 'rgba(202,138,4, 1)', borderBottomWidth: 5 }}>
                <Text className="w-full h-auto text-yellow-600 font-bold text-center text-2xl" style={{ textTransform: "uppercase" }}>
                    Practica la &nbsp;
                    {operation}
                </Text>
            </View>

            <View className="flex-row flex-wrap w-full px-3" style={{ height: "100%", maxHeight: 225, borderBottomColor: 'rgba(202,138,4, 1)', borderBottomWidth: 1 }}>

                <View className="flex-row flex-wrap h-full py-10 mt-0 justify-center items-center" style={{ width: "40%" }}>
                    {digit1}
                </View>

                <View className="flex-row flex-wrap h-full py-10 mt-0 justify-center items-center" style={{ width: "20%" }}>
                    {operationSymbol}
                </View>

                <View className="flex-row flex-wrap h-full py-10 mt-0 justify-center items-center" style={{ width: "40%" }}>
                    {digit2}
                </View>
            </View>

            <View className="flex-row flex-wrap w-full bg-yellow-100 px-3" style={{ height: "100%", maxHeight: 90, borderBottomColor: 'rgba(202,138,4, 1)', borderBottomWidth: 1 }}>

                <View className="" style={{ width: "100%" }}>
                    <EqualsIco name="equals" className="text-red-700 text-center font-bold my-2" size={72} />
                </View>

            </View>

            <View className="flex-row flex-wrap w-full px-3" style={{ height: "100%", maxHeight: 225 }}>

                <View className="flex-row flex-wrap h-full py-10 mt-0 justify-center items-center" style={{ width: "100%" }}>
                    {resultOp}
                </View>

            </View>

            <View className="flex-row flex-wrap w-full bg-yellow-100 px-3" style={{ height: "100%", maxHeight: 225, borderTopLeftRadius: 95, borderTopRightRadius: 95 }}>

                <View className="flex-row flex-wrap h-full py-10 mt-0 justify-center items-center" style={{ width: "50%" }}>
                    <Pressable onPress={wrongResponseOp}>
                        {({ pressed }) => (
                            <Image key={"wrong"} source={WrongIMG} className="flex w-auto" style={{ width: 110, height: 110, objectFit: "contain", opacity: pressed ? .5 : 1 }} />
                        )}
                    </Pressable>
                </View>

                <View className="flex-row flex-wrap h-full py-10 mt-0 justify-center items-center" style={{ width: "50%" }}>
                    <Pressable onPress={validResponseOp}>
                        {({ pressed }) => (
                            <Image key={"check"} source={CheckIMG} className="flex w-auto" style={{ width: 110, height: 110, objectFit: "contain", opacity: pressed ? .5 : 1 }} />
                        )}
                    </Pressable>
                </View>

            </View>

            <GamepadIco name="gamepad" className="mt-5 text-black/25" size={92} />

        </ScreenLayout>

    );

}


/*
            <View className="flex justify-center items-end w-full mt-5">
                <Pressable onPress={goToOptions} className="bg-yellow-600 rounded-full w-15 right-5">
                    {({ pressed }) => ( <CircleALeft size={32} color="black" style={{ opacity: pressed ? .5 : 1 }} /> )}
                </Pressable>
            </View>


            <View className="flex-row flex-wrap w-full h-full bg-yellow-100 px-2">

                <View className="flex-row flex-wrap h-full px-10 mt-0 justify-center bg-yellow-300" style={{ width: "50%" }}></View>

                <View className="flex-row flex-wrap h-full px-10 mt-0 justify-center bg-red-300" style={{ width: "50%" }}></View>

            </View>
*/