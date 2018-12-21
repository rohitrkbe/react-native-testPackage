import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
const styles = StyleSheet.create({
  primaryTextStyle: {color: 'white',fontWeight: '500',fontSize:20,textAlign: 'center',fontFamily: Fonts.Roboto_Regular,},
  secondaryTextStyle: {color: 'white',fontWeight: '500',fontSize:20,textAlign: 'center',fontFamily: Fonts.Roboto_Regular,}
});

export const PrimaryText = ({text='NoPrimaryTextPassed',textStyle = {}}) => (
    <View>
        <TouchableOpacity onPress={alert.alert('primaryTextPressed')}>
            <Text pointerEvents="none" style={[styles.primaryTextStyle, textStyle]}> {text} </Text>
        </TouchableOpacity>
    </View>
);

export const SecondaryText = ({text='NoSecondaryTextPassed',textStyle = {}}) => (
    <View>
        <TouchableOpacity onPress={alert.alert('secondaryTextPressed')}>
            <Text pointerEvents="none" style={[styles.secondaryTextStyle, textStyle]}> {text} </Text>
        </TouchableOpacity>
    </View>
);