import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    FlatList,
    SafeAreaView,
    Button,
    Dimensions,
    Image,
} from 'react-native';

import PuzzleCard from './PuzzleCard';
import Modal from 'react-native-modal';
import LevelSlider from './slider'

import * as constant from './constants';
import Constants from "expo-constants";

const imageInModal = Dimensions.get('window').width/ 1.5 ;

export default function FlippingCards() {
    
    const [columns, setColumns] = useState(2);
    const [rows, setRows] = useState(2);

    const [images, setImages] = useState(constant.CreatePuzzles(columns*rows));
    const [puzzleStarted, setPuzzleStarted] = useState(false);
    const [puzzle, setPuzzle] = useState({});
    const [visitedPuzzles, setVisitedPuzzles] = useState([]);
    const [score, setScore] = useState(0);
    const [counter, setCounter] = useState(0);
    const [randomPuzzles, setRandomPuzzles] = useState(constant.GetRandomItemsFromArray(images, images.length));
    const [gameOver, setGameOver] = useState(false);

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

    return (
        <SafeAreaView style={{flex:1, marginTop: 50, backgroundColor: "#e91e63"}}>

            <View style={{borderColor: 'lightgrey', borderRadius: 5, borderWidth: 1, margin: 5}}>
                <Text style={{textAlign: "center", fontSize: 35, fontWeight: "200", padding: 5,color: "#fff"}}>Score: {score}</Text>
            </View>

            <LevelSlider setColumns={setColumns} setRows={setRows} />

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
                    style={{width: '50%', height: '90%', alignSelf: "center"}}
                    source={puzzle.name}
                />
            </View>
            }

            <Button
                title="GO"
                disabled={buttonDisabled}
                onPress={() => puzzleStarted ? "" : startPuzzle()}
            />

            <Modal isVisible={gameOver} onBackdropPress={() => onBackDrop()}>
                <View style={{ flex: 0.6, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: Constants.statusBarHeight }}>
                    {score === rows*columns * 10 &&
                        <>
                        <Text>WooooHooooo.. MAXIMUM SCORE !!!!!</Text>
                        <Image resizeMode="contain"
                             source={constant.RandomElementFromArray(constant.winnerGIFs)}
                             style={{width: imageInModal, height: imageInModal}}
                        />
                        </>
                    }
                    <Text style={{fontSize: 30}}>SCORE: {score}</Text>
                </View>
            </Modal>

        </SafeAreaView>
    )
}
