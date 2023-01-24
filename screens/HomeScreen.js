import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context/context'
import CardItem from '../components/Global/CardItem';
import Home from '../components/Home/Home';
import Loading from '../components/Global/LoadingPlaceholder';


const HomeScreen = () => {
  const [isLoading,setIsLoading] = useState(true);
  const {data,setData} = useContext(DataContext);
   useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(res => {
        setData({
        product_data : res,
        data_exist : true
        })
        setIsLoading(prevLoading => prevLoading=false);
      });
   },[])
   
  return (

    <SafeAreaView className='flex-1'> 
      {isLoading ? <Loading /> : <Home data={data} />}
    </SafeAreaView>
  )
}

export default HomeScreen