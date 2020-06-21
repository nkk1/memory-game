import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";

export default function Box(props) {
    function onSelect() {
        props.updateBlocks(c => {
            return [
                ...c.map((item, i)=>{
                    if(i===props.index)
                        return {...item, hidden: false};
                    return {...item, hidden: true};
                })
            ];
        });

        props.updateScore(props.index);

    }
    return (
        <TouchableOpacity
            onPress={() => onSelect()}
            style={styles.box}
        >
            {!props.item.hidden && <Text style={[styles.boxText]}>{props.item.name}</Text>}
        </TouchableOpacity>
    )
}