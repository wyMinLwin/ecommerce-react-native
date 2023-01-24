import { View, Text } from 'react-native'
import React from 'react'
import { FlashList } from "@shopify/flash-list";
import CardItem from '../Global/CardItem';

const Home = ({data}) => {
  return (
    <FlashList 
        data={data.product_data.products}
        estimatedItemSize={100}
        renderItem={({item,index}) => (
          index === 0 ?
          <>
            <View className='p-2 mx-auto'>
              <Text className='text-2xl text-purple-500 font-bold h1'>
                Top Sellers of 2023!
              </Text>
            </View>
            <CardItem product={item} />
          </>
          : <CardItem product={item} />
        )}
      />
  )
}

export default Home