import { Text, View, Linking, Dimensions } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      footerHeight: 0
    }

    this.link = this.link.bind(this);
  }

  // link method
  link() {
    Linking.openURL("https://amazon.com")
  }

  render() {
    console.log(this.props.top);
    return (
      <View style={[styles.footer, {marginTop: this.props.top}]}>
        {/* footer top bar */}
        <View style={styles.footer_top}>
          <Entypo name='triangle-up' size={15} style={styles.font}/>
          <Text style={styles.font}>TOP OF PAGE</Text>
        </View>

        {/* footer main nav links */}
        <View style={styles.footer_center}>
          <View>
            <Text style={styles.font} onPress={this.link}>Amazon.in</Text>
            <Text style={styles.font} onPress={this.link}>Amazon Pay</Text>
            <Text style={styles.font} onPress={this.link}>Wish List</Text>
            <Text style={styles.font} onPress={this.link}>Your Account</Text>
            <Text style={styles.font} onPress={this.link}>Returns</Text>
            <Text style={styles.font} onPress={this.link}>Customer Service</Text>
          </View>
          <View>
            <Text style={styles.font} onPress={this.link}>Your Orders</Text>
            <Text style={styles.font} onPress={this.link}>Amazon App Download</Text>
            <Text style={styles.font} onPress={this.link}>Find a Wish List</Text>
            <Text style={styles.font} onPress={this.link}>Your Recently Viewed</Text>
            <Text style={styles.font} onPress={this.link}>Sell</Text>
            <Text style={styles.font} onPress={this.link}>Help</Text>
          </View>
        </View>

        {/* footer below links */}
        <View style={styles.footer_below}>
          <View>
            <View style={styles.flex}>
              <Feather name="globe" size={15} color={"#fff"}/>
              <Text style={[styles.font, {marginLeft: 15}]}>English</Text>
            </View>
            <Text style={styles.font} onPress={this.link}>Switch Accounts</Text>
            <Text style={styles.font} onPress={this.link}>Sign Out</Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.font, { fontSize: 11 }]} onPress={this.link}> Condition of Use </Text>
            <Text style={[styles.font, { fontSize: 11 }]} onPress={this.link}>Privacy Notice</Text>
            <Text style={[styles.font, { fontSize: 11 }]} onPress={this.link}>Interest-Based Ads</Text>
          </View>
          <View style={styles.flex}>
            <FontAwesome name='copyright' size={10} color={"#fff"} />
            <Text style={[styles.font, { fontSize: 10, marginLeft: 10 }]}>
              1996-2023, Amazon.com, Inc. and ites affiliates
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Footer