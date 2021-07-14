import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
 import useCachedResources from './hooks/useCachedResources';
 import BottomTabNavigator from './navigation/BottomTabNavigator';
 import LinkingConfiguration from './navigation/LinkingConfiguration';
import context from './components/context';
import Statistics from './components/Statistics';

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <context.Provider value={{
        water: 0,
        wine: 0,
        cocktail: 0,
        beer: 0,
        shot: 0
      }
    }>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}        
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="Statistic" component={Statistics} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
      </context.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center'
  },
});
