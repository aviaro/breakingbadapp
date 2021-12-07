import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Switch } from 'react-native-gesture-handler';

import Styles from '../../../Utility/appStyle';


const EpsiodesDetailsScreen = props =>{
    console.log('data'+JSON.stringify(props.route.params.EpisodeDetails));
    const episode = props.route.params.EpisodeDetails
    let jumper ='';
    const chars =(props) =>{
        [...props].forEach(element =>{
            jumper+= element+',\n'
        }
        )
        return jumper;
    }
    return(
        <View style={{alignItems: 'center',backgroundColor:'grey',color:'#FFFFFF'}}>
        <View style={{fontWeight:'bold',margin:300}}>
            <Text>title:{episode.title}</Text>
            <Text>episode:{episode.episode}</Text>
            <Text>season:{episode.season}</Text>
            <View  >
            <Text>character appearances:   {chars(episode.characters)}</Text>
            </View>
            
            </View>
        </View>
    )

};


export const ScreenOptions = navData => {

    return{
    headerTitle: 'EpsiodesDetails'
    
    }

};

export default EpsiodesDetailsScreen;

