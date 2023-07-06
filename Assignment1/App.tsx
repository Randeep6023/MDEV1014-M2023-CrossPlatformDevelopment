import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchResult from './SearchResult';
import Login from './Login';

export default function App() {
  return (
    <Login></Login>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66BB6A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
