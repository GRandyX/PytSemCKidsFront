import { View, Image } from "react-native";
import BackgroundImg from '../assets/images/bubbles.jpg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// <Image source={BackgroundImg} className="fixed top-0 left-0 z-0" style={{width: "100%", height: "100%"}}></Image>

export function ScreenLayout({
    children, justifyContent, alignItems
}) {

    const insets = useSafeAreaInsets();

    return (

        <View className="w-full h-full bg-white" style={{ justifyContent: (justifyContent) ? "center" : "flex-start", alignItems: (alignItems) ? "center" : "flex-start", marginTop: insets.top }}>
            <View className="absolute z-10 justify-center align-middle items-center bg-transparent">

                <View className="flex-row flex-wrap justify-center align-middle items-center h-full">
                    {children}
                </View>

            </View>
        </View>

    )
}