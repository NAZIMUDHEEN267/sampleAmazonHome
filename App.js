import { ScrollView, StyleSheet, View } from 'react-native';
import Nav from './src/Screens/Nav/Nav';
import Body from './src/Screens/Body/Body';
import Footer from './src/Screens/Footer/Footer';
import { useState } from 'react';

const App = () => {

  const [ top, setTop ] = useState("60%");

  const callback = (value) => {
    setTop(value);
  }

  return (
    <ScrollView style={styles.container}>
        {/* amazon nav */}
        <Nav />
        {/* amazon body */}
        <Body cb={callback}/>
      {/* amazon footer */}
        <Footer top={top}/>
    </ScrollView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})