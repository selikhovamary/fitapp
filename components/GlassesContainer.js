import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {useState} from 'react';
import GlassComponent from './GlassComponent';



const stl = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default (prop) => {
    const count = prop.count;
    const items = [];
    for (let i = 1; i <= count; i++) {
        const item = <GlassComponent type="water" id={i}></GlassComponent>;
        items.push(item);
    }
    return (
        <View style={stl.container}>
            {items}
        </View>
    )
}