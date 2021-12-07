import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheetת, FlatList,Image, TouchableOpacity} from 'react-native';
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

    const StatusColor =(params) =>{
        switch(params){
            case 'Alive':
            return 'green';
            case 'Deceased':
            return 'red';
            case 'Presumed dead':
            return '#f09615';    
            case 'Unknown':
            return 'grey';    
            
                
        }
    }

    return(
        <View style={Styles.container}>
            <FlatList style={{width: '100%',}}
                data={data}
                keyExtractor={item => item.char_id}
                renderItem={
                    char => 
                    <View style={{alignItems: 'center', width: '100%'}}>
                        <TouchableOpacity style={Styles.separator} onPress={()=> props.navigation.navigate('CharactersDetails',{characterSelect:char.item}) }>
                            
                        <View style={{height:130,width:'2%',backgroundColor:StatusColor(char.item.status)}}></View>
                                <View style={Styles.imageView}>
                                    <Image 
                                    style={{width: 100, height:130,borderRadius:5 }}
                                        source={{uri:char.item.img}}
                                    />
                                </View>
                                
                                <View Styles={Styles.textView}>
                                <Text >Name: {char.item.name}</Text>
                                <Text>Nickname: {char.item.nickname}</Text>
                                <Text>portrayed by/actor: {char.item.portrayed}</Text>
                                </View>
                        


                            
                        </TouchableOpacity>
                    </View>
                }
            />
        </View>
    )

};


export const ScreenOptions = navData => {

    return{
    headerTitle: 'Characters'
    
    }

};

export default CharacterScreen;

