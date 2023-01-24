import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeStack from '../../routes/HomeStack'
import CategoriesStack from '../../routes/CategoriesStack'
import CartStack from '../../routes/CartStack';


const Tab = createMaterialTopTabNavigator();


const AndroidNav = ({swipe}) => {
  const insets = useSafeAreaInsets();
  // console.log(nav.current?.getCurrentRoute().name)
  
  return (
    <Tab.Navigator
    style={{ paddingTop: insets.top }}
    initialRouteName='Home'
    screenOptions={({route}) => ({
      swipeEnabled: swipe,
      tabBarActiveTintColor: '#872dd6',
      tabBarInactiveTintColor: ({color}) => (color),
      tabBarIndicatorStyle : {
        backgroundColor:'#872dd6'
      },
      tabBarShowLabel:false,
      tabBarIcon: ({ focused,color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Categories') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        } else if (route.name === 'Cart') {
          iconName = focused ? 'cart' : 'cart-outline';
        }

        return <Ionicons name={iconName} size={24} color={color} />;
      },
    })}
    >
        <Tab.Screen name='Home' component={HomeStack} />
        <Tab.Screen name='Categories' component={CategoriesStack} />
        <Tab.Screen name='Cart' component={CartStack} />
    </Tab.Navigator>
  )
}

export default AndroidNav