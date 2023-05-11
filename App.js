import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import Settings from './src/screens/Settings';
import ScoreScreen from './src/screens/ScoreScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Quiz' component={QuizScreen} />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='Score' component={ScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
