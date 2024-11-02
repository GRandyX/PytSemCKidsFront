import { View, Text, StyleSheet, Image } from "react-native";
import AppleIMG from '../assets/images/apple02.png';
import VideoLayout from "./VideoLayout";


export function LearnDivision() {

    // ######  VARS/CONSTANTS AREA  ######
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


    // ######  USE EFFECT AREA  ######


    // ######  FUNCTIONS AREA  ######
    const rendererIMGView = (key, random) => {
        let view = [];

        for ( let idx = 0; idx < random; idx++ ) {
            let nKey = `${key}_img${idx + 1}`;
            view.push( <Image key={nKey} source={AppleIMG} style={styles.image} /> );
        }

        return view;
    };


    // ######  VIEW AREA  ######
    return (

        <View className="w-full">

            <Text className="pt-5 pb-2 px-8" style={styles.sub_title}>
                Qué es?
            </Text>

            <Text className="py-2 px-8" style={styles.content}>
                La división es una operación matemática que nos ayuda a repartir o dividir cosas en partes iguales.
                Imagina que tienes 8 manzanas y quieres repartirlas entre 4 amigos, asegurándote de que cada uno reciba la misma cantidad.
                La división te ayudara a saber cuántas manzanas le tocarán a cada uno. Eso es dividir: Separar cantidades en partes iguales.
            </Text>

            <Text className="py-2 px-8" style={styles.content}>
                La división se representa con el símbolo "/". Por ejemplo, en la division anterior, 8 / 4, el símbolo "/""
                indica que estamos partiendo el número 8 en partes iguales, de tal modo que los 4 amigos reciban lo mismo.
            </Text>

            <Text className="pt-5 pb-2 px-8" style={styles.sub_title}>
                Cómo funciona?
            </Text>

            <Text className="py-2 px-8" style={styles.content}>
                Para entender la división, veamos un ejemplo sencillo: Imagina que tienes 9 manzanas y quieres repartir con tu familia de 3 integrantes. Ahora, si las divides, tendrás en total:
            </Text>

            <View className="flex-row flex-wrap justify-center w-full px-5" style={{ borderBottomWidth: 2, borderStyle: "dotted" }}>
                <View className="flex-row flex-wrap justify-center items-center content-center" style={{ width: "40%", minHeight: 50 }}>
                    {rendererIMGView("learn_div_val1", 9)}
                </View>

                <View style={{ width: "20%", minHeight: 50 }}>
                    <Text className="font-bold text-8xl text-center text-yellow-700"> / </Text>
                </View>

                <View className="flex-row flex-wrap justify-center items-center content-center" style={{ width: "40%", minHeight: 50 }}>
                    {rendererIMGView("learn_div_val2", 3)}
                </View>
            </View>

            <View className="flex-row flex-wrap justify-center w-full px-5">
                <View style={{ width: "20%", minHeight: 50 }}>
                    <Text className="font-bold text-8xl text-center text-yellow-700"> = </Text>
                </View>

                <View className="flex-row flex-wrap justify-center items-center content-center" style={{ width: "80%", minHeight: 50 }}>
                    {rendererIMGView("learn_div_val3", 3)}
                </View>
            </View>

            <Text className="font-bold text-6xl text-center text-yellow-700"> 9 / 3 = 3 </Text>

            <Text className="py-2 px-8" style={styles.content}>
                Así que, debes dar a cada uno 3 manzanas. ¡Eso es dividir! Estás tomando el grupo de manzanas y los estas separando en partes iguales, para saber cuántas debes repartir.
            </Text>

            <View className="w-full" style={{ maxHeight: 225 }}>
                <VideoLayout videoId="8QL-Rws-VXM" />
            </View>

        </View>

    );

}