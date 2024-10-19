import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Main } from './Components/Main';

export default function App() {
	return (

		<SafeAreaProvider>
			<View style={styles.container}>
				<StatusBar style="auto" />

				<Main />
			</View>
		</SafeAreaProvider>

	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0, 1)',
		alignItems: 'center',
		justifyContent: 'center',
	},

});
