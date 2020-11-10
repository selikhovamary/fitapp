import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { View, Text } from 'react-native';
import {useState} from 'react';



const useStyles = createUseStyles({
    glass: {
        backgroundImage: (g) => 'url(' + g + ')',
        height: '500px',
    }
})

export default (prop) => {
    console.log(prop)
    const states = [0, 1, 2];
    const [glass, setGlass] = useState(states[0]);
    const image = require('./images.png');
    const stl = useStyles(image);

    return (
        <View className={stl.glass}><Text></Text></View>
    )
}

