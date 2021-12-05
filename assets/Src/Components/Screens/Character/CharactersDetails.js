import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Switch } from 'react-native-gesture-handler';

import Styles from '../../../Utility/appStyle';


const CharacterDetailScreen = props =>{

    return(
        <View style={Styles.container}>

        </View>
    )

};


export const ScreenOptions = navData => {

    return{
    headerTitle: 'CharctersDetails'
    
    }

};

export default CharacterDetailScreen;

