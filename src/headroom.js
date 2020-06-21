import {Header} from "react-native-elements";
import React from "react";

export default function HeadRoom() {
    return(
        <Header
            leftComponent={{ icon: 'refresh', color: '#fff' }}
            centerComponent={{ text: 'Memoize', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    )
}