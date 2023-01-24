import { ScrollView, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import DetailView from '../components/Detail/DetailView';
import LoadingPlaceholder from '../components/Global/LoadingPlaceholder';

const DetailScreen = ({route}) => {
  
  const [length,setLength] = useState(0);
  const [product,setProduct] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchProductById = async () => { 
        const res = await fetch(`https://dummyjson.com/products/${route.params.id}`)
        const data = await res.json(); 
        await setProduct(prevProduct => prevProduct = data);
        await setLength(data.images.length);
        await setIsLoading(prev => prev = false);   
      }
      fetchProductById();
      
    },[])
    
    
  return (
    <ScrollView  className='flex-1'>
      {isLoading ? <View className='mx-5'><LoadingPlaceholder /></View> : <DetailView product={product} length={length} category={route.params.category} />}
    </ScrollView>
  )
}

export default DetailScreen