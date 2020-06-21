import React, {useState, useRef, useEffect} from 'react';
import {
    SafeAreaView,
    FlatList,
    View,
} from 'react-native';

import Box from './Box';
import {styles} from "./styles";
import * as constant from './constants';
import {PuzzleOverlay} from "./overlay";
import Score from "./score";
import HeadRoom from "./headroom";

export default function Game() {
    const [blocks, setBlocks] = useState(constant.InitLettersPuzzle);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [firstTimeAskingQuestion, setFirstTimeAskingQuestion] = useState(true);
    const [puzzle, setPuzzle] = useState({});
    const [score, setScore] = useState(0);

    function markVisited(clickedIndex) {
        setBlocks(c => {
            return c.map((block, i) => {
                if(i === clickedIndex)
                    return {...block, visited: true};
                return block
            })
        });
    }

    function allBlocksVisited() {
        let i;
        for(i=0; i<blocks.length; i++)
            if (!blocks[i].visited) return false;
        return true;
    }

    useEffect(() => {
        if(allBlocksVisited() && constant.IsEmptyMap(puzzle)){
            setPuzzle(constant.RandomElementFromArray(blocks));
            setOverlayVisible(true);
        }
    }, [blocks])


    function updateScore(clickedIndex) {

        markVisited(clickedIndex);

        // if all blocks have been visited
        if(allBlocksVisited()) {
            // and if this is the first puzzle to be asked see above
            setFirstTimeAskingQuestion(false);
            if(puzzle.id === blocks[clickedIndex].id) {
                setScore(s => s + 10);
                setPuzzle(constant.RandomElementFromArray(blocks));
                setOverlayVisible(true);
            } else {
                setScore(s => s - 5);
            }
        }
    }

    return (

        <SafeAreaView style={styles.container}>

            <HeadRoom />

            <Score score={score} />
            <View style={[styles.flexNine, styles.marginFive]} >
                <FlatList
                    data={blocks}
                    numColumns={constant.ColumnsCount}
                    keyExtractor={item => item.name}
                    renderItem={({ item, index }) => (
                        <Box item={item} index={index} updateBlocks={setBlocks} updateScore={updateScore} />
                    )}
                />
            </View>

            <PuzzleOverlay
                overlayVisible={overlayVisible}
                setOverlayVisible={setOverlayVisible}
                firstTimeAskingQuestion={firstTimeAskingQuestion}
                puzzle={puzzle.name} />
        </SafeAreaView>
    );
}