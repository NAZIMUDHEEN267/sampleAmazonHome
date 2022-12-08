import { createStackNavigator } from "@react-navigation/stack";
import Nav from "../Screens/Nav/Nav";
import Body from "../Screens/Body/Body";
import Footer from "../Screens/Footer/Footer";

const Stack = createStackNavigator();

export default function StackNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Nav" component={Nav} initialParams={{value: "hello"}}/>
      <Stack.Screen name="Body" component={Body} />
      <Stack.Screen name="Footer" component={Footer} />
    </Stack.Navigator>
  )
}