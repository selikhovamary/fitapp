import * as React from 'react';
import { View, Text, Image, StyleSheet, Switch } from 'react-native';
import {useContext} from 'react';
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
            <Text style={theme == 'light' ? {marginRight: 30} : {marginRight: 30, color: '#ffffff'}}>Dark theme:</Text>
            <Switch value={theme == "dark"} onValueChange={() => {
                const newVal = theme == "dark" ? "light" : "dark";
                setTheme(newVal);
            }}></Switch>
            </View>
      </View>
    )
}
