import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';
import Questions from '../components/Questions';
import Answers from '../components/Answers';
import axios from 'axios';
import ProgressBar from '../components/ProgressBar';
import Timer from '../components/Timer';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { QuizContext } from '../context/Context';

const QuizScreen = ({ route, navigation }) => {
  const { selectedType, selectedDiffuculty, selectedCategory } = route.params;

  const baseUrl = `https://opentdb.com/api.php?amount=10&encode=url3986${
    selectedCategory === null ? '' : `&category=${selectedCategory}`
  }${selectedDiffuculty === null ? '' : `&diffuculty=${selectedDiffuculty}`}${
    selectedType === null ? '' : `&type=${selectedType}`
  }`;

  const [questionData, setQuestionData] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [timerIsPlaying, setTimerIsPlaying] = useState(true);
  const [timerComplete, setTimerComplete] = useState(false);

  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setQuestionData(response.data);
    });
  }, []);

  if (!questionData) return null;

  const questionIndexHandler = () => {
    setQuestionIndex(questionIndex + 1);
    setTimerIsPlaying(true);
    setTimerComplete(false);
    setCurrentOptionSelected(null);
  };

  let arr = [
    questionData.results[questionIndex].correct_answer,
    ...questionData.results[questionIndex].incorrect_answers,
  ];
  let shuffled = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <QuizContext.Provider
      value={{
        timerComplete,
        setTimerComplete,
        timerIsPlaying,
        setTimerIsPlaying,
        currentOptionSelected,
        setCurrentOptionSelected,
        score,
        setScore,
      }}
    >
      <ScrollView style={styles.bg}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.icon}>
              <Ionicons
                name='return-up-back'
                size={36}
                color='black'
                onPress={() => navigation.navigate('Settings')}
              />
            </View>
            <Timer questionIndex={questionIndex} />
          </View>
          <ProgressBar questionIndex={questionIndex} />
          <Questions data={questionData.results[questionIndex]} />
          <Answers
            data={questionData.results[questionIndex]}
            shuffled={shuffled}
          />
          {questionIndex === 9 ? (
            <TouchableOpacity
              style={styles.buttonFinish}
              onPress={() => navigation.navigate('Score', { score: score })}
            >
              <Entypo
                style={styles.iconTrophy}
                name='trophy'
                size={24}
                color='black'
              />
              <Text style={styles.buttonText}>Finish</Text>
              <Entypo
                style={styles.iconTrophy}
                name='trophy'
                size={24}
                color='black'
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={questionIndexHandler}
            >
              <Text style={styles.buttonText}>Next Question</Text>
              <Ionicons
                style={styles.nexticon}
                name='arrow-redo'
                size={24}
                color='black'
              />
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </QuizContext.Provider>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#272D41',
  },
  container: {
    marginTop: 30,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 10,
    backgroundColor: 'chocolate',
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'chocolate',
    borderRadius: 10,
    paddingVertical: 4,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  buttonFinish: {
    backgroundColor: 'chocolate',
    borderRadius: 10,
    paddingVertical: 4,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 24,
  },
  nexticon: {
    position: 'absolute',
    right: 20,
    top: 6,
  },
  iconTrophy: {
    marginHorizontal: 10,
  },
});
