import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import colors from './../constans/colors'

const MainButton = props => {
    let ButtonCoimponent = TouchableOpacity;
    if (Platform.Version >= 21) {
        ButtonCoimponent = TouchableNativeFeedback;
    }
    return (
        <View style={s.buttonContainer}>
            <ButtonCoimponent onPress={props.onPress} activeOpacity={0.6}>
                <View style={s.button}>
                    <Text style={s.buttonText}>{props.children}</Text>
                </View>
            </ButtonCoimponent>
        </View>
    )
}

const s = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'sarpanch-medium',
        fontSize: 13,
    }
});

export default MainButton