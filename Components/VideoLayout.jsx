/** REACT NATIVE IMPORTS */
import React, { useState, useCallback, useEffect } from "react";
import { View, Text, Button } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";


export default function VideoLayout( {videoId} ) {

	// ######  VARS/CONSTANTS AREA  ######
  	const [playing, setPlaying] = useState(false);


	// ######  USE EFFECT AREA  ######
    useEffect(() => {}, []);


    // ######  FUNCTIONS AREA  ######
  	const onStateChange = useCallback((state) => {
		if (state === "ended") {
			setPlaying(false);
			alert("El video ha terminado.");
		}
  	}, []);

	const togglePlaying = useCallback(() => {
		setPlaying((prev) => !prev);
	}, []);


	// ######  VIEW AREA  ######
  	return (
		<View className="w-full p-5">
			<YoutubeIframe height={300} play={playing} videoId={videoId} onChangeState={onStateChange} onPress={togglePlaying} />
		</View>
  	);
}
