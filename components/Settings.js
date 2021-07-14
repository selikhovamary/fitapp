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
    }
})

export default () => {
    const ctx = useContext(context);
    const statistic = [];

    for (let key in ctx) {
        statistic.push(<Text>{key + ": " + ctx[key]}</Text>);
    }
    return (
        <></>
    )
}
