import { useState, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { QuizContext } from '../context/Context';

const Answers = ({ data, shuffled }) => {
  const {
    timerComplete,
    setTimerIsPlaying,
    currentOptionSelected,
    setCurrentOptionSelected,
  } = useContext(QuizContext);
  const [correctOption, setCorrectOption] = useState(null);

  const controlHandler = (i) => {
    setCurrentOptionSelected(i);
    setCorrectOption(data.correct_answer);
    setTimerIsPlaying(false);
  };

  return (
    <View style={styles.container}>
      {shuffled &&
        shuffled.map((i) => {
          return (
            <TouchableOpacity
              disabled={
                timerComplete === true || currentOptionSelected !== null
                  ? true
                  : false
              }
              key={i}
              style={styles.box}
              onPress={() => controlHandler(i)}
            >
              <Text style={styles.text}>{i}</Text>
              {i === correctOption ? (
                <View style={styles.checkBox}>
                  <MaterialCommunityIcons
                    name='check-circle'
                    size={24}
                    color='green'
                  />
                </View>
              ) : i === currentOptionSelected ? (
                <View style={styles.checkBox}>
                  <MaterialCommunityIcons
                    name='close-circle'
                    size={24}
                    color='red'
                  />
                </View>
              ) : null}
              {i === data.correct_answer && timerComplete ? (
                <View style={styles.checkBox}>
                  <MaterialCommunityIcons
                    name='check-circle'
                    size={24}
                    color='green'
                  />
                </View>
              ) : null}
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default Answers;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box: {
    justifyContent: 'center',
    backgroundColor: 'deepskyblue',
    borderRadius: 30,
    marginVertical: 10,
    height: 60,
    width: 300,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  checkBox: {
    position: 'absolute',
    right: 10,
  },
});
