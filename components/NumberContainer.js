import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from './../constans/colors'
import TextBox from '../components/textBox'
const NumberContainer = (props) => {
    return <View style={s.numberContainer}>
        <TextBox style={s.numbers}>{props.children}</TextBox>
    </View>

}

const s = StyleSheet.create({
    numberContainer: {
        borderWidth: 2,
        borderColor: colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: colors.accent,
        fontSize: 22
    }
})

export default NumberContainer;