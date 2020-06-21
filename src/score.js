import {Text, View} from "react-native";
import {styles} from "./styles";
import React from "react";

export default function Score(props) {
    return(
        <View style={[
            styles.flexOne,
            styles.simpleBorder,
            styles.marginFive,
            styles.centerContent,
        ]}>
            <Text style={[styles.centerText, styles.fontH3]}>Score: {props.score}</Text>
        </View>

    )
}