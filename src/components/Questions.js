import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

const Questions = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>{data.question}</Text>
      </View>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  questionBox: {
    justifyContent: 'center',
    backgroundColor: 'sandybrown',
    borderRadius: 20,
    marginVertical: 20,
    height: 150,
    width: 350,
  },
  questionText: {
    marginHorizontal: 8,
    fontSize: 20,
    textAlign: 'center',
  },
});
