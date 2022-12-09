import { View, ActivityIndicator, FlatList, Text, SectionList, VirtualizedList } from 'react-native'
import React, { Component } from 'react';
import apiCall from '../../api/axios';
import Product from './Product';

export class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      animation: true
    }
  }

  async componentDidMount() {
    try {
      const getData = await apiCall();
      this.setState({data: getData});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({animation: false});
    }
  }

  render() {
    return (
      <View>
        <ActivityIndicator 
        color={"orange"} 
        size={this.state.animation ? 30 : 0} 
        animating={this.state.animation}
        />
        <FlatList 
          data={this.state.data}
          renderItem={({item, i}) => <Product data={item}/>}
          keyExtractor={(_, i) => i.toString()}
        />
      </View>
    )
  }
}

export default Body;