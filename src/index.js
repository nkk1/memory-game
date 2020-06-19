import React, {useState, useRef} from 'react';
import {
    SafeAreaView,
    FlatList,
} from 'react-native';
import Box from './Box';
import {styles} from "./styles";
import * as constant from './constants';

export default function Game() {
    const [blocks, setBlocks] = useState([
        {
            name: 'x',
            hidden: true,
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        },
        {
            name: 'y',
            hidden: true,
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
        },
        {
            name: 'C',
            hidden: true,
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
        },
        {
            id: 'bd7zcbea-c1b1-46c2-aed5-3ad53abb28ea',
            name: 'D',
            hidden: true
        },
        {
            name: 'E',
            hidden: true,
            id: 'bd4acbea-c1b1-46c2-aed5-3ad53abb28bc',
        },
        {
            id: 'bdxacbea-c1b1-46c2-aed5-3ad53abb28ea',
            name: 'F',
            hidden: true
        }
    ]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={blocks}
                numColumns={constant.ColumnsCount}
                keyExtractor={item => item.name}
                renderItem={({ item, index }) => (
                    <Box item={item} index={index} updateBlocks={setBlocks} />
                )}
            />
        </SafeAreaView>
    );
}