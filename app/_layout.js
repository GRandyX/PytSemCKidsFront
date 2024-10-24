import { Slot } from "expo-router";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Layout() {

    //const insets = useSafeAreaInsets();

    return (

        <View className="flex-1 bg-black justify-center">
            <Slot />
        </View>

    );

}