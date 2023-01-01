import { View, ActivityIndicator, FlatList, ScrollView } from 'react-native'
import React, { Component } from 'react';
import apiCall from '../../api/axios';
import Product from './Product';
import Footer from '../Footer/Footer';

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
      this.setState({data: getData.products});
      this.props.cb(0);
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
      
      <ScrollView>
        {
          this.state.data.map((item, i) => <Product data={item} key={i} />)
        } 
      </ScrollView>
      </View>
    )
  }
}

export default Body;