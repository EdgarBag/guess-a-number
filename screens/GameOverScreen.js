import React from 'react'
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native'

// components
import TextBox from './../components/textBox'
import Card from './../components/Card'
import MainButton from './../components/MainButton'

// utils
import colors from '../constans/colors'
import s from './../styles/gameOverScreen'

const GameOverScreen = props => {
    const { onRounds, userNumber, onNewGame } = props;
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={s.container}>
                    {/* <Card style={s.screen}> */}
                    <TextBox style={s.title}>The game is over!</TextBox>
                    <View style={s.imageContainer}>
                        <Image style={s.imageGO}
                            fadeDuration={1000}
                            source={require('./../assets/images/3.png')}
                        // source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/'}}
                        />
                    </View>
                    <View style={s.resultContainer}>
                        <TextBox style={s.resultText}>Phone needed
                    <Text style={s.highLight}> {onRounds} </Text>
                    rounds to guess the number
                    <Text style={s.highLight}> {userNumber} </Text>
                        </TextBox>
                    </View>
                    <MainButton onPress={onNewGame}>New Game</MainButton>
                    {/* </Card> */}
                </View >
            </ScrollView>
        </SafeAreaView>
    )
}

// const s = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         // height: 500
//     },
//     screen: {
//         // flex: 1,
//         // justifyContent: 'center',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         maxWidth: '70%',
//         height: '40%',
//         // paddingBottom: '20%',
//     },
//     imageContainer: {
//         width: Dimensions.get('window').width * 0.7,//300,
//         height: Dimensions.get('window').width * 0.7, //300,
//         borderRadius: 200,
//         borderWidth: 2,
//         overflow: 'hidden',

//         marginVertical: Dimensions.get('window').height / 20
//     },
//     imageGO: {
//         width: '100%',
//         height: '100%'
//     },
//     highLight: {
//         color: colors.primary
//     },
//     resultContainer: {
//         marginHorizontal: 30,
//         marginVertical: Dimensions.get('window').height / 20
//     },
//     resultText: {
//         textAlign: 'center',
//         fontSize: Dimensions.get('window').height < 400 ? 16 : 27
//     },
//     title: {
//         fontSize: 30
//     }
// })
export default GameOverScreen