import * as React from 'react';
import { View, Text, Image, StyleSheet, Switch } from 'react-native';
import { RadioButton } from 'react-native-paper';
import {useState, useContext} from 'react';
import context from './context';
import ThemeMode from './ThemeMode';


const stl = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        height:'100%'
      },
      containerDark: {
        backgroundColor: '#40485a',
        height:'100%'
      },
      textDark: {
          color: 'white'
      },
      themeContainer: {
          display: 'flex',
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'center'
      }
})

export default () => {
    const { theme, setTheme } = useContext(ThemeMode);

    return (
        <View style={theme == 'light' ? stl.container : stl.containerDark}>
            <View style={stl.themeContainer}>
            <Text style={{marginRight: 30}}>Dark theme:</Text>
            <Switch value={theme == "dark"} onValueChange={() => {
                const newVal = theme == "dark" ? "light" : "dark";
                setTheme(newVal);
            }}></Switch>
            </View>
        {/* <RadioButton.Group onValueChange={newValue => setTheme(newValue)} value={theme}>
        <View style={{display:'inlineBlock'}}>
          <Text style={theme == 'light' ? "": stl.textDark}>Light</Text>
          <RadioButton value="light" />
        </View>
        <View style={{display:'inlineBlock'}}>
          <Text>Dark</Text>
          <RadioButton value="dark" />
        </View>
      </RadioButton.Group> */}
      </View>
    )
}
