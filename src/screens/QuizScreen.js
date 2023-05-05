import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import Questions from '../components/Questions';
import Answers from '../components/Answers';
import axios from 'axios';
import ProgressBar from '../components/ProgressBar';
import Timer from '../components/Timer';
import { Ionicons } from '@expo/vector-icons';

const QuizScreen = ({ route, navigation }) => {
  const { selectedType, selectedDiffuculty, selectedCategory } = route.params;

  const baseUrl = `https://opentdb.com/api.php?amount=10${
    selectedCategory === null ? '' : `&category=${selectedCategory}`
  }${selectedDiffuculty === null ? '' : `&diffuculty=${selectedDiffuculty}`}${
    selectedType === null ? '' : `&type=${selectedType}`
  }`;

  const [questionData, setQuestionData] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [timerIsPlaying, setTimerIsPlaying] = useState(true);
  const [timerComplete, setTimerComplete] = useState(false);

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
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.icon}>
          <Ionicons
            name='return-up-back'
            size={36}
            color='black'
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
        <Timer
          questionIndex={questionIndex}
          timerIsPlaying={timerIsPlaying}
          setTimerComplete={setTimerComplete}
        />
      </View>
      <ProgressBar questionIndex={questionIndex} />
      <Questions data={questionData.results[questionIndex]} />
      <Answers
        data={questionData.results[questionIndex]}
        shuffled={shuffled}
        setTimerIsPlaying={setTimerIsPlaying}
        timerComplete={timerComplete}
      />
      {questionIndex === 9 ? (
        <Button title='Finish' onPress={() => {}} />
      ) : (
        <Button title='Next' onPress={questionIndexHandler} />
      )}
    </ScrollView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // justifyContent: 'space-between',
  },
  icon: {
    position: 'absolute',
    left: 10,
    backgroundColor: 'pink',
    borderRadius: 20,
  },
});
