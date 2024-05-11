import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./authstack.jsx"
import BottomTabNavigator from "./bottomNavigation.jsx";
const RootStack = createStackNavigator();


const RootStackNavigator = () => {

  return (
    <RootStack.Navigator
      initialRouteName=""
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name="auth" component={AuthStack} />
      <RootStack.Screen name="bottomNavigation" component={BottomTabNavigator} />
      {/*<RootStack.Screen name="AuthStack" component={AuthStack} /> */}
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
