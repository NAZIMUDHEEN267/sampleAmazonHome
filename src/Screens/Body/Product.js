import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native'
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/FontAwesome";

export default class Product extends Component {
  constructor(props) {
    super(props);

    const { image, title, rating: { rate }, price, description } = this.props.data;
    this.image = image;
    this.title = title;
    this.rate = rate;
    this.price = price;
    this.description = description;
    this.starGenerator = this.starGenerator.bind(this);
  }

  starGenerator() {
    const icons = new Array();
    let intVal = this.rate.toFixed(0);

    for (let i = 1; i <= 5; i++) {
      if (i <= intVal) {
        icons.push(<Icon name='star' key={i} color={"orange"}/>)
      } else {
        icons.push(<Icon name='star-o' key={i} color={"orange"}/>)
      }
    } 

    return icons;
  }

  render() {

    return (
      <View style={styles.product}>
        <View style={styles.product_image}>
          <Image source={{ uri: this.image }} style={styles.image} resizeMode={'cover'} />
        </View>
        <View style={styles.product_image}>
          {/* product name */}
          <Text style={styles.title}>{this.title}</Text>
          {/* stars */}
          <View style={{flexDirection: "row"}}>
            {
              this.starGenerator()
            }
          </View>
          {/* rate */}
          {/* description */}
        </View>
      </View>
    )
  }
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  product: {
    height: height / 3,
    width: width,
    flexDirection: "row"
  },
  product_image: {
    width: "50%",
    height: "80%",
    alignSelf: "center",
    paddingHorizontal: 10
  },
  image: {
    height: "100%",
    width: "100%"
  },
  title: {
    fontWeight: "600",
    fontSize: 15
  }
})
