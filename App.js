import { View, StyleSheet } from 'react-native';
import Nav from './src/Screens/Nav/Nav';
import Body from './src/Screens/Body/Body';
import Footer from './src/Screens/Footer/Footer';
import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from './src/Navigators/StackNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      {/* amazon nav */}
      <Nav />
      {/* amazon body */}
      {/* <Body /> */}
      {/* amazon footer */}
      <Footer />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})