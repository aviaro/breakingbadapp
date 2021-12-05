import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import { Switch } from 'react-native-gesture-handler';

import Styles from '../../../Utility/appStyle';


const CharacterDetailScreen = props =>{
    console.log('data'+JSON.stringify(props.route.params.characterSelect));
    const select = props.route.params.characterSelect
    return(
        <View style={Styles.container}>
                <Image
                    style={{width:100, height:100}}
                    source={{uri:select.img}}    
                
                />
                <Text>name:{select.name}</Text>
                <Text>Nickname:{select.nickname}</Text>
                <Text>portrayed by/actor:{select.portrayed}</Text>
                <Text>portrayed by/actor:{select.occupation}</Text>
                <Text>Dead or alive :{select.status}</Text>
                <Text>birthday:{select.birthday}</Text>
                <Text>appearance in seasons:{select.appearance}</Text>




        </View>
    )

};


export const ScreenOptions = navData => {

    return{
    headerTitle: 'CharctersDetails'
    
    }

};

export default CharacterDetailScreen;

