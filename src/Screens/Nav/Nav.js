import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react';
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import amazon from "../../assets/Images/amazon.png"

export class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: 'products'
    }

    this.handleText = this.handleText.bind(this);
  }

  // handling text event
  handleText(text) {
    this.setState({text});
  }

  render() {
    return (
      <View style={styles.nav}>
        {/* top nav */}
        <View style={styles.top_nav}>
          <View style={styles.row}>
            <TouchableOpacity>
              <Entypo name='menu' style={styles.nav_icon} />
            </TouchableOpacity>
            <Image source={amazon} style={[styles.nav_image, styles.ml]} resizeMode={"center"}/>
          </View>
          <View style={styles.row}>
            <Text style={styles.username}>NAZIM</Text>
            <Feather name='user' style={[styles.nav_icon, styles.ml]} />
            <View style={[styles.cart, styles.ml]}>
              <Text style={styles.cart_items}>5</Text>
              <Feather name='shopping-cart' style={styles.nav_icon} />
            </View>
          </View>
        </View>
        {/* searchbar */}
        <View style={styles.searchbar}>
          <TextInput placeholder='search...' value={this.state.text} style={styles.search} onChangeText={this.handleText}/>
          <TouchableOpacity style={styles.search_btn}>
            <Feather name='search' style={[styles.nav_icon, {fontWeight: "600", color: "#000"}]}/>
          </TouchableOpacity>
        </View>
        {/* footer nav links */}
        <View style={styles.nav_links}>
          {
            ["Wishlist", "Category", "Deals", "Sell"]
            .map((item, i) => {
              return (
                <TouchableOpacity key={i} style={styles.link_item} onPress={() => alert("Thank you for clicking me..")} >
                  <Text style={{ color: "#fff" }} >{item}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default Nav