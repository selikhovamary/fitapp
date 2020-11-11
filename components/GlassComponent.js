import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {useState} from 'react';



const stl = StyleSheet.create({
    glass: {
        width: 41,
        height: 60,
        margin: 10,
        marginTop: 50
    }
})

export default (prop) => {
    const type = prop.type;
    const states = type === "water" ? [0, 1, 2] : [0, 1];
    const allGlassesStates = {
        "water": [require('../assets/images/emptyWater.png'), require('../assets/images/halfWater.png'), require('../assets/images/fullWater.png')],
        "wine": [],
        "short": [],
        "long": []
    }
    const [glass, setGlass] = useState(states[0]);
    const getUrl = () => {
        const allStates = allGlassesStates[type];
        return allStates[glass];
    }
    return (
        <View onTouchStart={() => setGlass(glass === states.length - 1 ? 0 : glass + 1)}>
        <Image source={getUrl()} style={stl.glass} ></Image>
        </View>
    )
}

