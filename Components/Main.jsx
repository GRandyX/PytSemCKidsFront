import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import splash from '../assets/splash.png';
import Constants from 'expo-constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Splash } from './Splash';

export function Main() {

    const insets = useSafeAreaInsets();

	return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <ScrollView>
                <Splash />
            </ScrollView>
        </View>
	);

}