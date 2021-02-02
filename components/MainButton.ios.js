import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from './../constans/colors'

const MainButton = props => {

    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
            <View style={s.button}>
                <Text style={s.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const s = StyleSheet.create({
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