
import React, { useState } from 'react';
import {Header, Icon} from 'react-native-elements';
import LevelSlider from './slider';
import { View } from 'react-native';
import Modal from 'react-native-modal';

export default function HeadRoom(props) {
    const [levelModalVisible, setLevelModalVisible] = useState(false);

    const Level = () => (<Icon name="settings" color='#fff' onPress={() => setLevelModalVisible(true)} />)
    
    return (
        <>
            <Header
                placement="center"
                rightComponent={<Level />}
                centerComponent={{ text: 'memory game', style: { color: '#fff' } }}                
            />

            <Modal isVisible={levelModalVisible} onBackdropPress={() => setLevelModalVisible(false)} >
                <View style={{ backgroundColor: "#fff", justifyContent: "center", flex: 0.2, padding: 15, margin: 15, alignItems: 'stretch'}} >                    
                <LevelSlider setColumns={props.setColumns} setRows={props.setRows} rows={props.rows} />                                 
                </View>
            </Modal>
        </>                
    )
}