import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator initialRouteName='CartStack'>
        <Stack.Screen name='CartStack' component={CartScreen}
            options={{
                headerShown:false,
            }}
        />
    </Stack.Navigator>
  )
}

export default CartStack