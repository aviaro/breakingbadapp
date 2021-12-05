import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheetת, FlatList} from 'react-native';
import { Switch } from 'react-native-gesture-handler';

import Styles from '../../../Utility/appStyle';


const CharacterScreen = props =>{

    const [data,setData] = useState([]);
    const url = 'https://www.breakingbadapi.com/api/characters';

    const GetData = async ()  =>{
        const response = await fetch(url,{
            method: 'GET'
        })
        const serverData = await response.json();
        setData(serverData);
        console.log('Data:'+JSON.stringify(serverData));
    };

    useEffect(() =>{
        GetData();
    },[])

    return(
        <View style={Styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.char_id}
                renderItem={
                    char <View></View>
                }
            />
        </View>
    )

};


export const ScreenOptions = navData => {

    return{
    headerTitle: 'Charcters'
    
    }

};

export default CharacterScreen;

