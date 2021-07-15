import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import context from './context';
import ThemeMode from './ThemeMode';



const stl = StyleSheet.create({
    glass: {
        margin: 10,
       // marginTop: 50,
        width: 62,
        height:  89,
        resizeMode: 'contain'
    },
    shot: {
        margin: 10,
        // marginTop: 50,
         width: 62,
         height: 50,
         resizeMode: 'contain'
    },
    statText: {
        fontSize: 18,
        fontWeight: "500",
        fontFamily: "BlinkMacSystemFont"
    },
    container: {
        display:"flex",
        flexDirection:'column',
        justifyContent:"center",
        alignItems: 'center',
        height:'100%',
        width:'100%',
        backgroundColor: '#fff',

    },
    containerDark: {
        display:"flex",
        flexDirection:'column',
        justifyContent:"center",
        alignItems: 'center',
        height:'100%',
        width:'100%',
        backgroundColor: '#40485a',
    }
})

export default () => {
    const ctx = React.useContext(context);
    const theme = React.useContext(ThemeMode);
    const statistic = [];
    const values = Object.keys(ctx);
    for (let key in ctx) {
        const index = values.indexOf(key) + 1;
        statistic.push(<Text key={index} style={stl.statText}>{key[0].toUpperCase() + key.slice(1) + ": " + ctx[key]}</Text>);
    }

    return (
        <View style={theme.theme == 'light' ? stl.container : stl.containerDark}>
        {statistic}
        </View>
    )
}
