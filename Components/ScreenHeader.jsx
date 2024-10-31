import { View, Image, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";

import { Characters } from "../app/charsets";
import Title from '../assets/images/title.png';


export function ScreenHeader({idChar}) {

    // ######  VARS/CONSTANTS AREA  ######
    const router = useRouter();

    // ######  FUNCTIONS AREA  ######
    const goToAvatarSelector = () => {
        router.navigate("/avatar_selector");
    };


    const renderCharacter = (id) => {
        return <Pressable onPress={goToAvatarSelector}>
            {({ pressed }) => (
                <Image source={Characters[id - 1].source} className="w-14 h-14 left-3 top-0 bg-cyan-400" style={{ objectFit: "contain", borderRadius: 100, opacity: pressed ? .25 : 1 }} />
            )}
        </Pressable>
    };


    return (

        <View className="flex-row flex-wrap w-full py-2 justify-between bg-black/10">
            {renderCharacter(idChar)}

            <Image source={Title} className="w-36 h-14 left-0" style={{ objectFit: "contain" }} />
        </View>

    )
}