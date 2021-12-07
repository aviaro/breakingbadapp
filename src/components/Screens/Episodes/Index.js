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
        <View Style={{alignItems:'center'}}>
            <FlatList 
                data={data}
                keyExtractor={item=> item.episode_id}
                renderItem={episode =>
                <TouchableOpacity style={{alignItems: 'center'}} onPress={()=> props.navigation.navigate('EpisodesDetails',{EpisodeDetails:episode.item})}>
                    <View  style={Styles.episodeView}>
                    <Text> Title:   {episode.item.title}</Text>
                    <Text> episode: {episode.item.episode}</Text>
                    <Text> Season:  {episode.item.season}</Text>
                    <Text> AirDate: {episode.item.air_date}</Text>
                    </View>


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

