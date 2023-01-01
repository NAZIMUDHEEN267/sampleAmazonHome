import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native'
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/FontAwesome";

export default class Product extends Component {
  constructor(props) {
    super(props);

    const { images, title, rating, price, description } = this.props.data;
    this.image = images[0];
    this.title = title;
    this.rate = rating;
    this.price = price;
    this.description = description;
    this.starGenerator = this.starGenerator.bind(this);
  }

  // stars for rating
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

    return (
      <View style={{flexDirection: "row", marginTop: 5}}>
        { icons }
        <Text style={{fontSize: 10, fontWeight: "600", marginLeft: 5}}>{this.rate.toFixed(1)}</Text>
      </View>
    );
  }

  render() {

    return (
      <View style={styles.product}>
        <View style={styles.product_part}>
          <Image source={{ uri: this.image }} style={styles.image} resizeMode={'cover'} />
        </View>
        <View style={styles.product_part}>
          {/* product name */}
          <Text style={styles.title}>{this.title}</Text>
          {/* stars */}
          { this.starGenerator() }
          {/* rate */}
            <Text style={styles.price}>{`$${this.price}`}</Text>
          {/* description */}
          <Text>
            {this.description.substring(0, 30) + "..."}
          </Text>

          {/* button */}
          <TouchableHighlight style={styles.product_btn} onPress={() => alert("Thanks for adding cart")}>
            <Text style={{alignItems: "center", textAlign: "center"}}>Add to Cart</Text>
          </TouchableHighlight>
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
  product_part: {
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
  },
  price: {
    fontSize: 17
  },
  product_btn: {
    padding: 8,
    marginTop: 10,
    backgroundColor: "orange",
    borderColor: "#d1994f",
    borderWidth: 2,
    borderRadius: 5,
    elevation: 2
  }
})
