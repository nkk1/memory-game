import {Header, Overlay, Button, Input} from "react-native-elements";
import React, {useState, useRef} from "react";
import {styles} from "./styles";

export default function HeadRoom(props) {
    const [visible, setVisible] = useState(false);
    const inputRef = useRef(null);    
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    
    function refresh() {
        props.resetGame();
    }

    // on submit fav word 
    // * clear the text box 
    // * update the array
    // TODO: check duplicate, sort, bad words, compare against?
    const submitFavWord = async word  => {
        inputRef.current.clear()
        w = [...props.favWords, word];
        await props.storeFavWords(JSON.stringify(w));
    }

    function settings() {
        setVisible(true);
    }

    return(
        <>
        <Header
            backgroundColor="#fff"
            leftComponent={{ icon: 'refresh', color: '#111', onPress: refresh }}
            centerComponent={{ text: 'Memoize', style: { color: '#111', fontSize: 30 } }}
            rightComponent={{ icon: 'settings', color: '#111', onPress: settings }}
        >
        </Header>

        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={[styles.centerContent, styles.perfectOverlay]}>
            <>
            <Input placeholder='your favourite word' ref={inputRef} onSubmitEditing={(event)=>submitFavWord(event.nativeEvent.text)} />
            
            {props.blocks.map((w, i) =>                
                <Button title={w.name} key={i} type="clear" onPress={()=>{
                    inputRef.current.setNativeProps({text: w.name})
                    setFavWords(w => {
                        t = [...w]                    
                        t.splice(i, 1)
                        return t
                    })
                }} />)
            }
            </>
        </Overlay>
        </>
    )
}


/*
            {props.favWords.map((w, i) =>                
                <Button title={w} key={i} type="clear" onPress={()=>{
                    inputRef.current.setNativeProps({text: w})
                    setFavWords(w => {
                        t = [...w]                    
                        t.splice(i, 1)
                        return t
                    })
                }} />)
            }
            */