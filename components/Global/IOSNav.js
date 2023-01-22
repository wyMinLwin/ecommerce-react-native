import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from '../../routes/HomeStack';
import CategoriesStack from '../../routes/CategoriesStack';
import CartStack from '../../routes/CartStack';


const Tab = createBottomTabNavigator();

const IOSNav = () => {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#872dd6',
        tabBarIcon: ({ focused, color }) => {
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
        <Tab.Screen name='Home' component={HomeStack}
        options={{
          headerShown:false
        }}
        />
        <Tab.Screen name='Categories' component={CategoriesStack}
        options={{
          headerTitle:'Category List',
          headerTintColor: '#872dd6'
        }}
        />
        <Tab.Screen name='Cart' component={CartStack} 
        options={{
          headerTitle:'Your Cart',
          headerTintColor: '#872dd6'
        }}
        />
    </Tab.Navigator>
  )
}

export default IOSNav