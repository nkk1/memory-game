
import { Dimensions, StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import * as constant from './constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
    },
    box: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width / constant.ColumnsCount, // approximate a square
    },
    boxText: {
        color: '#fff',
    }
});

export {styles}