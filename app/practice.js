/** REACT NATIVE IMPORTS */
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

/** OWNER COMPONENTS IMPORTS */
import { ScreenLayout } from "../Components/ScreenLayout";
import { ScreenHeader } from "../Components/ScreenHeader";
import { PressableBack } from "../Components/PressableBack";

/** OWNER IMAGES IMPORTS */
import { EqualsIco } from "./icons";
import CheckIMG from '../assets/images/check.png';
import WrongIMG from '../assets/images/wrong.png';
import AdditionIMG from '../assets/images/suma.png';
import SubtractionIMG from '../assets/images/resta.png';
import MultiplicationIMG from '../assets/images/multiplicacion.png';
import DivisionIMG from '../assets/images/division.png';
import AppleIMG from '../assets/images/apple.png';
import Apple2IMG from '../assets/images/apple02.png';
import PeachIMG from '../assets/images/peach.png';


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
            height: 50,
            marginTop: 5,
            marginBottom: 5
        },

        imageSymbol: {
            position: 'relative',
            width: 65,
            height: "100%",
            objectFit: "contain"
        }

    };
    const styles = StyleSheet.create(stylesArgs);
    const route = useRoute();
    const { idChar, nameChar, operation  } = route.params;

    const [ digit1View, setDigit1View ] = useState(null);
    const [ digit2View, setDigit2View ] = useState(null);
    const [ operationSymbolView, setOperationSymbolView ] = useState(null);
    const [ resultOpView, setResultOpView ] = useState(null);
    const [ resultOp, setResultOp ] = useState(0);
    const symbolsImages = [ Apple2IMG, PeachIMG, AppleIMG ];


    // ######  USE EFFECT AREA  ######
	useEffect(() => {
        rendererOperationSymbol();
        newOperation();
	}, []);


    // ######  FUNCTIONS AREA  ######
    const generateRandomVals = () => {
        let random = {
            random1: 0,
            random2: 0
        };
        let continueLoop = true;

        do {
            let val1 = Math.floor(Math.random() * ((9 - 1) - Math.ceil(1))) + Math.ceil(1);
            let val2 = Math.floor(Math.random() * ((9 - 1) - Math.ceil(1))) + Math.ceil(1);
            let tmp1 = val1;
            let tmp2 = val2;
            let response = 0;

            switch (operation) {
                case "Suma":
                    continueLoop = false;
                    break;

                case "Resta":
                    if ( val2 > val1 ) {
                        val1 = tmp2;
                        val2 = tmp1;
                    }

                    response = val1 - val2;
                    if ( response >= 0 ) {
                        continueLoop = false;
                    }
                    break;

                case "Multiplicación":
                    response = val1 * val2;
                    if ( response <= 25 ) {
                        continueLoop = false;
                    }
                    break;

                default:
                    if ( val1 % val2 === 0 || val2 % val1 === 0 ) {
                        continueLoop = false;
                    }
                    break;
            }

            random.random1 = val1;
            random.random2 = val2;

        } while ( continueLoop );

        return random;
    };

    const newOperation = () => {
        let {random1, random2} = generateRandomVals();

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
                view.push( <Image key={"opr_suma"} source={AdditionIMG} style={styles.imageSymbol} /> );
                break;

            case "Resta":
                view.push( <Image key={"opr_resta"} source={SubtractionIMG} style={styles.imageSymbol} /> );
                break;

            case "Multiplicación":
                view.push( <Image key={"opr_multiplicacion"} source={MultiplicationIMG} style={styles.imageSymbol} /> );
                break;

            default:
                view.push( <Image key={"opr_division"} source={DivisionIMG} style={styles.imageSymbol} /> );
                break;
        }

        setOperationSymbolView(view);
    };

    const rendererDigit1View = (random, randomImg) => {
        let view = [];

        for ( let idx = 0; idx < random; idx++ ) {
            view.push( <Image key={"practice_digit1_" + idx} source={symbolsImages[randomImg]} style={styles.image} /> );
        }

        setDigit1View(view);
    };

    const rendererDigit2View = (random, randomImg) => {
        let view = [];

        for ( let idx = 0; idx < random; idx++ ) {
            view.push( <Image key={"practice_digit2_" + idx} source={symbolsImages[randomImg]} style={styles.image} /> );
        }

        setDigit2View(view);
    };

    const rendererResultOpView = (result, randomImg) => {
        let view = [];

        for ( let idx = 0; idx < result; idx++ ) {
            view.push( <Image key={"practice_result_" + idx} source={symbolsImages[randomImg]} style={styles.image} /> );
        }

        setResultOpView(view);
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

        result = (isValid == 1) ? result : result + 3;

        setResultOp(result);
        return result;
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
            <PressableBack idChar={idChar} nameChar={nameChar} operation={operation} path="options" styles={{ top: -35 }} />

            <View className="bg-yellow-100" style={{ borderBottomLeftRadius: 150, borderBottomRightRadius: 150 }}>
                <View className="flex-col flex-wrap w-full py-3" style={{ borderBottomColor: 'rgba(202,138,4, 1)', borderBottomWidth: 5 }}>
                    <Text className="w-full h-auto text-yellow-600 font-bold text-center text-2xl" style={{ textTransform: "uppercase" }}>
                        {operation}
                    </Text>
                </View>

                <View className="flex-row flex-wrap w-full px-3" style={{ height: "100%", maxHeight: 225 }}>

                    <View className="flex-row flex-wrap h-full py-10 mt-0 justify-center content-center" style={{ width: "40%" }}>
                        {digit1View}
                    </View>

                    <View className="flex-row flex-wrap h-full py-10 mt-0 justify-center content-center" style={{ width: "20%" }}>
                        {operationSymbolView}
                    </View>

                    <View className="flex-row flex-wrap h-full py-10 mt-0 justify-center content-center" style={{ width: "40%" }}>
                        {digit2View}
                    </View>
                </View>

                <View className="flex-row flex-wrap w-full px-3 content-center justify-center items-center" style={{ height: "100%", maxHeight: 90 }}>

                    <View style={{ width: "auto" }}>
                        <EqualsIco name="equals" className="text-red-800 text-center font-bold my-2 mx-3" size={72} />
                    </View>

                    <Text className="flex font-bold text-5xl text-red-800">{resultOp}</Text>

                </View>
            </View>

            <View className="flex-row flex-wrap w-full px-3 my-3" style={{ height: "100%", maxHeight: 225 }}>

                <View className="flex-row flex-wrap h-full py-10 mt-0 justify-center content-center" style={{ width: "100%" }}>
                    {resultOpView}
                </View>

            </View>

            <View className="flex-row flex-wrap w-full bg-yellow-100 px-3 mt-5" style={{ height: "100%", maxHeight: 225, borderTopLeftRadius: 95, borderTopRightRadius: 95 }}>

                <View className="flex-row flex-wrap h-full py-5 mt-0 justify-center content-center" style={{ width: "50%" }}>
                    <Pressable onPress={wrongResponseOp}>
                        {({ pressed }) => (
                            <Image key={"practice_btn_wrong"} source={WrongIMG} className="flex w-auto" style={{ width: 110, height: 110, objectFit: "contain", opacity: pressed ? .5 : 1 }} />
                        )}
                    </Pressable>
                </View>

                <View className="flex-row flex-wrap h-full py-5 mt-0 justify-center content-center" style={{ width: "50%" }}>
                    <Pressable onPress={validResponseOp}>
                        {({ pressed }) => (
                            <Image key={"practice_btn_check"} source={CheckIMG} className="flex w-auto" style={{ width: 110, height: 110, objectFit: "contain", opacity: pressed ? .5 : 1 }} />
                        )}
                    </Pressable>
                </View>

            </View>

        </ScreenLayout>

    );

}
