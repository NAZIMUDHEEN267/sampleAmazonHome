import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import styles from "./styles";

// const Nav = () => {
//   const [height, setHeight] = useState(50);
//   return (
//     <View style={styles.nav}>
//       {/* top nav */}
//       <View style={[styles.top_nav, {height: 40, width: height}]}>
//         <Icon name="menu"/>
//       </View>
//       {/* searchbar */}
//       {/* bottom nav list */}
//     </View>
//   )
// }

// export default Nav

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    height: 50
  }
  componentWillUnmount () {
    console.log("hello user");
  }
  render() {
    return (
      <View style={styles.nav}>
       {/* top nav */}
       <View style={[styles.top_nav, { height: 40, width: this.state.height }]}>
         <Icon name="menu" onPress={() => this.setState({width: 100})}/>
       </View>
       {/* searchbar */}
       {/* bottom nav list */}
     </View>
    )
  }
}

export default Nav;