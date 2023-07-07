import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Header from './res/HomePage/Header'
import Searchbox from './res/HomePage/SearchBox'



export default function App() {
  return (
    <View style ={ styles.container}>
      <Header></Header>
      <Searchbox></Searchbox>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66BB6A',
  },
});
