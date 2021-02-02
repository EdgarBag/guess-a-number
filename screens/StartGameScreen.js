import React, { useState, useEffect } from 'react'
import {
    View, StyleSheet,
    Button, TouchableWithoutFeedback,
    Keyboard, Alert, Dimensions,
    ScrollView, KeyboardAvoidingView
} from 'react-native'

// utils
import colors from './../constans/colors'
import s from '../styles/startGameScreenStyle'

// components
import Card from './../components/Card'
import Input from './../components/Input'
import NumberContainer from './../components/NumberContainer'
import TextBox from './../components/textBox'
import MainButton from './../components/MainButton'


const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('')
        , [confirmed, setConfirmed] = useState(false)
        , [selectedNumber, setSelectedNumber] = useState()
        , [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 6);



    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputhandler = () => {
        setEnteredValue('');
        setConfirmed(false)
    };

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue);
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('Invalid Number', 'Numbers should be between 1 - 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputhandler }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput =
            <Card style={s.summaryContainer}>
                <TextBox>You selected</TextBox>
                <View>
                    <NumberContainer>{selectedNumber}</NumberContainer>
                </View>
                <MainButton title='Start Game' onPress={() => props.onStartGame(selectedNumber)}>Start Game</MainButton>
            </Card>
    }

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 6)
        }
        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout)
        }
    });

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={s.screen}>
                        <TextBox style={s.title}>Start New Game!!!</TextBox>
                        <Card style={s.inputContainer}>
                            <TextBox>Select a number</TextBox>
                            <Input style={s.inputStyle}
                                bluerOnSubmit
                                autoCapitalize='none'
                                keyboardType='numeric'
                                maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue}
                            />
                            <View style={s.buttonsContainer}>
                                <View style={{ width: buttonWidth }, s.button}>
                                    <Button title='Reset' onPress={resetInputhandler} color={colors.dim} />
                                </View>
                                <View style={{ width: buttonWidth }, s.button}>
                                    <Button title='Confirm' onPress={confirmInputHandler} color={colors.prmary} />
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

// const s = StyleSheet.create({
//     screen: {
//         flex: 1,
//         padding: 10,
//         alignItems: 'center'
//     },
//     title: {
//         fontSize: 20,
//         marginVertical: 10,
//         fontFamily: 'sarpanch-medium'
//     },
//     inputContainer: {
//         width: Dimensions.get('window').height > 300 ? '80%' : '60%',
//         maxWidth: '90%',
//         alignItems: 'center',
//     },
//     buttonsContainer: {
//         flexDirection: 'row',
//         width: 350,
//         maxWidth: '100%',
//         marginTop: Dimensions.get('window').height > 600 ? 30 : 10,
//         justifyContent: 'space-between',
//     },
//     inputStyle: {
//         width: 50,
//         textAlign: 'center'
//     },
//     summaryContainer: {
//         margin: 20,
//         alignItems: 'center',
//         width: 150
//     }
// });

export default StartGameScreen;