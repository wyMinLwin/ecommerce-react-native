import { Dimensions, View } from 'react-native'
import { Card, Text } from 'react-native-paper';
import React, { useEffect, useMemo, useState } from 'react'
import CarouselView from './CarouselView';
import { Carousel } from 'react-native-snap-carousel';
import CardItem from '../Global/CardItem';
import Content from './Content';
import LoadingPlaceholder from '../Global/LoadingPlaceholder';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const DetailView = (props) => {
  const [isLoading,setIsLoading] = useState(true);
  const [categoryName,setCategoryName] = useState(() => props.category)
  const [itemsByCategory,setItemsByCategory] = useState([]);
  
  useEffect(() => {
    const fetchByCategory = async () => {
      const res = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
      const data = await res.json()
      await setItemsByCategory(prev => prev = data.products);
      await setIsLoading(prev => prev = false)
    }
    fetchByCategory();
    
  },[])
 
  return (
    <>
      <Card className='rounded-none my-3'>
        <CarouselView product={props.product} length={props.length} />
        <Content product={props.product} />
      </Card>
      <View className='flex-wrap flex-row my-3 px-2 mx-auto'>
        <Text className='text-lg font-normal text-center text-black '>
          People who search {props.product.title} also search for...
        </Text>
      </View>
      
      { isLoading ? <View className='mx-5'><LoadingPlaceholder /></View> 
        :<Carousel 
        autoplay={true}
        layout='default'
        ref={props.CarouselRef}
        data={itemsByCategory}
        renderItem={({ item }) => (
          <CardItem product={item} />
        )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={1}
        useScrollView={true}
      />
      }
    
    </>
  )
}

export default DetailView