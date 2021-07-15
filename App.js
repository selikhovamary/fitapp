import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
 import useCachedResources from './hooks/useCachedResources';
 import BottomTabNavigator from './navigation/BottomTabNavigator';
 import LinkingConfiguration from './navigation/LinkingConfiguration';
import context from './components/context';
import ThemeMode from './components/ThemeMode';
import Statistics from './components/Statistics';

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [theme, setTheme] = React.useState('light');
  const value = {theme, setTheme};
  const themeProps = {
    colors: {
      background: theme == 'light' ? "" : '#40485a',
      border: '0px solid #ccc',
      text: theme == 'light' ? "black" : 'white',
    }
  }
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeMode.Provider value={value}>
      <context.Provider value={{
        water: 0,
        wine: 0,
        cocktail: 0,
        beer: 0,
        shot: 0
      }
    }>
      <View style={theme == 'light' ? styles.container : styles.containerDark}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}        
        <NavigationContainer linking={LinkingConfiguration} theme={themeProps}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="Statistics" component={Statistics} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
      </context.Provider>
      </ThemeMode.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center'
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#40485a',
    justifyContent:'center'
  }
});
