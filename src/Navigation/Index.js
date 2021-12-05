import React from 'react';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto  from 'react-native-vector-icons/Fontisto';
import CharacterScreen, { ScreenOptions as CharactersScreenOptions } from '../Components/Screens/Character/Index';
import CharactersDetailsScreen, { ScreenOptions as CharactersDetailsScreenOptions } from '../Components/Screens/Character/CharactersDetails';

import EpisodesScreen, { ScreenOptions as EpisodesScreenOptions } from '../Components/Screens/Episodes/Index';
import EpisodesDetailsScreen, { ScreenOptions as EpisodesDetailsScreenOptions } from '../Components/Screens/Episodes/EpisodesDetails';

import QuotesScreen, { ScreenOptions as QuotesScreenOptions } from '../Components/Screens/Quotes/Index';


const CharacterStackNavigator = createStackNavigator();

export const CharacterStack = () => {

    return(
        <CharacterStackNavigator.Navigator>
            <CharacterStackNavigator.Screen name='Character' component={CharacterScreen} options={CharactersScreenOptions}/>
            <CharacterStackNavigator.Screen name='CharactersDetails' component={CharactersDetailsScreen} options={CharactersDetailsScreenOptions}/>
        </CharacterStackNavigator.Navigator>
    )
};

const EpisodesStackNavigator = createStackNavigator();

export const EpisodesStack = () => {

    return(
        <EpisodesStackNavigator.Navigator>
            <EpisodesStackNavigator.Screen name='Episodes' component={EpisodesScreen} options={EpisodesScreenOptions}/>
            <EpisodesStackNavigator.Screen name='EpisodesDetails' component={EpisodesDetailsScreen} options={EpisodesDetailsScreenOptions}/>
        </EpisodesStackNavigator.Navigator>
    )
};

const QuotesStackNavigator = createStackNavigator();

export const QuotesStack = () => {

    return(
        <QuotesStackNavigator.Navigator>
            <QuotesStackNavigator.Screen name='Quotes' component={QuotesScreen} options={QuotesScreenOptions}/>
        </QuotesStackNavigator.Navigator>
    )
}


const AppBottomBarNavigator = createMaterialBottomTabNavigator();

export const AppBottomBar = () => {

    return(

        <AppBottomBarNavigator.Navigator >
            <AppBottomBarNavigator.Screen
                name='Characters'
                component={CharacterStack}
                options={
                    {
                        tabBarLabel:'Characters',
                        tabBarIcon:({  }) =>{
                            return(
                                <Fontisto name= 'persons' color= '#000' size={26} />
                            )
                        }
                        
                    }
                }
                
            />
            <AppBottomBarNavigator.Screen
                name='Episodes'
                component={EpisodesStack}
                options={
                    {
                        tabBarLabel:'Episodes',
                        tabBarIcon:({  }) =>{
                            return(
                                <MaterialCommunityIcons name= 'persons' color= '#000' size={26} />
                            )
                        }
                        
                    }

                    
                }
            />
            <AppBottomBarNavigator.Screen
                 name='Quotes'
                 component={QuotesStack}
                 options={
                     {
                         tabBarLabel:'Quotes',
                         tabBarIcon:({  }) =>{
                            return(
                                <MaterialCommunityIcons name= 'persons' color= '#000' size={26} />
                            )
                        }
                     }
                 }
            />
        </AppBottomBarNavigator.Navigator>
    )
}
