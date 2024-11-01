import { View, Text, StyleSheet, Image } from "react-native";
import PeachIMG from '../assets/images/peach.png';
import VideoLayout from "./VideoLayout";


export function LearnAddition() {

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
            // key={"learn_add_img" + idx}
            view.push( <Image source={PeachIMG} style={styles.image} /> );
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
                La suma es una operación matemática que nos ayuda a juntar cosas. Imagina que tienes un grupo de objetos, como manzanas,
                y quieres saber cuántas tienes en total cuando agregas más manzanas. Eso es sumar: juntar cantidades para ver cuántas tienes en total.
            </Text>

            <Text className="py-2 px-8" style={styles.content}>
                La suma se representa con el símbolo +. Por ejemplo, en la suma 2 + 3, el símbolo + indica que estamos juntando el número 2 y el número 3.
            </Text>

            <Text className="pt-5 pb-2 px-8" style={styles.sub_title}>
                Cómo funciona?
            </Text>

            <Text className="py-2 px-8" style={styles.content}>
                Para entender la suma, veamos un ejemplo sencillo: Imagina que tienes 2 duraznos y alguien te da 3 duraznos más. Ahora, si las juntas, tendrás en total:
            </Text>

            <View className="flex-row flex-wrap justify-center w-full px-5" style={{ borderBottomWidth: 2, borderStyle: "dotted" }}>
                <View className="flex-row flex-wrap justify-center items-center content-center" style={{ width: "40%", minHeight: 50 }}>
                    {rendererIMGView(2)}
                </View>

                <View style={{ width: "20%", minHeight: 50 }}>
                    <Text className="font-bold text-8xl text-center text-yellow-700"> + </Text>
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
                    {rendererIMGView(5)}
                </View>
            </View>

            <Text className="font-bold text-6xl text-center text-yellow-700"> 2 + 3 = 5 </Text>

            <Text className="py-2 px-8" style={styles.content}>
                Así que, en total, tienes 5 duraznos. ¡Eso es sumar! Estás tomando dos grupos de duraznos y juntándolos para ver cuántas tienes en total.
            </Text>

            <View className="w-full" style={{ maxHeight: 225 }}>
                <VideoLayout videoId="eLoJWiucZJE" />
            </View>

        </View>

    );

}