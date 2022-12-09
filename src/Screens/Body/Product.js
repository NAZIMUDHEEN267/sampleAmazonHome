import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <View style={{height: "60%", width: "50%"}}>
        <Image source={{uri: this.props.data.image}} style={{height: "100%", width: "100%"}} resizeMode={'cover'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
