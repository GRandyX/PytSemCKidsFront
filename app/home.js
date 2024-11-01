/** REACT NATIVE IMPORTS */
import React from 'react';
import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

/** OWNER COMPONENTS IMPORTS */
import { ScreenLayout } from "../Components/ScreenLayout";
import { ScreenHeader } from "../Components/ScreenHeader";
import { PressableBack } from "../Components/PressableBack";

/** OWNER IMAGES IMPORTS */
import { GamepadIco } from "./icons";
import AddIMG from '../assets/images/suma.png';
import SubIMG from '../assets/images/resta.png';
import MultIMG from '../assets/images/multiplicacion.png';
import DivIMG from '../assets/images/division.png';


export default function Home() {

    // ######  VARS/CONSTANTS AREA  ######
    const router = useRouter();
    const route = useRoute();
    const { idChar, nameChar  } = route.params;


    // ######  USE EFFECT AREA  ######


    // ######  FUNCTIONS AREA  ######
    const goToOptions = (operation) => {
        router.navigate({
            pathname: "options",
            params: {
                idChar: idChar,
                nameChar: nameChar,
                operation: operation
            }
        });
    };


    // ######  VIEW AREA  ######
    return (

        <ScreenLayout>
            <PressableBack idChar={idChar} nameChar={nameChar} path="avatar_selector" styles={{ top: -25 }} />

            <ScreenHeader idChar={idChar} />


            <View className="flex-col flex-wrap w-full px-5">
                <Text className="mt-5 py-1 px-2 w-full h-auto left-2 text-black font-bold text-start" style={{ fontSize: 18 }}>
                    ¡Hola!
                </Text>

                <Text className="mt-1 py-1 px-2 w-full h-auto left-2 text-yellow-600 font-bold text-start" style={{ fontSize: 18 }}>
                    ¿Qué aprenderemos hoy?
                </Text>
            </View>

            <View className="flex-row flex-wrap w-full h-full px-10 mt-5 justify-center">

                <View className="mt-8">
                    <Pressable onPress={ () => { goToOptions("Suma") } } className="flex-row flex-wrap bg-purple-700 w-full justify-between items-center rounded-2xl overflow-hidden active:opacity-25">

                        <Text className="mt-1 py-10 px-2 w-auto h-auto left-2 text-white font-bold text-start" style={{ fontSize: 20 }}>
                            Suma
                        </Text>

                        <View className="bg-purple-300 w-44 h-full -z-10 -right-10" style={{ borderTopLeftRadius: 100, borderBottomLeftRadius: 20 }}></View>
                    </Pressable>

                    <Image source={AddIMG} className="absolute z-10 w-32 h-32 -right-5 -top-5" style={{ objectFit: "contain", borderRadius: 100 }} />
                </View>

                <View className="mt-8">
                    <Pressable onPress={ () => { goToOptions("Resta") } } className="flex-row flex-wrap bg-orange-700 w-full justify-between items-center rounded-2xl overflow-hidden active:opacity-25">

                        <Text className="mt-1 py-10 px-2 w-auto h-auto left-2 text-white font-bold text-start" style={{ fontSize: 20 }}>
                            Resta
                        </Text>

                        <View className="bg-orange-300 w-44 h-full -z-10 -right-10" style={{ borderTopLeftRadius: 100, borderBottomLeftRadius: 20 }}></View>
                    </Pressable>

                    <Image source={SubIMG} className="absolute z-10 w-32 h-32 -right-5 -top-5" style={{ objectFit: "contain", borderRadius: 100 }} />
                </View>

                <View className="mt-8">
                    <Pressable onPress={ () => { goToOptions("Multiplicación") } } className="flex-row flex-wrap bg-green-700 w-full justify-between items-center rounded-2xl overflow-hidden active:opacity-25">

                        <Text className="mt-1 py-10 px-2 w-auto h-auto left-2 text-white font-bold text-start" style={{ fontSize: 20 }}>
                            Multiplicación
                        </Text>

                        <View className="bg-green-300 w-44 h-full -z-10 -right-10" style={{ borderTopLeftRadius: 100, borderBottomLeftRadius: 20 }}></View>
                    </Pressable>

                    <Image source={MultIMG} className="absolute z-10 w-32 h-32 -right-5 -top-5" style={{ objectFit: "contain", borderRadius: 100 }} />
                </View>

                <View className="mt-8">
                    <Pressable onPress={ () => { goToOptions("División") } } className="flex-row flex-wrap bg-yellow-700 w-full justify-between items-center rounded-2xl overflow-hidden active:opacity-25">

                        <Text className="mt-1 py-10 px-2 w-auto h-auto left-2 text-white font-bold text-start" style={{ fontSize: 20 }}>
                            División
                        </Text>

                        <View className="bg-yellow-300 w-44 h-full -z-10 -right-10" style={{ borderTopLeftRadius: 100, borderBottomLeftRadius: 20 }}></View>
                    </Pressable>

                    <Image source={DivIMG} className="absolute z-10 w-32 h-32 -right-5 -top-5" style={{ objectFit: "contain", borderRadius: 100 }} />
                </View>

                <GamepadIco name="gamepad" className="mt-5 text-black/25" size={85} />
            </View>


        </ScreenLayout>

    );

}