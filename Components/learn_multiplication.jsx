import { View, Text, StyleSheet, Image } from "react-native";
import PeachIMG from '../assets/images/peach.png';


export function LearnMultiplication() {

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
    const rendererIMGView = (random) => {
        let view = [];

        for ( let idx = 0; idx < random; idx++ ) {
            view.push( <Image key={idx} source={PeachIMG} style={styles.image} /> );
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
                La multiplicación es una operación matemática que nos ayuda a sumar varias veces el mismo número de una forma rápida. Es como si contaras grupos de objetos iguales.
                Imagina que tienes 3 bolsas con 4 duraznos en cada una. En vez de sumar 4 + 4 + 4, puedes realizar una multiplicación.
            </Text>

            <Text className="py-2 px-8" style={styles.content}>
                La multiplicación se representa con el símbolo "* o x". Por ejemplo, en la multiplicación anterior, 3 * 4 o 3 x 4, el símbolo "* o x" indica que estamos sumando 3 veces, el número 4.
            </Text>

            <Text className="pt-5 pb-2 px-8" style={styles.sub_title}>
                Cómo funciona?
            </Text>

            <Text className="py-2 px-8" style={styles.content}>
                Para entender la multiplicación, veamos un ejemplo sencillo: Imagina que tienes 5 bolsas, y cada una contiene en su interior 3 duraznos.
                Ahora, quieres saber cuantos duraznos tienes en total:
            </Text>

            <View className="flex-row flex-wrap justify-center w-full px-5" style={{ borderBottomWidth: 2, borderStyle: "dotted" }}>
                <View className="flex-row flex-wrap justify-center items-center content-center" style={{ width: "40%", minHeight: 50 }}>
                    {rendererIMGView(5)}
                </View>

                <View style={{ width: "20%", minHeight: 50 }}>
                    <Text className="font-bold text-8xl text-center text-yellow-700"> * </Text>
                </View>

                <View className="flex-row flex-wrap justify-center items-center content-center" style={{ width: "40%", minHeight: 50 }}>
                    {rendererIMGView(3)}
                </View>
            </View>

            <View className="flex-row flex-wrap justify-center w-full px-5">
                <View style={{ width: "20%", minHeight: 50 }}>
                    <Text className="font-bold text-8xl text-center text-yellow-700"> = </Text>
                </View>

                <View className="flex-row flex-wrap justify-center items-center content-center" style={{ width: "80%", minHeight: 50 }}>
                    {rendererIMGView(15)}
                </View>
            </View>

            <Text className="font-bold text-6xl text-center text-yellow-700"> 5 * 3 = 15 </Text>

            <Text className="py-2 px-8" style={styles.content}>
                Así que, en total, tienes 15 duraznos. ¡Eso es multiplicar! Estás tomando 5 bolsas de duraznos y estas sumando todo su contenido para
                saber cuántos duraznos tienes en total.
            </Text>

        </View>

    );

}