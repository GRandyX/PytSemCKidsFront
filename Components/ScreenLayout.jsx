import { View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function ScreenLayout({
    children, justifyContent, alignItems
}) {

    const insets = useSafeAreaInsets();

    return (

        <View className="w-full h-full" style={{ justifyContent: (justifyContent) ? "center" : "flex-start", alignItems: (alignItems) ? "center" : "flex-start", marginTop: insets.top, backgroundColor: "whitesmoke" }}>
            <View className="absolute z-10 justify-center align-middle items-center bg-transparent">

                <View className="flex-row flex-wrap justify-center align-middle items-center h-full">
                    {children}
                </View>

            </View>
        </View>

    )
}