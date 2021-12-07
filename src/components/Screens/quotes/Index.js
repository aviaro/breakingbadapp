import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FlatList, Switch } from 'react-native-gesture-handler';

import Styles from '../../../Utility/appStyle';


const QuotesScreen = props =>{

    const [data,setData] = useState([]);
    const url = 'https://www.breakingbadapi.com/api/quotes';

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
                keyExtractor={item => item.quote_id}
                renderItem={quotes => 
                    <View style={{color:'white'}} >
                        <Text>quote:{quotes.item.quote}</Text>
                        <Text>author:{quotes.item.author}</Text>



                    </View>
                        



                }
            
            
            
            
            
            />

        </View>
    )

};


export const ScreenOptions = navData => {

    return{
    headerTitle: 'Quotes'
    
    }

};

export default QuotesScreen;

