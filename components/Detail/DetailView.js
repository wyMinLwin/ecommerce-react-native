import { Dimensions, View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper';
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CarouselView from './CarouselView';
import { Carousel } from 'react-native-snap-carousel';
import CardItem from '../Global/CardItem';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);



const DetailView = (props) => {
  const [categoryName,setCategoryName] = useState(() => props.category)
  const [itemsByCategory,setItemsByCategory] = useState([]);

  useEffect(() => {
    const fetchByCategory = async () => {
      const res = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
      const data = await res.json()
      await setItemsByCategory(prev => prev = data.products);
    }
    fetchByCategory();
    
  },[])
 
  return (
    <>
      <Card className='rounded-none mt-5'>
        <CarouselView product={props.product} length={props.length} />
        <Card.Content className='flex-col items-center'>
          <View className='flex-row justify-center items-center flex flex-wrap p-1 pt-0'>
            <Text className='font-semibold text-lg'>{props.product.title}</Text>
            <Text className='font-normal text-lg mx-1'>by</Text>
            <Text className='font-semibold text-lg'>{props.product.brand}</Text>
          </View>
          <View className='flex-row justify-center items-center p-1'>
            <Text variant="titleLarge" className='mr-10 font-semibold'>{props.product.price}$</Text>
            <Ionicons  name='star' size={15} color={'#872dd6'} />
            <Text className='mx-1 font-semibold' variant="bodyLarge" >
              {props.product.rating}/5
            </Text>
          </View>
          <Text className='p-1 text-base' variant='bodyMedium'>{props.product.description}</Text>   
        </Card.Content>     
        <Card.Actions className='mx-auto flex-wrap justify-center'>
          <Button className='justify-center' icon={'plus'} mode={'contained'} >Add To Cart</Button>
      </Card.Actions>
      </Card>
      <View className='flex-wrap flex-row p-2 mx-auto'>
        <Text className='text-lg font-normal text-center text-black '>
          People who search {props.product.title} also search for...
        </Text>
      </View>
      { itemsByCategory.length > 0 ?
        <Carousel 
        autoplay={true}
        layout='stack'
        layoutCardOffset={`18`}
        ref={props.CarouselRef}
        data={itemsByCategory}
        renderItem={({ item, index }) => (
          <CardItem product={item} />
        )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    : null}
    </>
  )
}

export default DetailView