import { Text, View, Image } from 'react-native'
import React, { Component } from 'react';
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import amazon from "../../assets/Images/amazon.png"
import { TouchableOpacity } from 'react-native-gesture-handler';

export class Nav extends Component {
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
            <Feather name='user' size={30} style={[styles.nav_icon, styles.ml]} />
            <View style={[styles.cart, styles.ml]}>
              <Text style={styles.cart_items}>5</Text>
              <Feather name='shopping-cart' size={30} style={styles.nav_icon} />
            </View>
          </View>
        </View>
        {/* searchbar */}
        <View style={styles.searchbar}>

        </View>
        {/* footer nav links */}
        <View style={styles.nav_links}>

        </View>
      </View>
    )
  }
}

export default Nav