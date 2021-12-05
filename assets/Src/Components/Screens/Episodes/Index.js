import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Switch } from 'react-native-gesture-handler';

import Styles from '../../../Utility/appStyle';


const EpsiodesScreen = props =>{

    const [data,setData] = useState([]);
    const url = 'https://www.breakingbadapi.com/api/episodes';

    const GetData = async ()  =>{
        const response = await fetch(url,{
            method: 'GET'
        })
        const serverData = await response.json();
        setData(serverData);
    };

    useEffect(() =>{
        GetData();
    },[])

    return(
        <View style={Styles.container}>

        </View>
    )

};


export const ScreenOptions = navData => {

    return{
    headerTitle: 'Episodes'
    
    }

};

export default EpsiodesScreen;

