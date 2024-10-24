import { StyleSheet, Text, View, Image, Button } from 'react-native';
import splash from '../assets/splash.png';
import { Scores } from './Scores';
import React, { useState, useEffect } from 'react';
import SpinnerStart from './SpinnerStart';

export function Splash() {

    const [ progress, setProgress ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                let currentPercent = (prev < 100 ? prev + 5 : 100);

                if (currentPercent === 100) {
                    const interval2 = setInterval(() => {
                        setProgress(0);
                        clearInterval(interval2);
                    }, 2000);
                }

                return currentPercent;
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    const stylesArgs = {

        title: {
            color: 'yellow',
            fontSize: 42,
            textAlign: 'center',
            fontWeight: "bold"
        },

    };
    const styles = StyleSheet.create(stylesArgs);

	return (

        <View className="bg-transparent row-auto p-8 m-8 rounded-xl flex flex-col justify-center align-middle items-center relative">
            <Image source={splash} className="col-span-12 w-64 h-60"></Image>

            <Text style={styles.title} >Bienvenido a</Text>
            <Text style={styles.title} >CalcuKID´S</Text>

            <SpinnerStart progress={progress} progressColor={"green"} textProgressC={"white"} />
        </View>

	);

}
