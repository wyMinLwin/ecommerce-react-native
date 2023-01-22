import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import DetailView from '../components/Detail/DetailView';

const DetailScreen = ({route}) => {
  const [length,setLength] = useState(0);
  const [product,setProduct] = useState([]);
    useEffect(() => {
        const fetchProductById = async () => { 
        const res = await fetch(`https://dummyjson.com/products/${route.params.id}`)
        const data = await res.json(); // Extracting data as a JSON Object from the response
        // console.log(data)
        await setProduct(prevProduct => prevProduct= data);
        await setLength(data.images.length);
        // .then(res => res.json())
        // .then(res => setProduct(prevProduct => prevProduct=res));
      }
      fetchProductById();
    },[])
    
  return (
    <ScrollView className='flex-1'>
      <DetailView product={product} length={length} category={route.params.category} />
    </ScrollView>
  )
}

export default DetailScreen