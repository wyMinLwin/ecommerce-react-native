import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Platform } from 'react-native'

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomeStack'>
        <Stack.Screen name='HomeStack' component={HomeScreen}
            options={{
                headerShown:false,
                title:'Home'
            }}
        />
        <Stack.Screen name='DetailStack' component={DetailScreen}
            options={({route}) => ({
                headerShown: Platform.OS === 'ios' ? true : false,
                title: route.params.title,
            })}
        />
    </Stack.Navigator>
  )
}

export default HomeStack