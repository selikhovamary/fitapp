import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {useState, useContext} from 'react';
import context from './context';



const stl = StyleSheet.create({
    glass: {
        margin: 10,
        width: 62,
        height:  89,
        resizeMode: 'contain'
    },
    shot: {
        margin: 10,
         width: 62,
         height: 50,
         resizeMode: 'contain'
    }
})

export default (prop) => {
    const type = prop.type;
    const [ctx, setCtx] = useState(useContext(context))
    const states = type === "water" ? [0, 1, 2] : [0, 1];
    const allGlassesStates = {
        "water": [require('../assets/images/empty.png'), require('../assets/images/half.png'), require('../assets/images/full.png')],
        "wine": [require('../assets/images/wine.png'), require('../assets/images/wine2.png')],
        "cocktail": [require('../assets/images/cocktailEmpty.png'), require('../assets/images/cocktailFull.png')],
        "beer": [require('../assets/images/beerEmpty.png'), require('../assets/images/beerFull.png')],
        "shot": [require('../assets/images/shotEmpty.png'), require('../assets/images/shotFull.png')],
    }
    const [glass, setGlass] = useState(states[0]);
    const getUrl = () => {
        const allStates = allGlassesStates[type];
        return allStates[glass];
    }
    return (
        <View onTouchStart={() => {
            const newState = glass === states.length - 1 ? 0 : glass + 1;
            setGlass(newState)
            const mount = newState === 0 ? -1 : type === "water" ? .5 : 1;
            const newCtx = ctx;
            newCtx[type] = newCtx[type] + mount;
            console.log(newCtx)
            setCtx(newCtx);
        }}> 
        <Image source={getUrl()} style={type === "shot" ? stl.shot : stl.glass} ></Image>
        </View>
    )
}
