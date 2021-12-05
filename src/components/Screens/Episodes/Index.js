import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import {  Switch } from 'react-native-gesture-handler';

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
        console.log('Data'+JSON.stringify(serverData));
    };

    useEffect(() =>{
        GetData();
    },[])

    return(
        <View style={Styles.container}>
            <FlatList
                data={data}
                keyExtractor={item=> item.episode_id}
                renderItem={episode =>
                <TouchableOpacity onPress={()=> props.navigation.navigate('EpisodesDetails',{EpisodeDetails:episode.item})}>
                    
                    <Text>{episode.item.title}</Text>
                    <Text>{episode.item.episode}</Text>
                    <Text>{episode.item.season}</Text>
                    <Text>{episode.item.air_date}</Text>


                </TouchableOpacity>
                
                }
            
            
            />
        </View>
    )

};


export const ScreenOptions = navData => {

    return{
    headerTitle: 'Episodes'
    
    }

};

export default EpsiodesScreen;

