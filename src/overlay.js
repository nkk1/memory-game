import {Divider, Image, Overlay} from "react-native-elements";
import {Text} from "react-native";
import {styles} from "./styles";
import React from "react";

export function PuzzleOverlay(props) {
    return(

        <Overlay isVisible={props.overlayVisible} onBackdropPress={()=>props.setOverlayVisible(false)}>
            <>
                { !props.firstTimeAskingQuestion &&
                <>
                    <Image
                        source={{uri: "https://media.giphy.com/media/wIUQQ07BHzDry/giphy.gif"}}
                        style={{width: 200, height: 200}}
                    />
                    <Divider style={{ backgroundColor: 'grey' }} />
                    <Text style={[styles.centerText]}>ok now find</Text>
                </>
                }
                { props.firstTimeAskingQuestion && <Text style={[styles.centerText]}>where is</Text> }
                <Text style={[styles.centerText, styles.fontH1]}>{props.puzzle}</Text>
            </>
        </Overlay>

    )

}