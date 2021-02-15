import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

const fetchFont = () => {
  return Font.loadAsync({
    'sarpanch-medium': require('./assets/fonts/Sarpanch-Medium.ttf'),
    'sarpanch-black': require('./assets/fonts/Sarpanch-Black.ttf')
  })
}

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading startAsync={fetchFont}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }

  const startNewGameHandler = () => {
    setUserNumber(null)
    setGuessRounds(0)
  };

  let page = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    page = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    page = <GameOverScreen onNewGame={startNewGameHandler} userNumber={userNumber} onRounds={guessRounds} />
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title='Guess a Number' />
      {page}
      {/* <GameScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor:'#008080'
  },
});
