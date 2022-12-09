import { Text, View, ActivityIndicator, Image, ScrollView } from 'react-native'
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

  static getDerivedStateFromProps(props, state) {
    console.log(state.animation, this.state.animation);
    return null;
  }

  async componentDidMount() {
    const getData = await apiCall();
    if (!getData) {
      this.setState({ animation: false });
      throw new Error("data not fetched");
    }
    this.setState({ data: getData, animation: false });
  }

  render() {
    return (
      <View>
        <ActivityIndicator size={this.state.animation ? 30 : 0} color={"orange"} animating={this.state.animation} />
        {
          this.state.data.map((item) => <Product data={item} key={item.id} />)
        }
      </View>
    )
  }
}

export default Body;