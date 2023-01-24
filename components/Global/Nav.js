import React, { useEffect, useState } from 'react'
import { NavigationContainer, useNavigationContainerRef, useRoute } from '@react-navigation/native'
import IOSNav from './IOSNav'
import AndroidNav from './AndroidNav'
import { Platform } from 'react-native'

const Nav = () => {
  const NavigationContainerRef = useNavigationContainerRef();
  const [swipe,setSwipe] = useState(true);
  const checkSwipe = (name) => {
    name === 'DetailStack' ? setSwipe(false) : setSwipe(true)
  }
 
  return (
    <NavigationContainer onStateChange={() => checkSwipe(NavigationContainerRef.current?.getCurrentRoute().name)} ref={NavigationContainerRef}>
        {Platform.OS === 'ios' ? <IOSNav /> : <AndroidNav swipe={swipe} />}
    </NavigationContainer>
  )
}

export default Nav