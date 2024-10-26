import React, { useRef, useEffect } from "react";
import { View, Animated, Text, StyleSheet } from "react-native";

const SpinnerStart = ({ progress, progressColor = "", textProgressC = "", showLoadingText = false }) => {

	const animatedValue = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(animatedValue, {
			toValue: progress,
			duration: 500,
			useNativeDriver: false,
		}).start();
	}, [progress]);

	const widthInterpolate = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: ["0%", "100%"],
	});

	const stylesArgs = {

		progress: {
			height: "100%",
			backgroundColor: "brown",
			borderRadius: 10,
		},

		progressText: {
			color: "#ffffff",
			position: "absolute"
		}

	};

	if ( progressColor.length > 0 ) stylesArgs.progress.backgroundColor = progressColor;
	if ( textProgressC.length > 0 ) stylesArgs.progressText.color = textProgressC;

	const styles = StyleSheet.create(stylesArgs);

	return (

		<View className="mt-10 mb-4 pt-0 relative">
			<Text className="absolute left-3 font-bold text-base top-0 z-10" style={styles.progressText}>Cargando...</Text>
			<Text className="absolute right-3 font-bold text-base top-0 z-10" style={styles.progressText}>{Math.round(progress)}%</Text>

			<View className="h-6 w-64 bg-slate-400 rounded-full">
				<Animated.View style={[styles.progress, { width: widthInterpolate }]} />
			</View>
		</View>

	);
};

export default SpinnerStart;
