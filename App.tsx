
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import HomePage from './components/(Tabs)/homePage';
import './gesture-handler';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <HomePage/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
