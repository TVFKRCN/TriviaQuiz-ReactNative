import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        source={require('../../assets/28891-quiz-bump.json')}
        style={styles.lottie}
        resizeMode='cover'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272D41',
  },
  lottie: {
    height: 200,
  },
  button: {
    backgroundColor: 'chocolate',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 28,
  },
});
