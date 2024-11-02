import { Pressable } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";

import { CircleALeft } from "../app/icons";


export function PressableBack({ idChar, nameChar, operation, path, styles = {} }) {

    const insets = useSafeAreaInsets();
    const router = useRouter();

    const goToBack = () => {
        router.navigate({
            pathname: path,
            params: { idChar, nameChar, operation }
        });
    };

    return (

        <Pressable onPress={goToBack} className="bg-yellow-600 rounded-full w-15 right-5 absolute" style={{ marginTop: insets.top + 80, zIndex: 15, top: 0, ... styles }}>
            {({ pressed }) => ( <CircleALeft size={42} color="black" style={{ opacity: pressed ? .5 : 1 }} /> )}
        </Pressable>

    )

}