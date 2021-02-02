import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TextBox = props => {
    return (
        <Text style={{ ...s.body, ...props.style }}>{props.children}</Text>
    )
}

const s = StyleSheet.create({
    body: {
        fontFamily: 'sarpanch-medium'
    }
});

export default TextBox