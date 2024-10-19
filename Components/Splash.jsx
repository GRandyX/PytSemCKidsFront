import { StyleSheet, Text, View, Image } from 'react-native';
import splash from '../assets/splash.png';

export function Splash() {

    const styles = StyleSheet.create({
        title1: {
            color: 'yellow',
            fontSize: 30,
            textAlign: 'center'
        },

        title2: {
            color: 'yellow',
            fontSize: 50,
            textAlign: 'center',
            fontWeight: 'bold'
        },
    });

	return (

        <View className="bg-gray-500/50 row-auto px-8 rounded-xl flex flex-col justify-center">
            <Image source={splash} className="col-span-12 w-full h-60"></Image>

            <Text style={styles.title1} >Bienvenido a</Text>
            <Text style={styles.title2} >CalcuKID´S</Text>
        </View>

	);

}
