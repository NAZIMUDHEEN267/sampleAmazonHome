import { View, Text, ActivityIndicator, Alert, Button } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

class Comp extends React.Component {
  componentWillUnmount() {
    alert("unmount called");
  }
  render = () => (  
    <Text>Comp function</Text>
  )
}


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      native: "native",
      animation: true,
      comp: true
    }
    console.log("constructor"); // first calling method in react life cycling
    // state and bind events
    this.handleEvent.bind(this);
  }

  handleEvent(e) {
    console.log(e);
  }

  getSnapshotBeforeUpdate(prevProp, prevState){ // update 4

  }

  static getDerivedStateFromProps(props, state) { // second calling method in react life cycle method // updating 1
    console.log("derivedstate");
    return {
      native: "not native"
    }
  }

  renderItem ({item}) {
    return (
      <View>
        <Text>hello</Text>
      </View>
    )
  }

  async componentDidMount () { // after render method called \\ useref, events, fetch data 
    console.log("did mount");
    try {
      const json = await fetch("https://fakestoreapi.com/products");
      const data = await json.json();
      this.setState({data})
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({animation: false});
    }
  }

  shouldComponentUpdate(props, state) { // update 2
    return true;
  }

  componentDidUpdate() { // invoking every react re-rendering state & props changed 
    console.log("did update");
  }

  render() { // update 3 / 3
    console.log(this.state.comp);
    return (
      <View>
     { this.state.comp ? 
      <Comp />
      : null }

      <Button onPress={() => this.setState({comp: !this.state.comp})} title="button"/>
      </View>

    )
  }
}

export default Nav