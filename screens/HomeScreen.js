import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { DataContext } from '../Context/context'
import CardItem from '../components/Global/CardItem';
import { FlashList } from "@shopify/flash-list";


const HomeScreen = () => {
  const {data,setData} = useContext(DataContext);
   useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(res => setData({
        product_data : res,
        data_exist : true
      }));
   },[])
   
  return (

    <SafeAreaView className='flex-1'> 
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
    </SafeAreaView>
  )
}

export default HomeScreen