import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import IOSNav from './IOSNav'
import AndroidNav from './AndroidNav'
import { Platform } from 'react-native'

const Nav = () => {
  return (
    <NavigationContainer>
        {Platform.OS === 'ios' ? <IOSNav /> : <AndroidNav />}
    </NavigationContainer>
  )
}

export default Nav