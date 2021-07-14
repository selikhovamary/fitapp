import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {useState, useContext} from 'react';
import context from './context';



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
        fontWeight: 500,
        font: "BlinkMacSystemFont"
    },
    container: {
        display:"flex",
        flexDirection:'column',
        justifyContent:"center",
        alignItems: 'center',
        height:'100%',
        width:'100%',
        backgroundColor: '#fff',

    }
})

export default () => {
    const ctx = useContext(context);
    const statistic = [];

    for (let key in ctx) {
        statistic.push(<Text style={stl.statText}>{key[0].toUpperCase() + key.slice(1) + ": " + ctx[key]}</Text>);
    }
    return (
        <View style={stl.container}>
        {statistic}
        </View>
    )
}
