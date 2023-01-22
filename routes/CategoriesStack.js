import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const CategoriesStack = () => {
  return (
    <Stack.Navigator initialRouteName='CategoriesStack'>
        <Stack.Screen name='CategoriesStack' component={CategoriesScreen}
            options={{
                headerShown:false,
            }}
        />
        <Stack.Screen name='DetailStack' component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default CategoriesStack