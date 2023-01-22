import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import { DataContext } from '../Context/context'


const CategoriesScreen = () => {
  const {data} = useContext(DataContext);
  return (
    <View>
      <Text>developement in progress</Text>
    </View>
  )
}

export default CategoriesScreen