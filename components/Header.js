import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import colors from './../constans/colors'
import TextBox from './../components/textBox'

const Header = props => {

    return (
        <View style={{
            ...s.headerBase, ...Platform.select({
                ios: s.headerIOS,
                android: s.headerAndroid
            })
        }}>
            <TextBox style={s.headerTitle}>{props.title}</TextBox>
        </View>

    )
}

const s = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        padding: 30,
        alignItems: 'center',
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
    },
    headerAndroid: {
        backgroundColor: colors.primary,
    },
    headerTitle: {
        color: 'black',
        fontSize: 33
    }
})

export default Header;