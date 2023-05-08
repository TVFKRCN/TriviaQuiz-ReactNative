import { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { QuizContext } from '../context/Context';

const Timer = ({ questionIndex }) => {
  const { setTimerComplete, timerIsPlaying } = useContext(QuizContext);
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        key={questionIndex}
        isPlaying={timerIsPlaying}
        duration={30}
        size={120}
        colors={['#0000ff', '#00ffff', '#f08080', '#ff0000']}
        colorsTime={[30, 20, 10, 0]}
        onComplete={() => setTimerComplete(true)}
      >
        {({ remainingTime }) => (
          <View>
            {remainingTime === 0 ? (
              <Text style={styles.text}>Too Late!</Text>
            ) : (
              <View>
                {remainingTime <= 10 && (
                  <Text style={styles.text}>Hurry up!</Text>
                )}
                <Text style={styles.textTime}>{remainingTime}</Text>
              </View>
            )}
          </View>
        )}
      </CountdownCircleTimer>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  textTime: {
    textAlign: 'center',
    fontSize: 30,
  },
});
