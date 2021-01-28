import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {useState} from 'react';



const stl = StyleSheet.create({
    glass: {
        margin: 10,
       // marginTop: 50,
        width: 62,
        height: 89,
        resizeMode: 'contain'
    }
})

export default (prop) => {
    const type = prop.type;
    
    const states = type === "water" ? [0, 1, 2] : [0, 1];
    const allGlassesStates = {
        "water": [require('../assets/images/emptyWater1.png'), require('../assets/images/halfWater1.png'), require('../assets/images/fullWater1.png')],
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
        <View onTouchStart={() => setGlass(glass === states.length - 1 ? 0 : glass + 1)} > 
        <Image source={getUrl()} style={stl.glass} ></Image>
        </View>
    )
}
