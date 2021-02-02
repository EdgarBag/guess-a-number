import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, ScrollView, FlatList, Dimensions, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as ScreenOrientation from 'expo-screen-orientation'

// utils
import s from './../styles/gameScreenStyle'

// components
import NumberContainer from './../components/NumberContainer'
import Card from './../components/Card'
import TextBox from './../components/textBox'
import MainButton from './../components/MainButton'


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum;
    }
}

const renderListItem = (value, numOfRound) => (
    <View key={value} style={s.listItem}>
        <TextBox>#{numOfRound}</TextBox>
        <TextBox>{value}</TextBox>
    </View>
)

const GameScreen = (props) => {
    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

    const [initialGuess, setInitialGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
        , [currentGuess, setCurrentGuess] = useState(initialGuess)
        , [pastGuesses, setPastGuesses] = useState([initialGuess])
        , { userChoice, onGameOver } = props
        , currentLow = useRef(1)
        , currentHigh = useRef(100)
        , [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width)
        , [availableDeviceHeiht, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);



    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceHeight(Dimensions.get('window').height)
            setAvailableDeviceWidth(Dimensions.get('window').width)
        }
        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout)
        }
    })

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Are you sure?', 'You know that, this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess + 1
        }

        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(currentRounds => currentRounds + 1)
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses])

    }

    useEffect(() => {
        if (currentGuess == userChoice) {
            onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver]);

    let listContainerStyle = s.listContainer;
    if (availableDeviceWidth < 350) {
        listContainerStyle = s.listContainerBig
    }

    if (availableDeviceHeiht < 500) {
        return (
            <View style={s.screen}>
                <TextBox> Opponent's Guess</TextBox>
                <View style={s.controls}>
                    <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name='md-remove' size={24} color='white' />
                    </MainButton>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name='md-add' size={24} color='white' />
                    </MainButton>
                </View>
                <View style={listContainerStyle}>
                    <ScrollView contentContainerStyle={s.list}>
                        {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                    </ScrollView>
                </View>
            </View>
        );
    }

    return (
        <View style={s.screen}>
            <TextBox> Opponent's Guess</TextBox>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={s.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name='md-remove' size={24} color='white' />
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name='md-add' size={24} color='white' />
                </MainButton>
            </Card>
            <View style={listContainerStyle}>
                <ScrollView contentContainerStyle={s.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView>
                {/* <FlatList data={pastGuesses} renderItem={}/> */}
            </View>
        </View>
    )
}
// const s = StyleSheet.create({
//     screen: {
//         flex: 1,
//         padding: 10,
//         alignItems: 'center'
//     },
//     buttonContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
//         width: 400,
//         maxWidth: '80%'
//     },
//     controls: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         width: '60%'
//     },
//     listContainer: {
//         flex: 1,
//         // flexDirection: 'column',
//         justifyContent: 'space-around',
//         width: '60%',
//     },
//     listContainerBig: {
//         // flex: 1,
//         // flexDirection: 'column',
//         justifyContent: 'space-around',
//         width: '80%',
//     },
//     list: {
//         flexGrow: 1,
//         alignItems: 'center',
//         justifyContent: 'flex-end',

//     },
//     listItem: {
//         borderColor: 'black', borderWidth: 1,
//         padding: 10,
//         marginVertical: 10,
//         backgroundColor: 'white',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '70%'
//     },
// });

export default GameScreen;