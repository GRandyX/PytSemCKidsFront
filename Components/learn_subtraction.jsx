import { View, Text, StyleSheet, Image } from "react-native";
import AppleIMG from '../assets/images/apple02.png';
import VideoLayout from "./VideoLayout";


export function LearnSubtraction() {

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
            // key={"learn_sub_img" + idx}
            view.push( <Image source={AppleIMG} style={styles.image} /> );
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
                La resta es una operación matemática que nos ayuda a disminuir cosas. Imagina que tienes un grupo de objetos, como manzanas,
                y quieres saber cuántas manzanas te quedan si regalas unas a un amigo. Eso es restar: Quitar cantidades para saber cuántas te quedan en total.
            </Text>

            <Text className="py-2 px-8" style={styles.content}>
                La resta se representa con el símbolo "-". Por ejemplo, en la resta 7 - 3, el símbolo - indica que le estamos quitando al número 7, el número 3.
            </Text>

            <Text className="pt-5 pb-2 px-8" style={styles.sub_title}>
                Cómo funciona?
            </Text>

            <Text className="py-2 px-8" style={styles.content}>
                Para entender la resta, veamos un ejemplo sencillo: Imagina que tienes 7 manzanas y le regalas 3 manzanas a alguien. Ahora, si restas,
                las manzanas que te quedan en total son:
            </Text>

            <View className="flex-row flex-wrap justify-center w-full px-5" style={{ borderBottomWidth: 2, borderStyle: "dotted" }}>
                <View className="flex-row flex-wrap justify-center items-center content-center" style={{ width: "40%", minHeight: 50 }}>
                    {rendererIMGView(7)}
                </View>

                <View style={{ width: "20%", minHeight: 50 }}>
                    <Text className="font-bold text-8xl text-center text-yellow-700"> - </Text>
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
                    {rendererIMGView(4)}
                </View>
            </View>

            <Text className="font-bold text-6xl text-center text-yellow-700"> 7 - 3 = 4 </Text>

            <Text className="py-2 px-8" style={styles.content}>
                Así que, en total, te quedan 4 manzanas. ¡Eso es restar! Estás tomando un grupo completo de manzanas y estas quitando unas, y la respuesta es lo que queda.
            </Text>

            <View className="w-full" style={{ maxHeight: 225 }}>
                <VideoLayout videoId="dxBUiU0J9sg" />
            </View>

        </View>

    );

}