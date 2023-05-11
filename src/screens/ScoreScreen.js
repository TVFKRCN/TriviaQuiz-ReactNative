import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const ScoreScreen = ({ route, navigation }) => {
  const { score } = route.params;
  return (
    <>
      <LottieView
        autoPlay
        source={require('../../assets/33892-confetti-brust.json')}
        style={styles.lottieBg}
        resizeMode='cover'
      />
      <View style={styles.container}>
        <Text style={styles.textHead}>CONGRATS!!!</Text>
        <Text style={styles.text}>Your Score is:</Text>
        <Text style={styles.scoreText}>{score}</Text>
        <Text style={styles.text}>out of 10</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ScoreScreen;

const styles = StyleSheet.create({
  lottieBg: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  textHead: {
    color: 'moccasin',
    fontSize: 32,
    marginBottom: 20,
  },
  text: {
    color: 'moccasin',
    fontSize: 36,
  },
  scoreText: {
    color: 'chocolate',
    fontSize: 64,
  },
  button: {
    backgroundColor: 'chocolate',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginTop: 35,
  },
  buttonText: {
    fontSize: 28,
  },
});
