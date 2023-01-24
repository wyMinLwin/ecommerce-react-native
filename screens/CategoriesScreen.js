import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import { DataContext } from '../Context/context'
import LoadingPlaceholder from '../components/Global/LoadingPlaceholder';


const CategoriesScreen = () => {
  const {data} = useContext(DataContext);
  return (
    <View className='my-auto mx-5'>
      <LoadingPlaceholder />
    </View>
  )
}

export default CategoriesScreen