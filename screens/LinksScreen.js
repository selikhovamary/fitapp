import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import GlassesContainer from '../components/GlassesContainer';
import ThemeMode from '../components/ThemeMode';

export default function LinksScreen({ navigation }) {
  const theme = React.useContext(ThemeMode);
  return (
    <ScrollView style={theme.theme == 'light' ? styles.container : styles.containerDark} contentContainerStyle={styles.contentContainer}>
      <View style={{position:'absolute',top:10, right:30}}><Ionicons name="md-stats" color='#2196f3' size={40} onPress={() => navigation.navigate('Statistics')}></Ionicons></View>
        <GlassesContainer count={4} type="wine"></GlassesContainer>
        <GlassesContainer count={4} type="cocktail"></GlassesContainer>
        <GlassesContainer count={4} type="beer"></GlassesContainer>
        <GlassesContainer count={4} type="shot"></GlassesContainer>
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
      <Button title="Statistic" onPress={() => navigation.navigate('Statistic')}></Button>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#40485a',
  },
  contentContainer: {
    paddingTop: 15,
    height:'100%',
    justifyContent:'center'
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
