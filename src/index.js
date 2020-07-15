import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    FlatList,    
    ImageBackground,    
    Dimensions,
    Image,
} from 'react-native';
import {Button} from 'react-native-elements';

import HeadRoom from './headroom'
import PuzzleCard from './PuzzleCard';
import Modal from 'react-native-modal';

import * as constant from './constants';
import Constants from "expo-constants";

const imageInModal = Dimensions.get('window').width/ 1.5 ;

export default function FlippingCards() {
    
    const [columns, setColumns] = useState(constant.START_LEVEL);
    const [rows, setRows] = useState(constant.START_LEVEL);

    const [images, setImages] = useState(constant.CreatePuzzles(columns*rows));
    const [puzzleStarted, setPuzzleStarted] = useState(false);
    const [puzzle, setPuzzle] = useState({});    
    const [score, setScore] = useState(0);
    const [counter, setCounter] = useState(0);
    const [randomPuzzles, setRandomPuzzles] = useState(constant.GetRandomItemsFromArray(images, images.length));
    const [gameOver, setGameOver] = useState(false);
    const [bgImage, setBGImage] = useState({uri: constant.RandomElementFromArray(constant.bgImages)});

    const [buttonDisabled, setButtonDisabled]  = useState(true);

    function startPuzzle() {
        setPuzzleStarted(true);
        showNextPuzzle();
    }

    function showNextPuzzle() {
        if(counter < randomPuzzles.length) {
            setPuzzle(randomPuzzles[counter]);
            setCounter(c => c + 1);
        } else {
            setGameOver(true);
        }
    }

    useEffect(() => {
        onBackDrop();        
    }, [columns, rows])

    function onBackDrop() {
        setImages(constant.CreatePuzzles(columns*rows));
        setButtonDisabled(true);
        setPuzzleStarted(false);
        setPuzzle({});
        setScore(0);
        setCounter(0);
        setGameOver(false);
    }

    useEffect(function () {
        setButtonDisabled(!isAllImgsVisited());
    }, [JSON.stringify(images)]);

    useEffect(function () {
        setRandomPuzzles(constant.GetRandomItemsFromArray(images, images.length));
    }, [JSON.stringify(images.map(img => img.id))]);

    function countScore(clickedCard) {
        if(!puzzleStarted){
            setImages(images.map(img => {
                if(img.id === clickedCard.id)
                    return {...img, visited: true};
                return img
            }));
            isAllImgsVisited();
            return null;
        }
        if(puzzle.id === clickedCard.id) {
            setScore(c => c + 10);
            // TODO: sync this 400 with celebrate's 400
            setTimeout(() => showNextPuzzle(), 400);
            return true;
        }
        setScore(c => c - 5);
        return false;
    }

    function isAllImgsVisited() {
        let i;
        for(i=0; i<images.length; i++)
            if(!images[i].visited)
                return false
        return true
    }

    useEffect(()=>{
       setBGImage({uri: constant.RandomElementFromArray(constant.bgImages)});
    },[JSON.stringify(images.map(img => img.id))]);

    return (
        
            <ImageBackground source={bgImage} style={{flex:1}}>

            <HeadRoom setColumns={setColumns} setRows={setRows} rows={rows} />

            <View style={{borderColor: 'lightgrey', borderRadius: 5, borderWidth: 1, margin: 3}}>
                <Text style={{textAlign: "center", fontSize: 25, fontWeight: "200", padding: 5,color: "#fff"}}>Score: {score}</Text>
            </View>
            

            <FlatList
                data={images}
                key={columns*rows}
                numColumns={columns}
                keyExtractor={item => item.name}
                renderItem={({ item, index }) => (
                    <PuzzleCard card={item} countScore={countScore} gameOver={gameOver} columns={columns} />
                )}
            />

            {puzzleStarted &&
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Image
                    resizeMode="contain"
                    style={{width: '50%', height: '300%', alignSelf: "center", marginBottom: 150}}
                    source={puzzle.name}
                />
            </View>
            }

            {!puzzleStarted && <Button
                buttonStyle={{width: 80, alignSelf: "center", marginBottom: 50}}
                title="GO"
                disabled={buttonDisabled}
                onPress={() => puzzleStarted ? "" : startPuzzle()}
            />}

            <Modal isVisible={gameOver} onBackdropPress={() => onBackDrop()}>
                <View style={{ flex: 0.6, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: Constants.statusBarHeight }}>
                    {score === rows*columns * 10 &&
                        <>
                        <Text>woohooo HIGH SCORE !!!!!</Text>
                        <Image resizeMode="contain"
                             source={constant.RandomElementFromArray(constant.winnerGIFs)}
                             style={{width: imageInModal, height: imageInModal}}
                        />
                        </>
                    }
                    <Text style={{fontSize: 30}}>SCORE: {score}</Text>                    
                </View>
            </Modal>

            </ImageBackground>


    )
}
