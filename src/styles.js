
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
    },
    centerContent:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerText: {
        textAlign: 'center',
    },
    fontH1: {
        fontSize: 45,
    },
    fontH2: {
        fontSize: 35,
    },
    fontH3: {
        fontSize: 25,
    },
    fontH4: {
        fontSize: 15,
    },
    flexOne: {flex: 1},
    flexNine: {flex: 9},
    marginFive: {
        margin: 5,
    },
    simpleBorder:{
        borderWidth: 1,
        borderColor: 'grey',
    }
});


export {styles}