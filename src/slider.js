// import {Divider, Image, Overlay} from "react-native-elements";
// import {Text} from "react-native";
// import {styles} from "./styles";
// import React from "react";
//
// export function PuzzleOverlay(props) {
//     return(
//         <Overlay isVisible={props.overlayVisible} onBackdropPress={()=>props.setOverlayVisible(false)}>
//             <>
//                 { !props.firstTimeAskingQuestion &&
//                 <>
//                     <Image
//                         source={{uri: "https://media.giphy.com/media/wIUQQ07BHzDry/giphy.gif"}}
//                         style={{width: 150, height: 150}}
//                     />
//                     <Divider style={{ backgroundColor: 'grey' }} />
//                     <Text style={[styles.centerText]}>ok now find</Text>
//                 </>
//                 }
//                 { props.firstTimeAskingQuestion && <Text style={[styles.centerText]}>where is</Text> }
//                 <Text style={[styles.centerText, styles.fontH1]}>{props.puzzle}</Text>
//             </>
//         </Overlay>
//
//     )
//
// }

import React, {useState} from "react";
import {View} from 'react-native';
import { Text, Slider } from 'react-native-elements';

export default function LevelSlider({setColumns, setRows}) {

    return(
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
            <Slider
                thumbStyle={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    
                    elevation: 3,
                }}
                trackStyle={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    
                    elevation: 3,
                }}
                thumbTintColor='#ffbb33'
                onValueChange={(current) => {
                    const v = parseInt(current * 10) + 2;
                    const newv = Math.floor(v/2) + 1;              
                    setRows(newv);
                    setColumns(newv);
                }}
            />

        </View>
    )
}