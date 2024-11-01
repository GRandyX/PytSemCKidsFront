/** REACT NATIVE IMPORTS */
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/** OWNER COMPONENTS IMPORTS */
import { ScreenHeader } from "../Components/ScreenHeader";
import { PressableBack } from "../Components/PressableBack";
import { LearnAddition } from "../Components/learn_addition";
import { LearnSubtraction } from '../Components/learn_subtraction';
import { LearnMultiplication } from '../Components/learn_multiplication';
import { LearnDivision } from '../Components/learn_division';

/** OWNER IMAGES IMPORTS */
import { GamepadIco } from "./icons";


export default function Learn() {

    // ######  VARS/CONSTANTS AREA  ######
    const insets = useSafeAreaInsets();
    const stylesArgs = {

        title: {
            borderBottomColor: 'rgba(161,98,7, 1)',
            borderBottomWidth: 4,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            color: 'rgba(161,98,7, 1)',
            textAlign: "center",
            width: "100%",
            maxWidth: "100%",
            fontWeight: "bold",
            fontSize: 35
        },

        sub_title: {
            color: 'rgba(161,98,7, 1)',
            width: "100%",
            fontSize: 25,
            fontWeight: "bold"
        },

        content: {
            color: 'rgba(161,98,7, 1)',
            width: "100%",
            fontSize: 19,
            fontWeight: "normal",
            textAlign: "justify"
        },

        image: {
            position: 'relative',
            width: 50,
            height: 50,
            marginTop: 0,
            marginBottom: 0
        },

    };
    const styles = StyleSheet.create(stylesArgs);
    const route = useRoute();
    const { idChar, nameChar, operation  } = route.params;
    const [ learnInfoView, setLearnInfoView ] = useState(null);


    // ######  USE EFFECT AREA  ######
    useEffect(() => {
        getLearnInfo();
    }, []);


    // ######  FUNCTIONS AREA  ######
    const getLearnInfo = () => {
        let view = [];

        switch (operation) {
            case "Suma":
                view.push( <LearnAddition /> );
                break;

            case "Resta":
                view.push( <LearnSubtraction /> );
                break;

            case "Multiplicación":
                view.push( <LearnMultiplication /> );
                break;

            default:
                view.push( <LearnDivision /> );
                break;
        }

        setLearnInfoView(view);
    };


    // ######  VIEW AREA  ######
    return (

        <View className="w-full h-full" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <ScreenHeader idChar={idChar} />

            <PressableBack idChar={idChar} nameChar={nameChar} operation={operation} path="options" />

            <ScrollView>

                <View className="flex-col flex-wrap w-full h-full py-3 bg-black/10">
                    <Text className="py-5" style={styles.title}>
                        {operation}
                    </Text>

                    {learnInfoView}

                    <GamepadIco name="gamepad" className="mt-5 text-black/25 self-center" size={100} />
                </View>

            </ScrollView>
        </View>


    );

}
