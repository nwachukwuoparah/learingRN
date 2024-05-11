import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/profile/profile';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="profile" component={Profile} />
      <Tab.Screen name="profile2" component={Profile} />
      <Tab.Screen name="profile3" component={Profile} />
      <Tab.Screen name="profile4" component={Profile} />
      <Tab.Screen name="profile5" component={Profile} />
    </Tab.Navigator>
  );
}