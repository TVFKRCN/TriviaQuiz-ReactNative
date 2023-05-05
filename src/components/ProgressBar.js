import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressBar = ({ questionIndex }) => {
  return (
    <View style={styles.bar}>
      <Progress.Bar
        progress={(questionIndex + 1) / 10}
        width={350}
        height={15}
        borderRadius={8}
      />
      <Text style={styles.text}>{questionIndex + 1}/10</Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    position: 'absolute',
    right: 30,
  },
});
