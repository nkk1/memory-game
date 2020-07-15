import React, {useState} from 'react';
import {TouchableOpacity, TouchableHighlight, Image, Dimensions, View} from 'react-native';
import * as constant from "./constants";
import Modal from 'react-native-modal';
import {Button} from 'react-native-elements';


export default function PuzzleCard({card, countScore, gameOver, columns}) {
    const marginBetweenImages = 5;
    const imageDimension = Dimensions.get('window').width / columns - (marginBetweenImages * 2);

    const imageInModal = Dimensions.get('window').width/ 1.5 ;
    const [hideImage, setHideImage] = useState(true);
    const [celebrate, setCelebrate] = useState(false);

    function onSelect() {
        setHideImage(false);
        const timeout = setTimeout(()=>setHideImage(true), 1000);
        if(countScore(card)){
            setTimeout(() => setCelebrate(true), 400);
            clearTimeout(timeout);
        }
    }

    function backDrop() {
        setCelebrate(false);
        setHideImage(true);
    }

    return(
        <>
            <TouchableOpacity onPress={() => onSelect()}>
                <Image
                    resizeMode="contain"
                    style={{
                        width: imageDimension,
                        height: imageDimension,
                        margin: marginBetweenImages,
                        borderWidth: 1,
                        borderColor: '#ffebee',
                        backgroundColor: '#ffebee',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.37,
                        shadowRadius: 2,
                        overflow: 'visible',
                    }}
                    source={hideImage ? {} :  card.name }
                />
            </TouchableOpacity>

            {!gameOver &&
            <Modal animationIn="zoomInDown" animationOut="zoomOutUp" isVisible={celebrate} onBackdropPress={() => backDrop()}>
                <View style={{ 
                    flex: 0.7, 
                    backgroundColor: '#fff', 
                    alignItems: 'center', 
                    justifyContent: 'center' }}>
                    <TouchableHighlight onPress={() => backDrop()}>
                        <Image resizeMode="contain"
                               source={constant.RandomElementFromArray(constant.yayGIFs)}
                               style={{width: imageInModal, height: imageInModal}}
                        />
                    </TouchableHighlight>
                    <Button title="Next" onPress={() => backDrop()} style={{width: 50}}/>
                </View>
            </Modal>
            }
        </>
    )
}